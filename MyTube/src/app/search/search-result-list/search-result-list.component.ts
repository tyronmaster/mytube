import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TestDataService } from 'src/app/services/test-data.service';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../models/search-item.model';

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

}
