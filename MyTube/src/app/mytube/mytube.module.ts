import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CoreModule } from '../core/core.module';
import { NodataComponent } from './components/nodata/nodata.component';
import { SortingComponent } from '../core/components/sorting/sorting.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [
    MainComponent,
    NodataComponent,
    SortingPipe,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    SearchResultListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [MainComponent, NotfoundComponent],
})
export class MytubeModule {}
