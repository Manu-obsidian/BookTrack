
import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  homeOutline,
  searchOutline,
  heartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrls: ['./app-tabs.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ],
})
export class AppTabsComponent {
  constructor() {
    addIcons({
      homeOutline,
      searchOutline,
      heartOutline
    });
  }
}