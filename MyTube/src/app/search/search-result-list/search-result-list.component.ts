import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestDataService } from 'src/app/services/test-data.service';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent {
  requestString: String = '';

  constructor(readonly testDataService: TestDataService){}

  
}
