import { Testimonial } from "../models/testimonial.model";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map} from 'rxjs/operators'

@Injectable()
export class TestimonialService {
    private testimonials: Testimonial[] = [];
    private testimonialUpdated = new Subject<Testimonial[]>();
    
    constructor(private http: HttpClient) {}
    
    getTestimonial() {
        this.http.get<{ message: string, testimonials: any }>('http://localhost:3000/api/testimonials')
            .pipe( map((testimonialData) => {
                return testimonialData.testimonials.map(testimonial => {
                    return {
                        name: testimonial.name,
                        emailid: testimonial.emailid,
                        mobileno: testimonial.mobileno,
                        imagePath: testimonial.imagePath,
                        feedback: testimonial.feedback,
                        id: testimonial._id
                    };
                });
            }))
            .subscribe((transformedTestimonialData) => {
                this.testimonials = transformedTestimonialData;
                this.testimonialUpdated.next([...this.testimonials]);
            })
    }

    getTestimonialUpdateListener() {
        return this.testimonialUpdated.asObservable();
    }

    addTestimonial(name: string, emailid: string, mobileno: string, picture: File, feedback: string) {
        const testimonialData = new FormData();
        testimonialData.append("name", name);
        testimonialData.append("emailid", emailid);
        testimonialData.append("mobileno", mobileno);
        testimonialData.append("picture", picture, picture.name);
        testimonialData.append("feedback", feedback);

        this.http
            .post<{ message: string, testimonial: Testimonial}>('http://localhost:3000/api/testimonials', testimonialData)
            .subscribe(responseData => {
                const testimonial: Testimonial = {
                    id: responseData.testimonial.id,
                    name: name,
                    emailid: emailid,
                    mobileno: mobileno,
                    imagePath: responseData.testimonial.imagePath,
                    feedback: feedback
                };
                this.testimonials.push(testimonial);
                this.testimonialUpdated.next([...this.testimonials]);
            });
        
    }

    deleteTestimonial(testimonialId: string) {
        this.http.delete('http://localhost:3000/api/testimonials/' + testimonialId)
            .subscribe(() => {
                const updatedTestimonials   = this.testimonials.filter((testimonial)=> testimonial.id !== testimonialId);
                this.testimonials = updatedTestimonials;
                this.testimonialUpdated.next([...this.testimonials]);
            });
    }
}