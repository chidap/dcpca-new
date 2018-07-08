import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { MainComponent } from './home/main/main.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { CurrentNewsComponent } from './home/current-news/current-news.component';
import { MemberComponent } from './member/member.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { TestimonialService } from './providers/testimonials.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    MainComponent,
    TestimonialComponent,
    CurrentNewsComponent,
    MemberComponent,
    ManagePostComponent,
    ManageTestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    TestimonialService        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
