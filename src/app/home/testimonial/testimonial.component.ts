import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials = [
    { 'name': 'Anna Doe', 'pic': 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg', 'feedback': 'Had a great experience at DCPCA during Durga Puja '},
    { 'name': 'Chidananda Patra', 'pic': './../../assets/images/contact/chidap.jpg', 'feedback': 'DCPCA conducts the best Durga puja in Chennai'},
    { 'name': 'Subhajit Patra', 'pic': './../../assets/images/contact/subhajitp.jpg', 'feedback': 'DCPCA Rocks!'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
