import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { SearchResultResponse } from './search/models/search-result-response.model';
import { SearchItem } from './search/models/search-item.model';
import { SortingData } from './models/sorting-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSearchData: boolean = false;
  searchResultData!: Array<SearchItem>;

  isSortingShown: boolean = false;
  sortData: SortingData = { sortby: 'default', direction: true };

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

  showSorting(val: boolean) {
    this.isSortingShown = val;
  }

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
