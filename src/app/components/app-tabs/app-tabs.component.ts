
import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/angular';

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
export class AppTabsComponent {}
