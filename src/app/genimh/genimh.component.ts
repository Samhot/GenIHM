import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormArray} from '@angular/forms';
import { AppComponent } from '../app.component';
import { DragulaService } from 'ng2-dragula';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AccordionModule} from 'ng2-accordion';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-genimh',
  templateUrl: './genimh.component.html',
  styleUrls: ['./genimh.component.scss']
})

export class GenimhComponent implements OnInit {


  public firstClick;
  public gridLigne;
  public gridColonne;
  public gridName;
  public gridColor;
  public matrice;
  public matrix;
  public backgroundColor;
  public matrisVerif;
  public TestmatrisVerif;
  public matriceVerifColor;
  public tiles;
  public listID;
  public allArray;
  public saveRemove;
  public deleteMode;
  public classBtnDelete;
  public lastAction;
  public lastActionBack;
  public options;
  public OptionSelect;
  public name;
  public animal;
  public ItemEdit;
  public placeHolderAutoComplete;
  public valueCheckbox;
  public typeButton;
  public buttonValue;
  public valueDatepicker;
  public styleButton;
  public styleButton2;
  public idElement;
  public idWebEdit;
  public idElementEdit;
  public IDCONTAINER;
  public optLayout;
  public idLayoutEdit;
  public resetInputAuto;
  public downloadJsonHref;

  // tslint:disable-next-line:max-line-length
  public formControl = [['autocomplete', 'NULL', 'Placeholder', ['OneT', 'Two', 'Three']], ['checkbox', 'NULL','Value'], ['datepicker', 'NULL','Placeholder'], ['input', 'NULL', 'Placeholder'], ['radiobutton', 'NULL',['Option 1','Option 2']], ['select', 'NULL'], ['slider', 'NULL'], ['slidetoggle', 'NULL']];
  public navigation: Array<string> = ['menu', 'sidenav', 'toolbar'];
  public layout: Array<string> = ['card', 'list', 'tabs', 'stepper'];
  public button  = [['button','NULL'], ['buttontoggle','NULL'], ['chips','NULL',[['one',''],['two','primary'],['three','accent']]], ['icon','NULL','home'], ['progressspinner','NULL'], ['progressbar','NULL']];
  public modals: Array<string> = ['dialog', 'snackbar', 'tooltip'];
  public dataTable: Array<string> = ['paginator', 'sortheader', 'table'];
  // tslint:disable-next-line:max-line-length
  public total: Array<string> = ['autocomplete', 'checkbox', 'datepicker', 'input', 'radiobutton', 'select', 'slider', 'slidetoggle', 'menu', 'sidenav', 'toolbar', 'card', 'list', 'tabs', 'stepper', 'button', 'buttontoggle', 'chips', 'icon', 'progressspinner', 'progressbar', 'dialog', 'snackbar', 'tooltip', 'paginator', 'sortheader', 'table'];
  public totalSave: Array<string> = ['autocomplete', 'checkbox', 'datepicker', 'input', 'radiobutton', 'select', 'slider', 'slidetoggle', 'menu', 'sidenav', 'toolbar', 'card', 'list', 'tabs', 'stepper', 'button', 'buttontoggle', 'chips', 'icon', 'progressspinner', 'progressbar', 'dialog', 'snackbar', 'tooltip', 'paginator', 'sortheader', 'table'];



