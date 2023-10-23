import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { AuthComponent } from './header/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultListComponent,
    HeaderComponent,
    SearchBarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
