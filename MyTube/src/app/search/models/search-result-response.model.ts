import { Kind } from './kind';
import { SearchItem } from './search-item.model';

export interface SearchResultResponse {
  TODO?: TodoList;

  kind: Kind.Response;
  etag: string;
  pageInfo: PageInfo;
  items: Array<SearchItem>;
}

enum TodoList {
  'TO BE UPDATED',
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
