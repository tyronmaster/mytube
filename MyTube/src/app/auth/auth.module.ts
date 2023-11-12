import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AuthComponent, LoginComponent],
})
export class AuthModule {}
