import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { AuthModule } from '../auth/auth.module';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    SettingsComponent,
    SortingComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AuthModule, FormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
