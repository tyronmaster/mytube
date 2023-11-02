import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { SearchResultResponse } from './search/models/search-result-response.model';
import { SearchItem } from './search/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyTube';
  isSearchData: Boolean = true;
  searchResultData!: Array<SearchItem>;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getData().subscribe((data) => {
      this.searchResultData = data.items;
    });
  }

  onDataReceived(){

  }
}
