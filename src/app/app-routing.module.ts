import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstLookComponent } from './first-look/first-look.component';
import { ImagesComponent } from './images/images.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: '', component: FirstLookComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
