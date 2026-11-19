import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    AppTabsComponent
  ],
})
export class AppComponent {}