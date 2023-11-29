import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchResponseService {

  constructor() { }

  private response = new Subject<SearchItem[]>();

  responseItems = this.response.asObservable();

  onResponse(respData: Array<SearchItem>): void {
    this.response.next(respData);
  }
}
