import { Injectable, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUP } from '../types/signup';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  signUpData(data: SignUP) {
    return this.http
      .post('http://localhost:3000/seller', data, {
        observe: 'response',
      })
      .subscribe(
        (data) => {
          this.isSellerLogedIn.next(true);
          if (data.statusText === 'Created') {
            this.alertMessage('success', 'successfull in signup');
          }
          console.log('data from service', data);
          localStorage.setItem('seller', JSON.stringify(data.body));
          this.router.navigate(['seller-home']);
        },
        (error) => {
          this.alertMessage('error', `${error.message}`);
        }
      );
  }
  checkIfEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>('http://localhost:3000/seller').pipe(
      map((users) => {
        return users.some((user) => user.email.includes(email));
      })
    );
  }
  alertMessage(severity: string, messages: string) {
    return this.messageService.add({
      detail: messages,
      severity: severity,
      key: 'service',
    });
  }
  reloadUser() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
