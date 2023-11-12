import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoggedUser = false;
  ngDoCheck() {
    if (localStorage.getItem('token')?.length) {
      this.isLoggedUser = true;
    }
  }
}
