import { Pipe, PipeTransform } from '@angular/core';

/**
 * Limita o tamanho de um texto sem cortar palavras ao meio.
 * Uso: {{ book.description | truncate: 150 }}
 */
@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    limit = 120,
    trail = '…',
    fallback = 'Sem descrição disponível.',
  ): string {
    const text = value?.trim();
    if (!text) return fallback;
    if (text.length <= limit) return text;

    const cut = text.slice(0, limit);
    const lastSpace = cut.lastIndexOf(' ');
    // Só recua até o último espaço se isso não comer boa parte do texto.
    const end = lastSpace > limit * 0.6 ? lastSpace : limit;
    return cut.slice(0, end).trimEnd() + trail;
  }
}