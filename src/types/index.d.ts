export interface itemType {
  expiry_date: string;
  forecast: string;
  outlook: string;
  sel_val1: string;
  sel_val2: string;
  sel_val3: string;
  summary: string;
  title: string;
  tm: string;
  warn: string;
}

export interface airportType {
  dateType: string;
  items: { item: itemType[] };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
