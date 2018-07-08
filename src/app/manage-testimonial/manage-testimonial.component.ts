import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Testimonial } from '../models/testimonial.model';
import { TestimonialService } from '../providers/testimonials.service';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.scss']
})
export class ManageTestimonialComponent implements OnInit {
  testimonial: Testimonial;
  form: FormGroup;
  imagePreview: string;
  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl( null, { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30) ]} ),
      'emailid': new FormControl( null, { validators: [Validators.required]}),
      'mobileno': new FormControl( null, { validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]}),
      'picture': new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
      'feedback': new FormControl( null, { validators: [Validators.required]})
    }) 
  }

  onAddTestimonial() {
    if(this.form.invalid)
      return;
    
    this.testimonialService.addTestimonial(this.form.value.name, this.form.value.emailid, this.form.value.mobileno, this.form.value.picture, this.form.value.feedback);
    this.form.reset();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ picture: file});
    this.form.get('picture').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(file);
  }

}
