import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitted = false;
  onSubmit() {
    if (this.submitVerify()) {
      console.log('form data', this.loginForm.value, this.loginForm.valid);
      localStorage.setItem('token', this.loginForm.value.username+'&'+this.loginForm.value.password)
      this.router.navigate(['/list']);
    } else {
      console.log('no value', this.loginForm.valid);
      this.isSubmitted = true;
    }
    console.log('isSubmitted', this.isSubmitted);
  }

  inputValidator(inputName: string): boolean {
    return (
      (this.loginForm.get(inputName)?.hasError('required') &&
        (this.loginForm.get(inputName)?.dirty ||
          this.loginForm.get(inputName)?.touched ||
          this.isSubmitted)) ||
      false
    );
  }

  inputLengthValidator(inputName: string): boolean {
    const inputValue = this.loginForm.get(inputName)?.value || '';
    return inputValue.length < 3 && this.isSubmitted;
  }

  submitVerify(): boolean {
    const usernameIsValid =
      (this.loginForm.get('username')?.value || '').length >= 3 &&
      !this.loginForm.get('username')?.hasError('required');
    const passwordIsValid =
      (this.loginForm.get('password')?.value || '').length >= 3 &&
      !this.loginForm.get('password')?.hasError('required');
    return usernameIsValid && passwordIsValid;
  }

}
