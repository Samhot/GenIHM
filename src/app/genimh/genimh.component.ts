import { Component, OnInit } from '@angular/core';
import {FormControl, FormArray} from '@angular/forms';
import { AppComponent } from '../app.component';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-genimh',
  templateUrl: './genimh.component.html',
  styleUrls: ['./genimh.component.scss']
})

export class GenimhComponent {

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
  public matrisVerifColor
  public tiles;

  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];

  constructor( public App: AppComponent, private dragulaService: DragulaService) {
    dragulaService.setOptions('page-bag', {
      accepts: function (el, target, source, sibling) {
        return target.id === 'web'; // elements can be dropped only in 'to_drop_to' container
      },
      copy: (el: Element, source: Element): boolean => {
        // elements are copied only if they are not already copied ones. That enables the 'removeOnSpill' to work
        return source.id === 'component';
      },
      removeOnSpill: true
    });
    this.tiles = [
      /* {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
       {text: 'Twoivgyguiguyghibuhbvguvbihyb jkbn jbihbjinkn,', cols: 1, rows: 2, color: 'lightgreen'},
       {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
       {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},*/
    ];
  
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
    this.matrisVerifColor = []

    // determine if drop is allowed
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
    });

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value: any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args: any): void {
    const [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args: any): void {
    const [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }




  private onOver(args) {
    const [el, container, source] = args;
    if ( container.id !== 'web' ) {
        el.remove();
      }
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    if (value[2] == null) {// dragged outside any of the bags
      return; }
    if (value[2].id !== 'web' && value[2].id !== value[3].id) {// dragged to a container that should not add the element
      value[1].remove(); }
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
    this.matrisVerifColor = []
    for( var z = 0; z < matris.length; z++){
      this.matrisVerif.push(parseInt(matris[z][0]))
      this.matrisVerifColor.push([(parseInt(matris[z][0])),matris[z][4]])
      for( var e = 1; e < parseInt(matris[z][2]); e++){
        this.matrisVerif.push(parseInt(matris[z][0]) + e)
        this.matrisVerifColor.push([(parseInt(matris[z][0]) + e),matris[z][4]])
      }
      for( var a = 1; a < matris[z][3]; a++){
        this.matrisVerif.push(parseInt(matris[z][0]) + 10 * a)
        this.matrisVerifColor.push([(parseInt(matris[z][0]) + 10 * a),matris[z][4]])

        for( var e = 1; e < matris[z][2]; e++){
          this.matrisVerif.push(parseInt(matris[z][0]) + 10 *a + e)
          this.matrisVerifColor.push([(parseInt(matris[z][0]) + 10 * a + e),matris[z][4]])

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


  changeBackColor(matrisVerifColor){
    console.log(matrisVerifColor)
    var tabreference = [11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64]
    for(var i = 0; i < matrisVerifColor.length; i++){
      for(var e = 0; e < tabreference.length; e++){
        if( matrisVerifColor[i][0] == tabreference[e]){
          this.backgroundColor[e] = "backgroundColor"+matrisVerifColor[i][1]
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
        this.changeBackColor(this.matrisVerifColor)
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
}

