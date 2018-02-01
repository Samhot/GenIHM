import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genimh',
  templateUrl: './genimh.component.html',
  styleUrls: ['./genimh.component.scss']
})
export class GenimhComponent {

  // tiles for grid
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  events = [];

  listBoxers: Array<string> = ['Formulaire',
                               'Checkbox',
                               'Label',
                               'Button',
                               'Image',
                               'Firm',
                               'Component 1',
                               'Component 2',
                               'Component 3',
                               'Component 4'];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];

  dragOperation = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
        new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
        new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
    ];

    widgets: Array<Widget> = [];
    addTo($event: any) {
        if ($event) {
            this.widgets.push($event.dragData);

        }
    }
}
 class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

 class Widget {
  constructor(public name: string) {}
}


