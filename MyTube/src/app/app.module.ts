import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { AuthComponent } from './header/auth/auth.component';
import { SettingsComponent } from './header/settings/settings.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NodataComponent } from './search/nodata/nodata.component';
import { SortingComponent } from './header/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    AuthComponent,
    SettingsComponent,
    NodataComponent,
    SortingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchResultListComponent,
    FormsModule,
    HttpClientModule,
  ],
})
export class AppModule {}
