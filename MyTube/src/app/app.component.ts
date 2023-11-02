import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { SearchResultResponse } from './search/models/search-result-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyTube';
  isSearchData: Boolean = false;


  constructor(private http: HttpService ){}

  ngOnInit(){
    this.http.getData().subscribe(data => console.log(data));
  }
}
