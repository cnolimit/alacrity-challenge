export interface IBook {
  bookId: number;
  title: string;
  author: string;
  price: number;
}

export enum formType {
  "CREATE" = "CREATE",
  "EDIT" = "EDIT"
}
