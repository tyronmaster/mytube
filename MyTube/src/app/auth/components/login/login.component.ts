import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  token: string = '';

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    console.log('AUTH token = ', this.token);
  }
  ngOnChanges() {
    localStorage.setItem('token', 'test-user');
  }
}
