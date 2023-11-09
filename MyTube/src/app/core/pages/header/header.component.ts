import { Component, EventEmitter, Output } from '@angular/core';
import { SortingData } from 'src/app/core/models/sorting-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sendToParent = new EventEmitter<string>();
  @Output() sendSortingData = new EventEmitter<boolean>();
  sortData: SortingData | undefined;

  getDataFromChild($event: string) {
    console.log('received data from search-bar child component');
    this.sendToParent.emit($event);
  }

  isSortingShown: boolean = false;
  showSorting($event: boolean) {
    this.isSortingShown = $event;
    this.sendSortingData.emit($event);
  }

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
