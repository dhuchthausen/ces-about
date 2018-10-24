import { Component } from '@angular/core';


declare function checkGA(): any;

@Component({
  selector: 'privacyPolicy',
  templateUrl: './privacyPolicy.component.html'
})
export class PrivacyPolicyComponent {
  isGA: boolean;

  ngOnInit() {
    this.isGA = checkGA();
  }
}
