import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormArray} from '@angular/forms';
import { AppComponent } from '../app.component';
import { DragulaService } from 'ng2-dragula';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'app-genimh',
  templateUrl: './genimh.component.html',
  styleUrls: ['./genimh.component.scss']
})

export class GenimhComponent {

  options_layout = {
    direction :  'column',
    mainAxis  : 'space-around',
    crossAxis :  'center'
  };

  layoutAlign() {
    return `${this.options_layout.mainAxis} ${this.options_layout.crossAxis}`;
  }

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
  public allArray;
  public saveRemove;
  public deleteMode;
  public classBtnDelete;
  public lastAction
  public lastActionBack
  public options
  public OptionSelect
  public name
  public animal
  public ItemEdit
  public placeHolderAutoComplete
  public valueCheckbox
  public typeButton
  public buttonValue
  public valueDatepicker
  public styleButton
  public styleButton2
  public idElement
  public idWebEdit
  public idElementEdit
  public IDCONTAINER
  public resetInputAuto


  public formControl = [['autocomplete',"NULL","Placeholder",['OneT','Two','Three']],['checkbox',"NULL"],['datepicker',"NULL"],['input',"NULL"],['radiobutton',"NULL"],['select',"NULL"],['slider',"NULL"],['slidetoggle',"NULL"]];
  public navigation: Array<string> = ['menu','sidenav','toolbar'];
  public layout: Array<string> = ['card','list','tabs','stepper'];
  public button: Array<string> = ['button','buttontoggle','chips','icon','progressspinner','progressbar'];
  public modals: Array<string> = ['dialog','snackbar','tooltip'];
  public dataTable: Array<string> = ['paginator','sortheader','table'];
  public total: Array<string> = ['autocomplete','checkbox','datepicker','input','radiobutton','select','slider','slidetoggle','menu','sidenav','toolbar','card','list','tabs','stepper','button','buttontoggle','chips','icon','progressspinner','progressbar','dialog','snackbar','tooltip','paginator','sortheader','table'];
  public totalSave: Array<string> = ['autocomplete','checkbox','datepicker','input','radiobutton','select','slider','slidetoggle','menu','sidenav','toolbar','card','list','tabs','stepper','button','buttontoggle','chips','icon','progressspinner','progressbar','dialog','snackbar','tooltip','paginator','sortheader','table'];


