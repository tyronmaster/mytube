import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(
    value: Array<SearchItem>,
    sortby?: string,
    direction?: boolean
  ): Array<SearchItem> {
    switch (sortby) {
      case 'date': {
        direction
          ? value.sort(
              (a: SearchItem, b: SearchItem) =>
                Date.parse(a.snippet.publishedAt) -
                Date.parse(b.snippet.publishedAt)
            )
          : value.sort(
              (a: SearchItem, b: SearchItem) =>
                Date.parse(b.snippet.publishedAt) -
                Date.parse(a.snippet.publishedAt)
            );
        break;
      }
      case 'views': {
        direction
          ? value.sort(
              (a: SearchItem, b: SearchItem) =>
                parseInt(a.statistics.viewCount, 10) -
                parseInt(b.statistics.viewCount, 10)
            )
          : value.sort(
              (a: SearchItem, b: SearchItem) =>
                parseInt(b.statistics.viewCount, 10) -
                parseInt(a.statistics.viewCount, 10)
            );
        break;
      }
      default:
        break;
    }
    return value;
  }
}
