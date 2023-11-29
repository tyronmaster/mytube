import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { SearchResponseService } from '../../services/search-response.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private respData: SearchResponseService
  ) {}

  respItems!: Array<SearchItem>;
  item: SearchItem | undefined;
  itemId: string = '';

  ngOnInit() {
    this.itemId = this.route.snapshot.params['id'];
    // this.respData.responseItems.subscribe({
    //   next: (data) => {
    //     this.item = data.find((element) => {
    //       element.id === this.itemId;
    //     });
    //     console.log(this.item)
    //   },
    // });
  }

  // ngDoCheck() {}
  ngAfterContentChecked() {
    this.respData.responseItems.subscribe(
      (data) => {
        if (data) {
          this.respItems = data;
        }
        console.log('data', data);
        console.log('respItems', this.respItems);
      },
      () => {},
      () => {
        if (this.respItems) {
          this.item = this.respItems.find((element) => {
            console.log(element.id === this.itemId);
            return element.id === this.itemId;
          });
          console.log(this.item);
        }
      }
    );
  }
}
