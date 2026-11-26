export interface Book {
  id: string;
  title: string;
  authors: string[];
  category?: string;
  description?: string;
  publisher?: string;
  /** Formatos aceitos pelo DatePipe: "2020", "2020-05" ou "2020-05-12". */
  publishedDate?: string;
}