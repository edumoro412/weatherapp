import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WeatherService } from '../../weather-service';
import { CommonModule } from '@angular/common';
import { LoginResponse, UserInterface } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    Object.keys(this.loginForm.controls).forEach((key) =>
      this.loginForm.get(key)?.markAllAsTouched(),
    );
    if (this.loginForm.invalid) {
      return;
    }

    const userData: UserInterface = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    console.log(userData, '=========?');

    this.weatherService.login(userData).subscribe({
      next: (response: LoginResponse) => {
        if (response.status == 200) {
          localStorage.setItem('token', response.token);
        } else if (response && 'token' in response) {
          localStorage.setItem('token', response.token);
        }

        this.router.navigate(['/']);
      },
      error: (error: Error) => {
        console.error('Ocurrio un error', userData);
      },
    });
  }
}
