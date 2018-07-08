import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestimonialService } from '../../providers/testimonials.service';
import { Testimonial } from './../../models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  private testimonialSub: Subscription;
  constructor( private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getTestimonial();
    this.testimonialSub = this.testimonialService.getTestimonialUpdateListener()
        .subscribe((testimonials: Testimonial[]) => {
            this.testimonials = testimonials;
            console.log(testimonials);
        })
  }

  ngOnDestroy() {
    this.testimonialSub.unsubscribe();
  }

  onDelete(testimonialId: string) {
    this.testimonialService.deleteTestimonial(testimonialId);
    console.log('testimonial id = ', testimonialId);
  }

}
