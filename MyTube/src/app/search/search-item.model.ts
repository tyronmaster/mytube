import { Kind } from './kind';

export interface SearchItem {
  kind: Kind.Item;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizedData;
  defaultAudioLanguage: string;
}

interface Thumbnails {
  default: ThumbnailData;
  medium: ThumbnailData;
  high: ThumbnailData;
  standard: ThumbnailData;
  maxres: ThumbnailData;
}

interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}

interface LocalizedData {
  title: string;
  description: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
