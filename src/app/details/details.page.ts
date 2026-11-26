import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { Book } from '../models/book.model';
import { AuthorsPipe } from '../pipes/authors.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule, // já fornece as pipes builtin `date` e `titlecase`
    FormsModule,
    AuthorsPipe,
    TruncatePipe,
  ],
})
export class DetailsPage implements OnInit {
  // Livro de exemplo, substitua pelo dado real quando a busca estiver pronta.
  book: Book = {
    id: 'exemplo-1',
    title: 'Dom Casmurro',
    authors: ['Machado de Assis'],
    category: 'literatura brasileira',
    description:
      'Bentinho, já adulto, relembra a juventude, o amor por Capitu e a dúvida que ' +
      'transformou sua vida em ciúme e solidão. Um dos romances mais importantes da ' +
      'literatura brasileira, narrado com ironia e ambiguidade.',
    publisher: 'Editora Exemplo',
    publishedDate: '1899',
  };

  constructor() {}

  ngOnInit() {}
}
