import { Component, EventEmitter, Output } from '@angular/core';
import { SortingData } from 'src/app/core/models/sorting-data.model';
import { SearchRequestService } from '../../services/search-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private searchRequests: SearchRequestService) {}

  isRequestValid = false;

  ngDoCheck() {
    this.isRequestValid = this.searchRequests.isRequestValid;
  }

  @Output() sendSortingData = new EventEmitter<boolean>();
  sortData: SortingData | undefined;

  isSortingShown: boolean = false;
  showSorting($event: boolean) {
    this.isSortingShown = $event;
    this.sendSortingData.emit($event);
  }

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
