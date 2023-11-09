import { Component } from '@angular/core';
import { SortingData } from 'src/app/core/models/sorting-data.model';
import { HttpService } from 'src/app/mytube/services/http.service';
import { SearchItem } from '../../models/search-item.model';
import { SearchResultListComponent } from '../../components/search-result-list/search-result-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
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
}
