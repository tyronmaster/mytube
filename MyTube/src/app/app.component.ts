import { Component } from '@angular/core';
import { HttpService } from './mytube/services/http.service';
import { SearchResultResponse } from './mytube/models/search-result-response.model';
import { SearchItem } from './mytube/models/search-item.model';
import { SortingData } from './core/models/sorting-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
