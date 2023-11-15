import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../../models/search-item.model';
import { SortingData } from 'src/app/core/models/sorting-data.model';
import { SearchRequestService } from 'src/app/core/services/search-request.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
  imports: [CommonModule, SearchItemComponent],
})
export class SearchResultListComponent {
  constructor(
    private searchRequest: SearchRequestService,
    private http: HttpService,
  ) {}

  isSearchData: boolean = false;
  searchResultData!: Array<SearchItem>;

  request: string = '';

  ngOnInit() {
    this.searchRequest.requestString.subscribe((string: string) => {
      this.request = string;
      console.log('this.request', this.request, this.request.length);

      if (this.request.length >= 3) {
        this.receiveRequestedData(this.request);
        this.isSearchData = true;
      }
    });
  }

  receiveRequestedData(requestStr: string) {
    this.http.getData().subscribe((data) => {
      this.searchResultData = data.items.filter((item: SearchItem) =>
        item.snippet.title.toLowerCase().includes(requestStr)
      );
      console.log(this.searchResultData);
    });
  }

  sortData: SortingData = { sortby: 'default', direction: true };

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
