import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './dashboard/landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductDetailComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
