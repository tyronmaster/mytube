import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from 'src/app/mytube/models/search-item.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() sendRequestStringEvent = new EventEmitter<string>();

  sendRequestString(searchRequest: string) {
    this.sendRequestStringEvent.emit(searchRequest);
  }
}