  constructor( public App: AppComponent, private dragulaService: DragulaService, public dialog: MatDialog,private sanitizer: DomSanitizer) {
    dragulaService.setOptions('page-bag', {
      accepts: function (el, target, source, sibling) {

        // tslint:disable-next-line:max-line-length
        return target.id !== 'componentFrom' || target.id !== 'componentNav' || target.id !== 'componentTotal' || target.id !== 'componentLayout' || target.id !== 'componentButton' || target.id !== 'componentModals' || target.id !== 'componentDataTable'  ; // elements can be dropped only in 'to_drop_to' container
      },
      copy: (el: Element, source: Element): boolean => {
        // elements are copied only if they are not already copied ones. That enables the 'removeOnSpill' to work
        // tslint:disable-next-line:max-line-length
        return source.id === 'componentNav' ||  source.id === 'componentFrom' ||  source.id === 'componentTotal' ||  source.id === 'componentLayout' ||  source.id === 'componentButton' ||  source.id === 'componentModals' ||  source.id === 'componentDataTable';
      },
      removeOnSpill: true
    });
    this.tiles = [
      /* {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
       {text: 'Twoivgyguiguyghibuhbvguvbihyb jkbn jbihbjinkn,', cols: 1, rows: 2, color: 'lightgreen'},
       {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
       {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},*/
    ];
    this.firstClick = true;
    this.gridLigne = 0;
    this.gridColonne = 0;
    this.gridColor = 'lightblue';
    this.matrice = [];
    this.matrix = [];
    this.backgroundColor = [];
    this.matrisVerif = [];
    this.TestmatrisVerif = [];
    this.allArray = [''];
    this.matriceVerifColor = [];
    this.saveRemove = [];
    this.lastAction = [];
    this.lastActionBack = [];
    // this.name;
    // this.animal;
    this.idWebEdit;
    this.downloadJsonHref = {test: "le test"};
    // this.IDCONTAINER;
    this.idElementEdit;
    this.optLayout = [{
      direction :  'row',
      mainAxis  : 'space-around',
      crossAxis :  'center'
    }]
    this.idElement = 0;
    this.idLayoutEdit = 0;
    this.typeButton = 'basic';
    this.buttonValue = 'Button';
    this.styleButton = 'basic';
    this.styleButton2 = 'basic';
    this.placeHolderAutoComplete = 'PlaceHolder';
    this.deleteMode = 'Off';
    this.classBtnDelete = 'button floatRight';
    this.OptionSelect = [
      {value: 'Option-0', viewValue: 'Option 1'},
      {value: 'Option-1', viewValue: 'Option 2'},
      {value: 'Option-2', viewValue: 'Option 3'}
    ];


    this.options = ['One', 'Two', 'Three'];
    // determine if drop is allowed
    dragulaService.over.subscribe((value) => {

      this.onOver(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
      // value
      // if(value[1].name == "checkbox"){
        // this.openDialog();
        // }
    });

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value: any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  options_layout = {
    direction :  'column',
    mainAxis  : 'space-around',
    crossAxis :  'center'
  };

  layoutAlign(id) {
      return `${this.optLayout[id].mainAxis} ${this.optLayout[id].crossAxis}`;
  }
  private onDropModel(args: any): void {
    if (args[0].nodeName === 'IMG') {
      const idDiv = args[1].id.split('web');
      const tabValue = this.allArray[idDiv[1]][1];
      console.log(tabValue);
      for (let i = 0; i < tabValue.length; i++) {
        console.log(tabValue[i][1]);
        if (tabValue[i][1] === 'NULL') {
          tabValue[i][1] = tabValue[i][0] + this.idElement;
          this.idElement = this.idElement + 1;
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
    if ( container.id === 'componentFrom' ||
        container.id === 'componentNav' ||
        container.id === 'componentTotal' ||
        container.id === 'componentLayout' ||
        container.id === 'componentButton' ||
        container.id === 'componentModals' ||
        container.id === 'componentDataTable' ) {
          el.remove();
        }
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    console.log(value[1]);
    if (value[2] == null) {// dragged outside any of the bags
      return; }
    if (value[2].id === 'component' && value[2].id !== value[3].id) {// dragged to a container that should not add the element
      value[1].remove(); }
  }

  ngOnInit() {
    this.reset();

  }
  addValueTabEditItem(value) {
    this.options.push(value);
  }
  changeTypeButton(type) {
    if (type === 'basic') {
      this.buttonValue = 'Button';
    }
    if (type === 'icon') {
      this.buttonValue = 'add';
    }
    this.typeButton = type;
  }
  changeValueTabEditItem(value, event) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === value) {
        this.options[i] = event.target.value;
      }
    }
    let idDiv = this.idWebEdit.split('web');
    let tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][3] =  this.options;
      }
    }
  }

  changeValueCheckbox(event){
    let idDiv = this.idWebEdit.split('web');
    let tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
         tabValue[i][2] = event.target.value
      }
    }
  }

  changeValueDatePicker(event){

    let idDiv = this.idWebEdit.split('web');
    let tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] = event.target.value
      }
    }
  }

  monContainer(idContainer) {

    this.idLayoutEdit = idContainer;
    console.log(this.idLayoutEdit);
    // alert(this.IDCONTAINER)
  }

  removeValueTabEditItem(value) {
    for (let i = 0; i < this.options.length; i++) {
     if (this.options[i] === value) {
       this.options.splice(i, 1);
     }
    }
  }
  editItem(item, idWeb, idElement) {

    this.ItemEdit = item;
    this.idWebEdit = idWeb;
    this.idElementEdit = idElement;
    let idDiv = this.idWebEdit.split('web');
    let tabValue = this.allArray[idDiv[1]][1];

    if( item == "autocomplete"){
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.options = tabValue[i][3];
          this.resetInputAuto = tabValue[i][2];
        }
      }
    }

    if(item == 'checkbox'){
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.valueCheckbox = tabValue[i][2];
        }
      }
    }

    if(item == 'datepicker'){

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.valueDatepicker = tabValue[i][2];

        }
      }

    }
    if(item == 'radiobutton'){

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.options = tabValue[i][2];
        }
      }

    }
    if(item == 'icon'){

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.resetInputAuto = tabValue[i][2];
        }
      }

    }


  }
  EditPlaceholder(event){
    const inputValue = event.target.value;
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] =  inputValue;
      }
    }
  }

  inputNameAutocomplete(event) {
    const inputValue = event.target.value;
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    console.log(tabValue);
    for (let i = 0; i < tabValue.length; i++) {
      console.log(tabValue[i][1]);
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] =  inputValue;
      }
    }
  }

  generateDownloadJsonUri() {

    let tabExport = []
     tabExport.push(this.tiles)
     tabExport.push(this.optLayout)
    console.log(tabExport)
    var theJSON = JSON.stringify(tabExport);

    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  changeTextButton(text) {
    this.buttonValue = text;
  }
  changeStyle(style, style2) {
    this.styleButton = style;
    this.styleButton2 = style2;
  }

  back() {
    console.log(this.lastAction[this.lastAction.length - 1]);
    console.log(this.lastAction);
    if ( this.lastAction[this.lastAction.length - 1] === 'delete') {
      this.lastActionBack.push('add');
      this.lastAction.splice(this.lastAction.length - 1, 1);
      const forward =  this.saveRemove.splice(this.saveRemove.length - 1 , 1);
      console.log(forward[0]);
      this.matrice.push(forward[0]);
      console.log(this.matrice);
      this.main();
    }
    if ( this.lastAction[this.lastAction.length - 1] === 'add') {
      this.lastActionBack.push('delete');
      this.lastAction.splice(this.lastAction.length - 1, 1);
      const remove = this.matrice.splice(this.matrice.length - 1 , 1);
      this.saveRemove.push(remove[0]);
      this.main();
    }
  }
  changeSearch(event) {
    this.total = [];
    let search = event.target.value.toLowerCase();

    if (search === '') {
      this.total = this.totalSave;
    }else {
      for ( let e = 0; e < search.length; e++) {
        if (search[e] === ' ') {
          search = search.substring(0, e) + search.substring(e + 1 , search.length);
        }
      }

      for (let i = 0; i < this.totalSave.length; i++) {
        let verif = true;
        for ( let z = 0; z < search.length; z++) {
          if (this.totalSave[i][z] !== search[z]) {
            verif = false;
          }
        }
        if (verif === true) {
        this.total.push(this.totalSave[i]);
        }
      }
    }
    this.total.sort();
  }
  forward() {
    console.log(this.lastActionBack[this.lastActionBack.length - 1]);
    console.log(this.lastActionBack);
    if ( this.lastActionBack[this.lastActionBack.length - 1] === 'delete') {
      this.lastActionBack.splice(this.lastActionBack.length - 1, 1);
      this.lastAction.push('add');

      const forward =  this.saveRemove.splice(this.saveRemove.length - 1 , 1);
      this.matrice.push(forward[0]);
      this.main();
    }
    if ( this.lastActionBack[this.lastActionBack.length - 1] === 'add') {
      this.lastActionBack.splice(this.lastActionBack.length - 1, 1);
      this.lastAction.push('delete');
      const remove = this.matrice.splice(this.matrice.length - 1 , 1);
      this.saveRemove.push(remove[0]);
      this.main();
    }
  }

  DeleteMode() {
    if (this.deleteMode === 'Off') {
      this.deleteMode = 'On';
      console.log(this.deleteMode);
      this.classBtnDelete = 'button floatRight borderColorRed';
    }else {
      this.deleteMode = 'Off';
      console.log(this.deleteMode);
      this.classBtnDelete = 'button floatRight';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal);
    });
  }

  main() {
    this.fillMatrisVerif(this.matrice);
    this.fillTiles(this.matrice);
    this.changeBackColor(this.matriceVerifColor);
  }

