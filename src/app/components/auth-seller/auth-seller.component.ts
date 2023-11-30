import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth-seller',
  templateUrl: './auth-seller.component.html',
  styleUrls: ['./auth-seller.component.scss'],
  providers: [MessageService],
})
export class AuthSellerComponent implements OnInit {
  signupForm: FormGroup;
  emailControl;
  messages: any;
  passwordControl;
  showLogin: boolean = false;
  signInForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public sellerService: SellerService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.signupForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.emailControl = this.signupForm.get('email');
    this.passwordControl = this.signupForm.get('password');
    this.signInForm = fb.group({
      emailSign: ['', [Validators.required, Validators.email]],
      passwordSign: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.emailControl = this.signupForm.get('emailSign');
    this.passwordControl = this.signupForm.get('passwordSign');
  }
  get f() {
    return this.signupForm.controls;
  }
  get y() {
    return this.signInForm.controls;
  }
  ngOnInit(): void {
    this.sellerService.reloadUser();
  }

  onSubmit() {
    const email = this.signupForm.get('email')?.value;
    this.sellerService.checkIfEmailExists(email).subscribe((data) => {
      console.log('dataaaaaaaaa', data);
      if (data) {
        this.messageService.add({
          detail: 'email already exists',
          severity: 'error',
        });
      } else {
        this.sellerService.signUpData(this.signupForm.value);
      }
    });
  }
  logIn() {
    console.log('this.logInForm', this.signInForm.value);
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
