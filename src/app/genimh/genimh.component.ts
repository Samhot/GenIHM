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
  public matris
  public matrix
  public backgroundColor
  public matrisVerif
  public TestmatrisVerif

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
    this.gridColor = "lightblue"
    this.matris = []
    this.matrix = []
    this.backgroundColor = []
    this.matrisVerif = []
    this.TestmatrisVerif = []
  }

  ngOnInit(){
    this.tiles = []
    this.tiles.push({text: '', cols: 4, rows: 6, color: 'grey',vide:"true"})
    this.backgroundColor = []
    for(var i = 0; i < 25; i++){
      this.backgroundColor.push("colTab")
    }
  }

fillTiles(matris){
  this.tiles = []
  for( var i = 11; i < 65; i++){
    if(i == 15 || i == 25 || i == 35 || i == 45 || i == 55){
      i = i + 6
    }
    var verif = false
    var matrisVerif = false
    for( var z = 0; z < matris.length; z++){
        if(matris[z][0] == i){
          verif = true
          this.tiles.push({text: '', cols:matris[z][2] , rows: matris[z][3], color: matris[z][4] ,vide:"true"})
        }
    }
    if(verif == false){
      for ( var e = 0; e < this.matrisVerif.length; e++){
        if(this.matrisVerif[e] == i){
          matrisVerif = true
        }
      }
      if(matrisVerif == false){
        this.tiles.push({text: '', cols:1 , rows:1, color: 'grey',vide:"false"})
      }
    }
  }
}
  SelectedCase(number){
    for ( var e = 0; e < this.matrisVerif.length; e++){
      if(this.matrisVerif[e] == number){
        return true
      }
    }
    return false
  }

fillMatrisVerif(matris){
  this.matrisVerif = []
  for( var z = 0; z < matris.length; z++){
    this.matrisVerif.push(parseInt(matris[z][0]))
    for( var e = 1; e < parseInt(matris[z][2]); e++){
      this.matrisVerif.push(parseInt(matris[z][0]) + e)
    }
    for( var a = 1; a < matris[z][3]; a++){
      this.matrisVerif.push(parseInt(matris[z][0]) + 10 * a)
      for( var e = 1; e < matris[z][2]; e++){
        this.matrisVerif.push(parseInt(matris[z][0]) + 10 *a + e)
      }
    }
  }
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

  changeBackColor(matrisVerif){
    var tabreference = [11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64]
    for(var i = 0; i < matrisVerif.length; i++){
      for(var e = 0; e < tabreference.length; e++){
        if( matrisVerif[i] == tabreference[e]){
          this.backgroundColor[e] = "backgroundColor"
        }
      }
    }
  }
  gridSkull(ligne,colonne) {

    if (this.SelectedCase(ligne.toString() + colonne.toString()) == false) {
    var ligneF
    var colonneF
    if (this.firstClick == true) {
      this.gridColonne = colonne
      this.gridLigne = ligne
      this.firstClick = false
    } else {

      colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
      ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;

      if (this.gridColonne.toString() > colonne.toString()) {
        if (this.gridLigne.toString() > ligne.toString()) {
          this.matris.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
        } else {
          this.matris.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
        }
      } else {
        if (this.gridLigne.toString() > ligne.toString()) {
          this.matris.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])
        } else {
          this.matris.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])

        }
      }

      this.TestmatrisVerif = []
      var lengthMatris = this.matris.length - 1
        this.TestmatrisVerif.push(parseInt(this.matris[lengthMatris][0]))
        for( var e = 1; e < parseInt(this.matris[lengthMatris][2]); e++){
          this.TestmatrisVerif.push(parseInt(this.matris[lengthMatris][0]) + e)
        }
        for( var a = 1; a < this.matris[lengthMatris][3]; a++){
          this.TestmatrisVerif.push(parseInt(this.matris[lengthMatris][0]) + 10 * a)
          for( var e = 1; e < this.matris[lengthMatris][2]; e++){
            this.TestmatrisVerif.push(parseInt(this.matris[lengthMatris][0]) + 10 *a + e)
          }
        }


      this.matris
      var verifBlock = false
      for (var i = 0; i < this.TestmatrisVerif.length; i++){
        for (var e = 0; e < this.matrisVerif.length; e++){
          if(this.matrisVerif[e] == this.TestmatrisVerif[i] && verifBlock == false){

            this.matris = this.matris.splice(0, this.matris.length - 1)
            verifBlock = true
            alert("Imposible de selectionner cette zone")
          }
        }
      }
      this.fillMatrisVerif(this.matris)
      this.fillTiles(this.matris)
      this.changeBackColor(this.matrisVerif)
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

      this.firstClick = true
    }
  }
  else{
      alert("case " + ligne+colonne +" déjà choisi")
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


