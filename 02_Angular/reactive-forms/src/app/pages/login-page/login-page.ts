import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  loginFormGroup = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
  });

  onLoginClicked() {
    // Imprimir cada propiedad
    console.log('** Form control inputs **');
    console.log('Email:', this.loginFormGroup.get('emailFormControl')?.value);
    console.log('Password:', this.loginFormGroup.get('passwordFormControl')?.value);

    // Imprimir todo el objeto del formulario
    console.log('** Form group value **');
    console.log('Form Value:', this.loginFormGroup.value);
  }

  clearForm() {
    this.loginFormGroup.reset();
  }
}
