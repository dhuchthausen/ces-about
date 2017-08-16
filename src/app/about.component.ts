import { Component } from '@angular/core';
import { MEMBERS } from './member';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
    members = MEMBERS;
    membersArray = new Array() as Array<Object>;;
    numbers;
    constructor() {
      var counter = (MEMBERS.length-(MEMBERS.length%15))/15;
      if(MEMBERS.length%15!=0) counter = counter +1;

      for(var i=0; i<counter; i++){
        var helper = new Array() as Array<Object>;
        for(var j=i; j<i+15; j++){
          helper.push(this.members[j]);
        }
        this.membersArray.push(helper);
        
      }
     // console.log(this.membersArray);
    }



    


}


