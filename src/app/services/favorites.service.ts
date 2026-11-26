/**
 * Serviço responsável pelo gerenciamento dos livros favoritos.
 * Utiliza o localStorage para salvar e recuperar os livros,
 * mantendo os favoritos mesmo após fechar o aplicativo.
 *
 * Atende ao requisito 4: segundo serviço do projeto,
 * com funcionalidade diferente do serviço HTTP 👍
 */

import { Injectable } from '@angular/core';
import { OpenLibraryDoc } from './open-library';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly storageKey = 'booktrack-favorites';

  // Recupera os favoritos armazenados :]
  getFavorites(): OpenLibraryDoc[] {
    const stored = localStorage.getItem(this.storageKey);

    if (!stored) return [];

    try {
      return JSON.parse(stored) as OpenLibraryDoc[];
    } catch {
      return [];
    }
  }

  // Adiciona um livro aos favoritos (+)
  addFavorite(book: OpenLibraryDoc): void {
    const favorites = this.getFavorites();

    if (favorites.some(favorite => this.isSameBook(favorite, book))) {
      return;
    }

    favorites.push(book);
    this.saveFavorites(favorites);
  }

  // Remove um livro dos favoritos (-)
  removeFavorite(book: OpenLibraryDoc): void {
    const favorites = this.getFavorites().filter(
      favorite => !this.isSameBook(favorite, book)
    );

    this.saveFavorites(favorites);
  }

  // Verifica se um livro já está favoritado <3
  isFavorite(book: OpenLibraryDoc): boolean {
    return this.getFavorites().some(
      favorite => this.isSameBook(favorite, book)
    );
  }

  // Salva a lista no localStorage
  private saveFavorites(favorites: OpenLibraryDoc[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  // Compara os livros para evitar duplicações
  private isSameBook(a: OpenLibraryDoc, b: OpenLibraryDoc): boolean {
    return (
      a.title === b.title &&
      a.first_publish_year === b.first_publish_year &&
      JSON.stringify(a.author_name ?? []) === JSON.stringify(b.author_name ?? [])
    );
  }
}
