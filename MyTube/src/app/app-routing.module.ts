import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultListComponent } from './mytube/components/search-result-list/search-result-list.component';
import { NotfoundComponent } from './mytube/pages/notfound/notfound.component';
import { MainComponent } from './mytube/pages/main/main.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: MainComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
