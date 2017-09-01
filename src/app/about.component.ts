import { Component } from '@angular/core';
import { MEMBERS } from './member';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  providers: [NgbCarouselConfig]
})

export class AboutComponent {
  members = MEMBERS;
  membersArrayForCarousel = new Array() as Array<Object>;
  numbersOfEntriesPerCarouselSide = 9;
  slidesAmount = {}; iconAmount = {};


  constructor(carousel: NgbCarouselConfig) {

    carousel.interval = null; //carousel should not move automatically

    // deleting all members without links
    var memberCounterWithoutLinks = 0;
    while (memberCounterWithoutLinks < this.members.length) {
      if (!this.members[memberCounterWithoutLinks].links)
        this.members.splice(memberCounterWithoutLinks, 1);
      else
        memberCounterWithoutLinks++;
    }

    // seperating MEMBERS in extra Array for Carousel-View

    //calculating sides of carousel
    var slidesOfCarousel = (this.members.length - (this.members.length % this.numbersOfEntriesPerCarouselSide)) / this.numbersOfEntriesPerCarouselSide;
    if (this.members.length % this.numbersOfEntriesPerCarouselSide != 0)
      slidesOfCarousel = slidesOfCarousel + 1;

    var indexOfMembers = 0;

    //seperating members in membersArrayForCarousel (each array in membersArrayForCarousel represents the content of one slide of the carousel)
    for (var slide = 0; slide < slidesOfCarousel; slide++) {
      var helper = new Array() as Array<Object>;
      while (indexOfMembers < ((slide + 1) * this.numbersOfEntriesPerCarouselSide) && indexOfMembers < this.members.length) {
        helper.push(this.members[indexOfMembers]);
        indexOfMembers++;
      }
      this.membersArrayForCarousel.push(helper);
    }

    //Arrays for iterating over objects in angular
    // example: this.iconAmount = Array(4).fill(0).map((x, i) => i) ==> iconAmount={0,1,2,3};
    this.slidesAmount = Array(slidesOfCarousel).fill(0).map((x, i) => i);
    this.iconAmount = Array(4).fill(0).map((x, i) => i);
  }







}


