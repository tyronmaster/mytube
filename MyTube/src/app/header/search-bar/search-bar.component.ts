import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from 'src/app/search/models/search-item.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchString: string = '';

  @Output() sendRequestStringEvent = new EventEmitter<string>();

  checkRequestString() {
    this.sendRequestStringEvent.emit(this.searchString);
  }
}
