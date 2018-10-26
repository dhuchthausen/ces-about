import {Component, OnInit} from '@angular/core';


declare function checkGA(): any;

@Component({
  selector: 'privacyPolicy',
  templateUrl: './privacyPolicy.component.html'
})
export class PrivacyPolicyComponent implements OnInit{
  isGA: boolean;

  ngOnInit() {
    setTimeout(() => {
      this.isGA = checkGA();
    }, 0);
  }

}
