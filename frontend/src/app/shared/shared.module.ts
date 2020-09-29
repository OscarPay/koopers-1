import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faEdit,
  faInfoCircle,
  faPlus,
  faSearch,
  faTimes,
  faTimesCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AlertsComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ButtonModule, SidebarModule],
  exports: [AlertsComponent, ButtonComponent, CardComponent, HeaderComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCheckCircle,
      faEdit,
      faPlus,
      faSearch,
      faTrash,
      faTimesCircle,
      faTimes,
      faInfoCircle
    );
  }
}
