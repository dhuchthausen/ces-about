import { Component } from '@angular/core';
import { LICENSES } from './license';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'licenses',
  templateUrl: './licenses.component.html'
})

export class LicensesComponent {
  licenses = LICENSES;

  scroll(el) {
    el.scrollIntoView(true);
  }
}

