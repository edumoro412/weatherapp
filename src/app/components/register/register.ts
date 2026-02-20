import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { WeatherService } from '../../weather-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterResponse, UserRegisterInterface } from '../../interfaces/user';
import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    Object.keys(this.registerForm.controls).forEach(
      (key) => this.registerForm.get(key)?.markAllAsTouched,
    );

    if (this.registerForm.invalid) {
      return;
    }

    const userData: UserRegisterInterface = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
    };

    this.weatherService.register(userData).subscribe({
      next: (response: RegisterResponse) => {
        if (response.status === 201) {
          this.router.navigate(['/login']);
        }
      },
      error: (error: Error) => {
        alert('Ocurrio un error ' + error.message);
      },
    });
  }
}
