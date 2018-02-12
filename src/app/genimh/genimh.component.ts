import { Component, OnInit } from '@angular/core';
import {FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-genimh',
  templateUrl: './genimh.component.html',
  styleUrls: ['./genimh.component.scss']
})

export class GenimhComponent {
  public tiles
  public firstClick
  public gridLigne
  public gridColonne
  public gridName
  public gridColor
  constructor(){
    this.tiles = [
     /* {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Twoivgyguiguyghibuhbvguvbihyb jkbn jbihbjinkn,', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},*/
    ]

    this.firstClick = true
    this.gridLigne = 0
    this.gridColonne = 0
    this.gridName = "NONAME"
    this.gridColor = "grey"
  }
  mathSignPlus(nombre){
    if(nombre < 0){
      nombre = nombre * -1
    }
    return nombre
  }

  gridNameColor(name, color){
    this.gridName = name
    this.gridColor = color

    console.log( this.gridName)
    console.log( this.gridColor)
  }
  gridSkull(ligne,colonne) {
  var ligneF
  var colonneF
    if (this.firstClick == true) {
      this.gridColonne = colonne
      this.gridLigne = ligne
      this.firstClick = false
    } else {

    colonneF = this.mathSignPlus( this.gridColonne - colonne) + 1
    ligneF = this.mathSignPlus( this.gridLigne - ligne) + 1
        this.tiles.push({text: this.gridName, cols: colonneF, rows: ligneF, color:  this.gridColor});

      //// code genere grid
     /* if (colonne > this.gridColonne) {
        if (ligne > this.gridLigne) {
          this.tiles.push({text: 'One', cols: colonne, rows: ligne, color: 'lightblue'});
        } else {
          this.tiles.push({text: 'One', cols: colonne, rows: this.gridLigne, color: 'lightblue'})
        }
      } else {
        if (ligne > this.gridLigne) {
          this.tiles.push({text: 'One', cols: this.gridColonne, rows: ligne, color: 'lightblue'})
        } else {
          this.tiles.push({text: 'One', cols: this.gridColonne, rows: this.gridLigne, color: 'lightblue'})
        }
      }*/

      console.log(this.gridColonne)
      console.log(this.gridLigne)
      console.log("------------------------------")
      console.log(colonne)
      console.log(ligne)
      console.log("------------------------------")
      console.log(this.tiles)
      console.log(colonneF)
      console.log(ligneF)
      this.firstClick = true
    }
  }
  test(number){
    if( number == 1){
      this.tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ]
    }
    if( number == 2){
      this.tiles = [
        {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
      ]
    }
    if( number == 3){
      this.tiles = [
        {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
        {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ]
    }
    if( number == 4){
      this.tiles = [
        {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},
        {text: 'Three', cols: 4, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
      ]
    }
  }


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
  listTeamTwo: Array<string> = ['Label',
    'Button'];

  dragOperation = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
        new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
        new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
    ];

  listOne: FormArray = new FormArray([
    new FormControl('Nom'),
    new FormControl('Prénom'),
    new FormControl('Email'),
    new FormControl('Date de naissance'),
    new FormControl('Document')
  ]);


  //listOne: Array<string> = ['Nom', 'Prénom', 'Email', 'Date de naissance', 'Document'];
  listRecycled: Array<string> = [];


  sourceList: Widget[] = [
    new Widget('Nom'), new Widget('Prénom'),
    new Widget('Email'), new Widget('Date de naissance'),
    new Widget('Document'), new Widget('Formulaire')
  ];

  targetList: Widget[] = [];
  addTo($event: any) {
    this.targetList.push($event.dragData);
    console.log($event)
  }
}
 class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

 class Widget {
  constructor(public name: string) {}
}


