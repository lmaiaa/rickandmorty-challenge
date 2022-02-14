interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface MultipleResponse<T> {
  info: Info;
  results: T[];
}

export interface HTTPResponse<T> {
  data: T;
}
