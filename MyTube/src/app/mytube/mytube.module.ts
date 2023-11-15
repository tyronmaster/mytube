import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { NodataComponent } from './components/nodata/nodata.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'item/:id', component: DetailComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    NodataComponent,
    NotfoundComponent,
    DetailComponent,
  ],
  imports: [
    SearchResultListComponent,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [MainComponent, NotfoundComponent],
})
export class MytubeModule {}
