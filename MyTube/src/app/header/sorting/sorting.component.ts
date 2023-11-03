import { Component, EventEmitter, Output } from '@angular/core';
import { SortingData } from 'src/app/models/sorting-data.model';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Output() sendSortingType = new EventEmitter<SortingData>();

  sortby: string = 'default';
  direction: boolean = true;

  addTarget(str: string) {
    if (str !== this.sortby) {
      this.sortby = str;
      this.direction = true;
    } else if (str === this.sortby) {
      this.direction = !this.direction;
    }
    this.sendSortingType.emit({
      sortby: this.sortby,
      direction: this.direction,
    });
    // console.log(str, this.sortby, this.direction);
  }
}
