import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforma uma lista de autores em texto legível.
 * ['Ana'] -> "Ana" | ['Ana', 'Bia'] -> "Ana e Bia" | ['Ana', 'Bia', 'Caio'] -> "Ana, Bia e Caio"
 * Uso: {{ book.authors | authors }}
 */
@Pipe({ name: 'authors' })
export class AuthorsPipe implements PipeTransform {
  transform(value: string[] | null | undefined, fallback = 'Autor desconhecido'): string {
    const names = (value ?? []).map((name) => name.trim()).filter(Boolean);
    if (names.length === 0) return fallback;
    if (names.length === 1) return names[0];
    return `${names.slice(0, -1).join(', ')} e ${names[names.length - 1]}`;
  }
}