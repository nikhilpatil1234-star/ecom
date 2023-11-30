import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthSellerComponent } from './components/auth-seller/auth-seller.component';
import { CartComponent } from './components/cart/cart.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerService } from './services/seller.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seller', component: AuthSellerComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
