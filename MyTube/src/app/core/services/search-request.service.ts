import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchRequestService {
  constructor() {}

  private request = new BehaviorSubject('');

  requestString = this.request.asObservable();

  isRequestValid = false;

  onRequestInput(searchString: string): void {
    this.request.next(searchString);

    if (searchString.length >= 3) {
      this.isRequestValid = true;
    }
  }
}
