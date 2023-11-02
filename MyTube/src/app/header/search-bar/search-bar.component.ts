import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItem } from 'src/app/search/models/search-item.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchString: String = '';

  @Input() isSearchData: boolean = false;
  @Output() sendRequestString = new EventEmitter();

  checkRequestString() {
    console.log('button click', this.searchString);
    if (this.searchString.length >= 3) {
      this.sendRequestString.emit(this.searchString);
    }
    this.sendRequestString.emit(undefined);
  }

  onClick(){

  }
}
