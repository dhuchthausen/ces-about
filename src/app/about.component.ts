import { Component, Input } from '@angular/core';
import { MEMBERS } from './member';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})


export class AboutComponent {
    members = MEMBERS;
}
