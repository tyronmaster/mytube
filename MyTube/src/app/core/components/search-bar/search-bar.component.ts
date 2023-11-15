import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchRequestService } from '../../services/search-request.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private searchRequest: SearchRequestService){}

  updRequestString(searchRequest: string) {
    this.searchRequest.onRequestInput(searchRequest);

  }
}
