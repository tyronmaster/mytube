import { Component } from '@angular/core';
import { SortingData } from 'src/app/core/models/sorting-data.model';
import { HttpService } from 'src/app/core/services/http.service';
import { SearchItem } from '../../models/search-item.model';
import { SearchResultListComponent } from '../../components/search-result-list/search-result-list.component';
import { SearchRequestService } from 'src/app/core/services/search-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private searchRequest: SearchRequestService) {}

  isSearchData: boolean = false;
  ngOnInit() {
    this.isSearchData = this.searchRequest.isRequestValid;
  }
}
