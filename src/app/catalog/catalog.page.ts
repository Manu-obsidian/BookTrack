
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';

import { type OpenLibraryDoc, OpenLibraryService } from '../services/open-library';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CatalogPage {
   private openLibrary = inject(OpenLibraryService);

  searchTerm = '';
  books: OpenLibraryDoc[] = [];
  loading = false;

  search(): void {
    const term = this.searchTerm.trim();
    if (!term) return;

    this.loading = true;
    this.openLibrary.searchBooks(term).subscribe({
      next: (res) => {
        this.books = res.docs.slice(0, 20);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  cover(coverId?: number): string | null {
    return this.openLibrary.getCoverUrl(coverId, 'M');
  }
}
