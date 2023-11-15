import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { AuthModule } from '../auth/auth.module';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SortingPipe } from './pipes/sorting.pipe';
import { AppComponent } from '../app.component';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    SettingsComponent,
    SortingComponent,
    FooterComponent,
    SortingPipe
  ],
  imports: [CommonModule, AuthModule, FormsModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, SortingComponent, SortingPipe],
})
export class CoreModule {}
