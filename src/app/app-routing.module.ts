import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstLookComponent } from './first-look/first-look.component';
import { FeaturesComponent } from './features/features.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', component: FirstLookComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
