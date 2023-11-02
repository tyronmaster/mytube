import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchItem } from '../search/models/search-item.model';
import { SearchResultResponse } from '../search/models/search-result-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  readonly URL = 'assets/data/data.json';

  getData(): Observable<any> {
    return this.http.get(this.URL);
  }
}
