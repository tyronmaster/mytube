import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultListComponent } from './mytube/components/search-result-list/search-result-list.component';
import { NotfoundComponent } from './mytube/pages/notfound/notfound.component';
import { MainComponent } from './mytube/pages/main/main.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  // { path: 'list', component: MainComponent },
  {
    path: 'list',
    loadChildren: () =>
      import('./mytube/mytube.module').then((m) => m.MytubeModule),
  },
  // { path: 'login', component: LoginComponent },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
