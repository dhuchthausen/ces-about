import { Component } from '@angular/core';
import {LICENSES} from './license';


@Component({
  selector: 'licenses',
  templateUrl: './licenses.component.html'
})
export class LicensesComponent {
  licenses = LICENSES;
}

