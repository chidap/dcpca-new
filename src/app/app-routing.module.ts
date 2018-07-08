import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ManageTestimonialComponent }from './manage-testimonial/manage-testimonial.component';
const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "member", component: MemberComponent },
    { path: 'manageTestimonial', component: ManageTestimonialComponent },
    { path: '**', redirectTo: ''}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}