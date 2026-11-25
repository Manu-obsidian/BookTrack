import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';

export interface OpenLibraryDoc {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

export interface OpenLibrarySearchResponse {
  docs: OpenLibraryDoc[];
}

@Injectable({
  providedIn: 'root',
})
export class OpenLibraryService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://openlibrary.org';

  searchBooks(query: string): Observable<OpenLibrarySearchResponse> {
    const params = new HttpParams().set('q', query);
    return this.http.get<OpenLibrarySearchResponse>(`${this.baseUrl}/search.json`, { params });
  }

  getCoverUrl(coverId?: number, size: 'S' | 'M' | 'L' = 'M'): string | null {
    if (!coverId) return null;
    return `https://openlibrary.org{coverId}-${size}.jpg`;
  }
}