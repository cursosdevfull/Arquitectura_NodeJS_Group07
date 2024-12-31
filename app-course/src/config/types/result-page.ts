export type ResultPage<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};
