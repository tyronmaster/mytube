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
}
