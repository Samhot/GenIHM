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
  public matrice
  public matrix
  public backgroundColor
  public matrisVerif
  public TestmatrisVerif
  public matriceVerifColor
  public tiles;
  public listID;
  public lastSavelistID;
  public allArray;
  public saveRemove;
  public deleteMode;
  public classBtnDelete;

  public many: Array<string> = ['Title', 'Content', 'Checkbox', 'Button'];

  constructor( public App: AppComponent, private dragulaService: DragulaService) {
    dragulaService.setOptions('page-bag', {
      accepts: function (el, target, source, sibling) {
        return target.id !== 'component'; // elements can be dropped only in 'to_drop_to' container
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
    this.gridColor = "lightblue"
    this.matrice = []
    this.matrix = []
    this.backgroundColor = []
    this.matrisVerif = []
    this.TestmatrisVerif = []
    this.listID = 0
    this.lastSavelistID = 0
    this.allArray = ['']
    this.matriceVerifColor = []
    this.saveRemove = []
    this.deleteMode = "Off"
    this.classBtnDelete = "button floatRight"

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
    if ( container.id == 'component' ) {
        el.remove();
      }
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    if (value[2] == null) {// dragged outside any of the bags
      return; }
    if (value[2].id == 'component' && value[2].id !== value[3].id) {// dragged to a container that should not add the element
      value[1].remove(); }
  }

  ngOnInit(){
    this.reset()
  }

  back() {
    var remove = this.matrice.splice(this.matrice.length -1 ,1)
    this.saveRemove.push(remove[0])
    this.main()
  }
  forward(){
    var forward =  this.saveRemove.splice(this.saveRemove.length -1 ,1)
    this.matrice.push(forward[0])
    this.main()
  }
  DeleteMode(){
    if(this.deleteMode == "Off"){
      this.deleteMode = "On"
      console.log(this.deleteMode)
      this.classBtnDelete = "button floatRight borderColorRed"
    }else{
      this.deleteMode = "Off"
      console.log(this.deleteMode)
      this.classBtnDelete = "button floatRight"
    }
  }

  main(){
    this.fillMatrisVerif(this.matrice)
    this.fillTiles(this.matrice)
    this.changeBackColor(this.matriceVerifColor)
  }

reset(){
  this.tiles = []
  this.listID = 0
  this.allArray = []
  this.matrisVerif = []
  this.matrice = []
  this.tiles.push({text: '', cols: 4, rows: 10, color: 'grey',vide:"false", id: "0web"})
  this.backgroundColor = []
  for(var i = 0; i < 40; i++){
    this.backgroundColor.push("colTab")
  }
}

  fillTiles(matrice){
    this.tiles = []
    this.listID = 0
    for( var i = 11; i < 105; i++){
      if(i == 15 || i == 25 || i == 35 || i == 45 || i == 55 ||i == 65 || i == 75 || i == 85 ){
        i = i + 6
      }
      var verif = false
      var matrisVerif = false
      for( var z = 0; z < matrice.length; z++){
        if(matrice[z][0] == i){
          verif = true
            this.allArray.push(new Array(''))
          this.tiles.push({text: '', cols:matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] ,vide:"true", tab:this.allArray[this.listID] , id: "web"+this.listID})
          this.listID = parseInt(this.listID) + 1
        }
      }
      if(verif == false){
        for ( var e = 0; e < this.matrisVerif.length; e++){
          if(this.matrisVerif[e] == i){
            matrisVerif = true
          }
        }
        if(matrisVerif == false){
          this.tiles.push({text: '', cols:1 , rows:1, color: '',vide:"false"})
        }
      }
    }
    this.lastSavelistID = this.listID
  }
  SelectedCase(number){
    for ( var e = 0; e < this.matrisVerif.length; e++){
      if(this.matrisVerif[e] == number){
        return true
      }
    }
    return false
  }
  fillMatrisVerif(matrice){
    this.matrisVerif = []
    this.matriceVerifColor = []
    for( var z = 0; z < matrice.length; z++){
      this.matrisVerif.push(parseInt(matrice[z][0]))
      this.matriceVerifColor.push([(parseInt(matrice[z][0])),matrice[z][4]])
      for( var e = 1; e < parseInt(matrice[z][2]); e++){
        this.matrisVerif.push(parseInt(matrice[z][0]) + e)
        this.matriceVerifColor.push([(parseInt(matrice[z][0]) + e),matrice[z][4]])
      }
      for( var a = 1; a < matrice[z][3]; a++){
        this.matrisVerif.push(parseInt(matrice[z][0]) + 10 * a)
        this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a),matrice[z][4]])

        for( var e = 1; e < matrice[z][2]; e++){
          this.matrisVerif.push(parseInt(matrice[z][0]) + 10 *a + e)
          this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a + e),matrice[z][4]])

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
  gridNameColor(color){
    this.gridColor = color
  }
  changeBackColor(matriceVerifColor){
    this.backgroundColor = []
    for(var i = 0; i < 40; i++){
      this.backgroundColor.push("colTab")
    }
    var tabreference = [11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44,51,52,53,54,61,62,63,64,71,72,73,74,81,82,83,84,91,92,93,94,101,102,103,104]
    for(var i = 0; i < matriceVerifColor.length; i++){
      for(var e = 0; e < tabreference.length; e++){
        if( matriceVerifColor[i][0] == tabreference[e]){
          this.backgroundColor[e] = "backgroundColor" +matriceVerifColor[i][1]
        }

      }
    }
  }
  gridSkull(ligne,colonne) {
      if (this.deleteMode == "Off"){
        if (this.SelectedCase(ligne.toString() + colonne.toString()) == false) {
          var ligneF
          var colonneF
          if (this.firstClick == true) {
            this.gridColonne = colonne
            this.gridLigne = ligne
            this.firstClick = false
          }else {
            colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
            ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;
            if (this.gridColonne.toString() > colonne.toString()) {
              if (this.gridLigne.toString() > ligne.toString()) {
                this.matrice.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
              } else {
                this.matrice.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
              }
            } else {
              if (this.gridLigne.toString() > ligne.toString()) {
                this.matrice.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])
              } else {
                this.matrice.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])

              }
            }
            this.TestmatrisVerif = []
            var lengthMatris = this.matrice.length - 1
            this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]))
            for (var e = 1; e < parseInt(this.matrice[lengthMatris][2]); e++) {
              this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + e)
            }
            for (var a = 1; a < this.matrice[lengthMatris][3]; a++) {
              this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + 10 * a)
              for (var e = 1; e < this.matrice[lengthMatris][2]; e++) {
                this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + 10 * a + e)
              }
            }
            var verifBlock = false
            for (var i = 0; i < this.TestmatrisVerif.length; i++) {
              for (var e = 0; e < this.matrisVerif.length; e++) {
                if (this.matrisVerif[e] == this.TestmatrisVerif[i] && verifBlock == false) {
                  this.matrice = this.matrice.splice(0, this.matrice.length - 1)
                  verifBlock = true
                  alert("Imposible de selectionner cette zone")
                }
              }
            }
            this.main()
            this.firstClick = true
          }
        }
        else {
          alert("case " + ligne + colonne + " déjà choisi")
        }
    }
    if(this.deleteMode == "On"){
        var ligneF
        var colonneF
        if (this.firstClick == true) {
          this.gridColonne = colonne
          this.gridLigne = ligne
          this.firstClick = false

        }else {
          colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
          ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;
          if (this.gridColonne.toString() > colonne.toString()) {
            if (this.gridLigne.toString() > ligne.toString()) {
              this.saveRemove.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
            } else {
              this.saveRemove.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor])
            }
          } else {
            if (this.gridLigne.toString() > ligne.toString()) {
              this.saveRemove.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])
            } else {
              this.saveRemove.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor])

            }
          }
          var DeleteM = false
          console.log(this.saveRemove)
          console.log(this.saveRemove[this.saveRemove.length -1])
          console.log(this.matrice)
          for(var i = 0; i < this.matrice.length; i++){
            console.log("-----------------------")
            console.log(this.matrice[i])
            console.log(this.saveRemove[this.saveRemove.length -1])
            if(this.matrice[i][0] == this.saveRemove[this.saveRemove.length -1][0] && this.matrice[i][1] == this.saveRemove[this.saveRemove.length -1][1] ){
              this.matrice.splice(i,1)
              DeleteM = true
              console.log("OK")
            }
          }
          if(DeleteM == false){
            alert("Impossible de supprimer cet element")
          }
          this.main()
          this.firstClick = true
        }



    }


  }
}

