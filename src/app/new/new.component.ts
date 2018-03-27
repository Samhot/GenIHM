import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
//import * as autoScroll from 'dom-autoscroller';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  @ViewChild('autoscrollG') autoscrollG: ElementRef;
  @ViewChild('autoscroll') autoscroll: ElementRef;
  @ViewChild('autoscroll2') autoscroll2: ElementRef;
  // @ViewChild('autoscroll3') autoscroll3: ElementRef;

  name = 'Angular';

  ngOnInit() {
   /* setTimeout(() => {
      let scroll = autoScroll([
        this.autoscrollG.nativeElement,
        this.autoscroll.nativeElement,
        this.autoscroll2.nativeElement,
        // this.autoscroll3.nativeElement
      ], {
        margin: 40,
        maxSpeed: 5,
        scrollWhenOutside: true,
        autoScroll: function(){
          // Only scroll when the pointer is down.
          return this.down;
          // return true;
        }
      });
    }, 3000);
*/
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
