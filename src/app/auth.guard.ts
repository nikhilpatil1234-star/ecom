import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Your authentication logic here, using this.sellerService
    if (localStorage.getItem('seller')) {
      return true;
    }
    return this.sellerService.isSellerLogedIn.value; // Return true to allow navigation, or false to prevent it
  }
}
