import { Component } from '@angular/core';
import { MEMBERS } from './member';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  providers: [NgbCarouselConfig]
})

export class AboutComponent {
    members = MEMBERS;
    membersArray = new Array() as Array<Object>;
    numbersOfEntries = 9;
    numbers;
    constructor(carousel: NgbCarouselConfig) { 
      
      carousel.interval = null; //carousel should not move automatically

      // seperating MEMBERS in extra Array for Carousel-View
      var counter = (MEMBERS.length-(MEMBERS.length%this.numbersOfEntries))/this.numbersOfEntries;
      if(MEMBERS.length%this.numbersOfEntries!=0) counter = counter +1;

      var j = 0;

      for(var i=0; i<counter; i++){
        var helper = new Array() as Array<Object>;
        while(j<((i+1)*this.numbersOfEntries) && j < MEMBERS.length){
          helper.push(this.members[j]);
          j++;
        }
        

        this.membersArray.push(helper);
      }


      this.numbers = Array(counter).fill(0).map((x,i)=>i);
    }



    


}


