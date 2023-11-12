import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../../models/search-item.model';
import { SortingData } from 'src/app/core/models/sorting-data.model';

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent {
  @Input() searchResultData!: Array<SearchItem>;
  requestString: String = '';

  sortData: SortingData = {sortby: 'default', direction: true};

  makeSort(data: SortingData) {
    this.sortData = data;
  }
}
