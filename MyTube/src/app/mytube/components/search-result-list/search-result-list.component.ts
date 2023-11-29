import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../../models/search-item.model';
import { SortingData } from 'src/app/core/models/sorting-data.model';
import { SearchRequestService } from 'src/app/core/services/search-request.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SearchResponseService } from '../../services/search-response.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent {
  constructor(
    private searchRequest: SearchRequestService,
    private http: HttpService,
    private searchResponse: SearchResponseService
  ) {}

  isSearchData: boolean = false;
  searchResultData!: Array<SearchItem>;

  request: string = '';

  ngOnInit() {
    this.searchRequest.requestString.subscribe((string: string) => {
      this.request = string;
      // console.log('this.request', this.request, this.request.length);

      if (this.request.length >= 3) {
        this.receiveRequestedData(this.request);
        this.isSearchData = true;
      } else {
        this.searchResultData = [];
        this.searchRequest.isRequestValid = false;
      }
    });
  }

  receiveRequestedData(requestStr: string) {
    this.http.getData().subscribe((data) => {
      this.searchResultData = data.items.filter((item: SearchItem) =>
        item.snippet.title.toLowerCase().includes(requestStr)
      );
      // console.log(this.searchResultData);
    });
  }

  ngDoCheck(){
    this.searchResponse.onResponse(this.searchResultData);
    // this.searchResponse.responseItems.subscribe((data) => console.log(data));
  }

  sortData: SortingData = { sortby: 'default', direction: true };

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