  constructor( public App: AppComponent, private dragulaService: DragulaService,public dialog: MatDialog) {
    dragulaService.setOptions('page-bag', {
      accepts: function (el, target, source, sibling) {


        return target.id !== 'componentFrom' || target.id !== 'componentNav'|| target.id !== 'componentTotal' || target.id !== 'componentLayout'|| target.id !== 'componentButton' || target.id !== 'componentModals'|| target.id !== 'componentDataTable'  ; // elements can be dropped only in 'to_drop_to' container
      },
      copy: (el: Element, source: Element): boolean => {
        // elements are copied only if they are not already copied ones. That enables the 'removeOnSpill' to work
        return source.id === 'componentNav' ||  source.id === 'componentFrom'||  source.id === 'componentTotal' ||  source.id === 'componentLayout'||  source.id === 'componentButton'||  source.id === 'componentModals'||  source.id === 'componentDataTable';
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
    this.allArray = ['']
    this.matriceVerifColor = []
    this.saveRemove = []
    this.lastAction = []
    this.lastActionBack = []
    this.name
    this.animal
    this.resetInputAuto
    this.idWebEdit
    this.idWebEdit
    this.IDCONTAINER
    this.idElementEdit
    this.idElement = 0
    this.typeButton = 'basic'
    this.buttonValue = "Button"
    this.styleButton = "basic"
    this.styleButton2 = "basic"
    this.valueCheckbox = "Option 1"
    this.valueDatepicker = "Choose a date"
    this.placeHolderAutoComplete = "PlaceHolder"
    this.deleteMode = "Off"
    this.classBtnDelete = "button floatRight"
    this.OptionSelect = [
      {value: 'Option-0', viewValue: 'Option 1'},
      {value: 'Option-1', viewValue: 'Option 2'},
      {value: 'Option-2', viewValue: 'Option 3'}
    ];

    this.options = ['One','Two','Three'];
    // determine if drop is allowed
    dragulaService.over.subscribe((value) => {

      this.onOver(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
      //value
      //if(value[1].name == "checkbox"){
       // this.openDialog();
      //}
    });

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value: any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args: any): void {

    if(args[0].nodeName == "IMG"){
      console.log('test')
      var idDiv = args[1].id.split("web")

      var tabValue = this.allArray[idDiv[1]][1]
      console.log(tabValue)
      for(var i = 0; i < tabValue.length;i++){
        console.log(tabValue[i][1])
        if(tabValue[i][1] == "NULL"){
          tabValue[i][1] = tabValue[i][0] + this.idElement
          this.idElement = this.idElement + 1
        }
      }
    }

    const [el, target, source] = args;

  }

  private onRemoveModel(args: any): void {
    const [el, source] = args;

  }

  private onOver(args) {
    const [el, container, source] = args;
    if ( container.id == 'componentFrom' || container.id == 'componentNav'|| container.id == 'componentTotal' || container.id == 'componentLayout'|| container.id == 'componentButton'|| container.id == 'componentModals'|| container.id == 'componentDataTable' ) {
        el.remove();
      }
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    console.log(value[1])
    if (value[2] == null) {// dragged outside any of the bags
      return; }
    if (value[2].id == 'component' && value[2].id !== value[3].id) {// dragged to a container that should not add the element
      value[1].remove(); }
  }

  ngOnInit(){
    this.reset()
  }
  addValueAutocomplete(){
    this.options.push('')
  }
  changeTypeButton(type){
    if(type == 'basic'){
      this.buttonValue = "Button"
    }
    if(type == 'icon'){
      this.buttonValue = 'add'
    }
    this.typeButton = type
  }
  changeValueAutoComplete(value,event){
    for (var i = 0; i < this.options.length; i++){
      if(this.options[i] == value){
        this.options[i] = event.target.value
      }
    }
    var idDiv = this.idWebEdit.split("web")
    var tabValue = this.allArray[idDiv[1]][1]
    for(var i = 0; i < tabValue.length;i++){
      if(tabValue[i][1] == this.idElementEdit){
        tabValue[i][3] =  this.options
      }
    }
  }
  monContainer(idContainer){
    this.IDCONTAINER = idContainer
    // alert(this.IDCONTAINER)
  }
  removeValueAutocomplete(value){
    for (var i = 0; i < this.options.length; i++){
     if(this.options[i] == value){
       this.options.splice(i,1)
     }
    }
  }
  editItem(item,idWeb,idElement){
    this.ItemEdit = item;
    this.idWebEdit = idWeb
    this.idElementEdit = idElement

    var idDiv = this.idWebEdit.split("web")
    var tabValue = this.allArray[idDiv[1]][1]
    for(var i = 0; i < tabValue.length;i++){
      if(tabValue[i][1] == this.idElementEdit){
        this.options = tabValue[i][3]
        this.resetInputAuto = tabValue[i][2]

      }
    }
  }
  inputNameAutocomplete(event){
    var inputValue = event.target.value
    var idDiv = this.idWebEdit.split("web")
    var tabValue = this.allArray[idDiv[1]][1]
    console.log(tabValue)
    for(var i = 0; i < tabValue.length;i++){
      console.log(tabValue[i][1])
      if(tabValue[i][1] == this.idElementEdit){
        tabValue[i][2] =  inputValue
      }
    }
  }
  changeTextButton(text){
    this.buttonValue = text
  }
  changeStyle(style, style2){
    this.styleButton = style
    this.styleButton2 = style2
  }

  back() {
    console.log(this.lastAction[this.lastAction.length-1])
    console.log(this.lastAction)
    if( this.lastAction[this.lastAction.length-1] == "delete"){
      this.lastActionBack.push("add")
      this.lastAction.splice(this.lastAction.length-1,1)
      var forward =  this.saveRemove.splice(this.saveRemove.length -1 ,1)
      console.log(forward[0])
      this.matrice.push(forward[0])
      console.log(this.matrice)
      this.main()
    }
    if( this.lastAction[this.lastAction.length-1] == "add"){
      this.lastActionBack.push("delete")
      this.lastAction.splice(this.lastAction.length-1,1)
      var remove = this.matrice.splice(this.matrice.length -1 ,1)
      this.saveRemove.push(remove[0])
      this.main()
    }
  }
  changeSearch(event){
    this.total = []
    var search = event.target.value.toLowerCase()

    if(search == ""){
      this.total = this.totalSave
    }else{
      for( var e=0; e < search.length; e++){
        if (search[e] == " "){
          search = search.substring(0,e) + search.substring(e + 1 , search.length);
        }
      }

      for(var i = 0; i < this.totalSave.length;i++){
        var verif = true
        for( var z=0; z < search.length; z++){
          if(this.totalSave[i][z] != search[z]){
            verif = false
          }
        }
        if(verif == true){
        this.total.push(this.totalSave[i])
        }
      }
    }
    this.total.sort()
  }
  forward(){
    console.log(this.lastActionBack[this.lastActionBack.length-1])
    console.log(this.lastActionBack)
    if( this.lastActionBack[this.lastActionBack.length-1] == "delete"){
      this.lastActionBack.splice(this.lastActionBack.length-1,1)
      this.lastAction.push("add")

      var forward =  this.saveRemove.splice(this.saveRemove.length -1 ,1)
      this.matrice.push(forward[0])
      this.main()
    }
    if( this.lastActionBack[this.lastActionBack.length-1] == "add"){
      this.lastActionBack.splice(this.lastActionBack.length-1,1)
      this.lastAction.push("delete")
      var remove = this.matrice.splice(this.matrice.length -1 ,1)
      this.saveRemove.push(remove[0])
      this.main()
    }
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

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal)
    });
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
  this.lastAction = []
  this.lastActionBack = []
  this.matrisVerif = []
  this.matrice = []
  this.total.sort()
  this.tiles.push({text: '', cols: 4, rows: 10, color: '#C0C0C0',vide:"false", id: "0web"})
  this.backgroundColor = []
  for(var i = 0; i < 40; i++){
    this.backgroundColor.push("colTab")
  }

}

  fillTiles(matrice){
    this.tiles = []
    for( var i = 11; i < 105; i++){
      if(i == 15 || i == 25 || i == 35 || i == 45 || i == 55 ||i == 65 || i == 75 || i == 85 ){
        i = i + 6
      }
      var verif = false
      var matrisVerif = false
      for( var z = 0; z < matrice.length; z++){
        if(matrice[z][0] == i){
          verif = true
         var allArrayVerif = false
          for(var o = 0; o < this.allArray.length; o++){
            if( this.allArray[o][0] == String(matrice[z][0])+ String(matrice[z][1])){
              allArrayVerif = true
              this.tiles.push({text: '', cols:matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] ,vide:"true", tab:this.allArray[o][1] , id: "web"+o})
            }
          }
          if(allArrayVerif == false){
            this.allArray.push(new Array(String(matrice[z][0])+ String(matrice[z][1]),[]))
            this.tiles.push({text: '', cols:matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] ,vide:"true", tab:this.allArray[this.allArray.length-1][1] , id: "web"+o})

          }
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
            this.lastAction.push('add')
            this.main()
            this.firstClick = true
          }
        }
        else {
          alert("case " + ligne + colonne + " déjà choisie")
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
          for(var i = 0; i < this.matrice.length; i++){
            if(this.matrice[i][0] == this.saveRemove[this.saveRemove.length -1][0] && this.matrice[i][1] == this.saveRemove[this.saveRemove.length -1][1] ){

              var remove = this.matrice.splice(i,1)
              for(var o = 0; o < this.allArray.length; o++){
                if( this.allArray[o][0] == this.saveRemove[this.saveRemove.length -1][0].toString() + this.saveRemove[this.saveRemove.length -1][1].toString() ){
                  this.allArray.splice(o,1)
                }
              }
              DeleteM = true
            }
          }
          if(DeleteM == false){
            alert("Impossible de supprimer cet element")
          }else{
            this.lastAction.push('delete')
          }
          this.main()
          this.firstClick = true
        }
    }
  }
}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
