import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './dashboard/landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { ProdDescComponent } from './product-detail/prod-desc/prod-desc.component';
import { FormComponent } from './add-product/form/form.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProdDescComponent, pathMatch: 'full' },
  { path: 'addProduct', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
