import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: SearchItem;

  coloredAge: string = '';

  ngOnInit() {
    let nowDate = Date.now();
    let postDate = Date.parse(this.item.snippet.publishedAt);
    const postAge = nowDate - postDate;

    this.coloredAge = this.ageParser(postAge);
  }

  ageParser(age: number): string {
    if (age > 15778800000) {
      return 'red';
    } else if (age > 2629800000) {
      return 'yellow';
    } else if (age > 604800000) {
      return 'green';
    }
    return 'blue';
  }
}