reset() {
  this.tiles = [];
  this.listID = 0;
  this.allArray = [];
  this.lastAction = [];
  this.lastActionBack = [];
  this.matrisVerif = [];
  this.matrice = [];
  this.total.sort();
  this.tiles.push({text: '', cols: 4, rows: 10, color: '#C0C0C0', vide: 'false', id: '0web'});
  this.backgroundColor = [];
  for (let i = 0; i < 40; i++) {
    this.backgroundColor.push('colTab');
  }

}

  fillTiles(matrice) {
    this.tiles = [];
    for ( let i = 11; i < 105; i++) {
      if (i === 15 || i === 25 || i === 35 || i === 45 || i === 55 || i === 65 || i === 75 || i === 85 ) {
        i = i + 6;
      }
      let verif = false;
      let matrisVerif = false;
      let verifFinMatrice = false
      for ( let y = 0; y < matrice.length; y++){
        if(matrice[y][0] > i ){
          console.log(matrice[y][0])
          console.log(i)
          verifFinMatrice = true
        }
      }

      for ( let z = 0; z < matrice.length; z++) {
        // la comparaison ci-dessous doit obligatoirement être == au lieu de ===
        // tslint:disable-next-line:triple-equals
        if (matrice[z][0] == i) {
          verif = true;
          let allArrayVerif = false;
          let x;
          for (x = 0; x < this.allArray.length; x++) {
            if ( this.allArray[x][0] === (matrice[z][0]) + (matrice[z][1])) {
              allArrayVerif = true;
              this.tiles.push({text: '', cols: matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] , vide: 'true', tab: this.allArray[x][1] , id: 'web' + x, optLayoutId: x});
            }
          }
          if (allArrayVerif === false) {
            this.allArray.push(new Array((matrice[z][0]) + (matrice[z][1]), []));
            this.optLayout.push({
              direction :  'column',
              mainAxis  : 'space-around',
              crossAxis :  'center'
            });

            this.tiles.push({text: '', cols: matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] , vide: 'true', tab: this.allArray[this.allArray.length - 1][1] , id: 'web' + x, optLayoutId: x});


          }
        }
      }
      if (verif === false && verifFinMatrice == true ) {
        for ( let e = 0; e < this.matrisVerif.length; e++) {
          if (this.matrisVerif[e] === i) {
            matrisVerif = true;
          }
        }
        if (matrisVerif === false) {
          this.tiles.push({text: '', cols: 1 , rows: 1, color: '', vide: 'false'});
        }
      }
    }
  }

  SelectedCase(number) {
    for ( let e = 0; e < this.matrisVerif.length; e++) {
      if (this.matrisVerif[e] === number) {
        return true;
      }
    }
    return false;
  }

  fillMatrisVerif(matrice) {
    this.matrisVerif = [];
    this.matriceVerifColor = [];
    for ( let z = 0; z < matrice.length; z++) {
      // tslint:disable-next-line:radix
      this.matrisVerif.push(parseInt(matrice[z][0]));
      // tslint:disable-next-line:radix
      this.matriceVerifColor.push([(parseInt(matrice[z][0])), matrice[z][4]]);
      // tslint:disable-next-line:radix
      for ( let e = 1; e < parseInt(matrice[z][2]); e++) {
      // tslint:disable-next-line:radix
      this.matrisVerif.push(parseInt(matrice[z][0]) + e);
      // tslint:disable-next-line:radix
      this.matriceVerifColor.push([(parseInt(matrice[z][0]) + e), matrice[z][4]]);
      }
      for ( let a = 1; a < matrice[z][3]; a++) {
        // tslint:disable-next-line:radix
        this.matrisVerif.push(parseInt(matrice[z][0]) + 10 * a);
        // tslint:disable-next-line:radix
        this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a), matrice[z][4]]);

        for ( let e = 1; e < matrice[z][2]; e++) {
          // tslint:disable-next-line:radix
          this.matrisVerif.push(parseInt(matrice[z][0]) + 10 * a + e);
          // tslint:disable-next-line:radix
          this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a + e), matrice[z][4]]);

        }
      }
    }
  }
  mathSignPlus(nombre) {
    if (nombre < 0) {
      nombre = nombre * - 1;
    }
    return nombre;
  }
  gridNameColor(color) {
    this.gridColor = color;
  }
  changeBackColor(matriceVerifColor) {
    this.backgroundColor = [];
    for (let i = 0; i < 40; i++) {
      this.backgroundColor.push('colTab');
    }
    // tslint:disable-next-line:max-line-length
    const tabreference = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 81, 82, 83, 84, 91, 92, 93, 94, 101 , 102, 103, 104];
    for (let i = 0; i < matriceVerifColor.length; i++) {
      for (let e = 0; e < tabreference.length; e++) {
        if ( matriceVerifColor[i][0] === tabreference[e]) {
          this.backgroundColor[e] = 'backgroundColor' + matriceVerifColor[i][1];
        }

      }
    }
  }
  gridSkull(ligne, colonne) {
      if (this.deleteMode === 'Off') {

        if (this.SelectedCase(ligne.toString() + colonne.toString()) === false) {

          let ligneF;
          let colonneF;
          if (this.firstClick === true) {
            this.gridColonne = colonne;
            this.gridLigne = ligne;
            this.firstClick = false;
          }else {

            colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
            ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;
            if (this.gridColonne.toString() > colonne.toString()) {
              if (this.gridLigne.toString() > ligne.toString()) {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor]);
              } else {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor]);
              }
            } else {
              if (this.gridLigne.toString() > ligne.toString()) {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor]);
              } else {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor]);

              }
            }
            this.TestmatrisVerif = [];
            const lengthMatris = this.matrice.length - 1;
            // tslint:disable-next-line:radix
            this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]));
            // tslint:disable-next-line:radix
            for (let e = 1; e < parseInt(this.matrice[lengthMatris][2]); e++) {
              // tslint:disable-next-line:radix
              this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + e);
            }
            for (let a = 1; a < this.matrice[lengthMatris][3]; a++) {
              // tslint:disable-next-line:radix
              this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + 10 * a);
              for (let e = 1; e < this.matrice[lengthMatris][2]; e++) {
                // tslint:disable-next-line:radix
                this.TestmatrisVerif.push(parseInt(this.matrice[lengthMatris][0]) + 10 * a + e);
              }
            }
            let verifBlock = false;


            for (let i = 0; i < this.TestmatrisVerif.length; i++) {
              for (let e = 0; e < this.matrisVerif.length; e++) {
                if (this.matrisVerif[e] === this.TestmatrisVerif[i] && verifBlock === false) {
                  this.matrice = this.matrice.splice(0, this.matrice.length - 1);
                  verifBlock = true;
                  alert('Imposible de selectionner cette zone');
                }
              }
            }
            this.lastAction.push('add');
            this.main();
            this.firstClick = true;
          }
        } else {
          alert('case ' + ligne + colonne + ' déjà choisie');
        }
    }
    if (this.deleteMode === 'On') {
        let ligneF;
        let colonneF;
        if (this.firstClick === true) {
          this.gridColonne = colonne;
          this.gridLigne = ligne;
          this.firstClick = false;

        }else {

          colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
          ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;
          if (this.gridColonne.toString() > colonne.toString()) {
            if (this.gridLigne.toString() > ligne.toString()) {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor]);
            } else {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor]);
            }
          } else {
            if (this.gridLigne.toString() > ligne.toString()) {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor]);
            } else {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor]);
            }
          }
          let DeleteM = false;
          for (let i = 0; i < this.matrice.length; i++) {
            // tslint:disable-next-line:max-line-length
            if (this.matrice[i][0] === this.saveRemove[this.saveRemove.length - 1][0] && this.matrice[i][1] === this.saveRemove[this.saveRemove.length - 1][1] ) {

              const remove = this.matrice.splice(i, 1);
              for (let o = 0; o < this.allArray.length; o++) {
                // tslint:disable-next-line:max-line-length
                if ( this.allArray[o][0] === this.saveRemove[this.saveRemove.length - 1][0].toString() + this.saveRemove[this.saveRemove.length - 1][1].toString() ) {
                  this.allArray.splice(o, 1);
                }
              }
              DeleteM = true;
            }
          }
          if (DeleteM === false) {
            alert('Impossible de supprimer cet element');
          }else {
            this.lastAction.push('delete');
          }
          this.main();
          this.firstClick = true;
        }
    }
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
