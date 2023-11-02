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

  isSearchData: Boolean = false;
  searchResultData!: Array<SearchItem>;

  constructor(private http: HttpService) {}

  receiveRequestedData(requestStr: string) {
    this.http.getData().subscribe((data) => {
      this.searchResultData = data.items.filter((item: SearchItem) =>
        item.snippet.title.toLowerCase().includes(requestStr)
      );
      console.log(this.searchResultData);
    });
  }

  loadData($event: string) {
    let searchString = $event;

    if (searchString.length >= 3) {
      this.isSearchData = true;
      this.receiveRequestedData(searchString);
    } else {
      this.isSearchData = false;
    }
  }
}
