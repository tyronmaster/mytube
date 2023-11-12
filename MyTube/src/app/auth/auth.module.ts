import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [AuthComponent, LoginComponent],
})
export class AuthModule {}
