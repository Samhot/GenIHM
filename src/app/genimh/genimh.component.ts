import {FormControl, FormArray} from '@angular/forms';
import { AppComponent } from '../app.component';
import { DragulaService } from 'ng2-dragula';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatTabChangeEvent} from '@angular/material';
import {AccordionModule} from 'ng2-accordion';
import {DomSanitizer} from '@angular/platform-browser';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent } from '@alfresco/adf-content-services';

import { Composant } from '../composant';
import { Json } from '../json';
import { HeroService } from '../hero.service';
import { ContentActionListComponent } from '@alfresco/adf-content-services';
import { ActivatedRoute, Router } from '@angular/router';

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
  public valueSelect;
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
  public tabValue;
  public colorSelect;
  public colorNameClass;
  public UIIDadfValue;
  public adfRacineValue;
  public iconBtnEdit;
  public fonctionTest;
  public gridViewOpen;
  public nameProject;
  public nameProjectClick;
  public tabColorBtnMenu;
  public toggleSideNavSetOut;
  public firstStructure;
  public rightSideNavOpen;
  public blocAlignementDispo;
  public blocHorizontalDispo;
  public blocVerticalDispo;

  // tslint:disable-next-line:max-line-length
  public formControl = [['autocomplete', 'NULL', 'Libellé', ['One', 'Two', 'Three']], ['checkbox', 'NULL', 'Value'], ['datepicker', 'NULL', 'Libellé'], ['input', 'NULL', 'Libellé'], ['radiobutton', 'NULL', ['Option 1', 'Option 2']], ['select', 'NULL', 'Libellé', ['Un', 'Deux', 'Trois']], ['slider', 'NULL'], ['slidetoggle', 'NULL']];
  public navigation  = [['menu', 'NULL'], ['sidenav', 'NULL'], ['toolbar', 'NULL']];
  public layout = [['card', 'NULL'], ['list', 'NULL'], ['tabs', 'NULL'], ['stepper', 'NULL']];
  // tslint:disable-next-line:max-line-length
  public button  = [['button', 'NULL', 'basic', 'basic', 'basic', 'Bouton'], ['buttontoggle', 'NULL'], ['chips', 'NULL', [['one', ''], ['two', 'primary'], ['three', 'accent']]], ['icon', 'NULL', 'home'], ['progressspinner', 'NULL'], ['progressbar', 'NULL']];
  public modals  = [['dialog', 'NULL'], ['snackbar', 'NULL'], ['tooltip', 'NULL']];
  public dataTable  = [['paginator', 'NULL'], ['sortheader', 'NULL'], ['table', 'NULL']];
  public alfresco = [['alfrescoadf', 'NULL', '', 'Racine']]; // fc8d4fec-204e-428d-aa26-1295b6e8682c    f6b9f65c-33aa-4bc7-a560-babc93a30c89
  // tslint:disable-next-line:max-line-length
  public total = [['autocomplete', 'NULL', 'Libellé', ['One', 'Two', 'Three']], ['button', 'NULL', 'basic', 'basic', 'basic', 'Bouton'], ['buttontoggle', 'NULL'], ['card', 'NULL'],  ['checkbox', 'NULL', 'Value'], ['chips', 'NULL', [['one', ''], ['two', 'primary'], ['three', 'accent']]], ['datepicker', 'NULL', 'Libellé'], ['dialog', 'NULL'], ['icon', 'NULL', 'home'], ['input', 'NULL', 'Libellé'], ['list', 'NULL'], ['menu', 'NULL'], ['paginator', 'NULL'], ['progressbar', 'NULL'], ['progressspinner', 'NULL'], ['radiobutton', 'NULL', ['Option 1', 'Option 2']], ['select', 'NULL', 'Libellé', ['Un', 'Deux', 'Trois']], ['sidenav', 'NULL'], ['slider', 'NULL'], ['slidetoggle', 'NULL'], ['snackbar', 'NULL'], ['sortheader', 'NULL'], ['stepper', 'NULL'], ['table', 'NULL'], ['tabs', 'NULL'], ['toolbar', 'NULL'], ['tooltip', 'NULL']];
  public totalSave = [['autocomplete', 'NULL', 'Libellé', ['One', 'Two', 'Three']], ['button', 'NULL', 'basic', 'basic', 'basic', 'Bouton'], ['buttontoggle', 'NULL'], ['card', 'NULL'],  ['checkbox', 'NULL', 'Value'], ['chips', 'NULL', [['one', ''], ['two', 'primary'], ['three', 'accent']]], ['datepicker', 'NULL', 'Libellé'], ['dialog', 'NULL'], ['icon', 'NULL', 'home'], ['input', 'NULL', 'Libellé'], ['list', 'NULL'], ['menu', 'NULL'], ['paginator', 'NULL'], ['progressbar', 'NULL'], ['progressspinner', 'NULL'], ['radiobutton', 'NULL', ['Option 1', 'Option 2']],  ['select', 'NULL', 'Libellé', ['Un', 'Deux', 'Trois']], ['sidenav', 'NULL'], ['slider', 'NULL'], ['slidetoggle', 'NULL'], ['snackbar', 'NULL'], ['sortheader', 'NULL'], ['stepper', 'NULL'], ['table', 'NULL'], ['tabs', 'NULL'], ['toolbar', 'NULL'], ['tooltip', 'NULL']];
  showViewer: Boolean = false;
  nodeId: String = null;


  @ViewChild('LeftSideNav') LeftSideNav: any;
  documentList: DocumentListComponent;
  totaltest: Composant[];
  jsons: Json[];

  // tslint:disable-next-line:max-line-length
  constructor(public App: AppComponent, public router: Router, public notificationService: NotificationService, private _sanitizer: DomSanitizer, private dragulaService: DragulaService, public dialog: MatDialog, private sanitizer: DomSanitizer, private heroService: HeroService) {

    dragulaService.setOptions('page-bag', {
      accepts: function (el, target, source, sibling) {

        // tslint:disable-next-line:max-line-length
        return target.id !== 'componentFrom' || target.id !== 'componentNav' || target.id !== 'componentTotal' || target.id !== 'componentLayout' || target.id !== 'componentButton' || target.id !== 'componentModals' || target.id !== 'componentDataTable' || target.id !== 'componentSearch' || target.id !== 'componentAlfresco'  ; // elements can be dropped only in 'to_drop_to' container
      },
      copy: (el: Element, source: Element): boolean => {
        // elements are copied only if they are not already copied ones. That enables the 'removeOnSpill' to work
        // tslint:disable-next-line:max-line-length
        return source.id === 'componentNav' ||  source.id === 'componentFrom' ||  source.id === 'componentTotal' ||  source.id === 'componentLayout' ||  source.id === 'componentButton' ||  source.id === 'componentModals' ||  source.id === 'componentDataTable' ||  source.id === 'componentSearch' ||  source.id === 'componentAlfresco';

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
    this.gridColor = 'rgb(135, 206, 250,0.2)';
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
    this.gridViewOpen = false;
    this.firstStructure = false;
    this.blocAlignementDispo = "row";
    // this.name;
    // this.animal;
    this.downloadJsonHref = {test: 'le test'};
    // this.IDCONTAINER;
    this.optLayout = [{
      direction :  'colum',
      mainAxis  : 'space-around',
      crossAxis :  'center'
    }];
    this.idElement = 0;
    this.idLayoutEdit = 0;
    this.rightSideNavOpen = true;
    this.typeButton = 'basic';
    this.buttonValue = 'Button';
    this.styleButton = 'basic';
    this.styleButton2 = 'basic';
    this.deleteMode = 'Off';
    this.colorSelect = this._sanitizer.bypassSecurityTrustStyle('rgb(64, 0, 255)');
    this.colorNameClass = 'B2';
    this.classBtnDelete = 'button floatRight';
    this.iconBtnEdit = 'add';
    this.nameProject = 'Nom de la page';
    this.nameProjectClick = false;
    this.blocAlignementDispo = "colum";
    this.fonctionTest = function () {};
    this.tabColorBtnMenu = ['', '', '', '', '', '', '', '', ''];
    this.toggleSideNavSetOut = '';
    // this.OptionSelect = [
    //   {value: 'Option-0', viewValue: 'Optiontt 1'},
    //   {value: 'Option-1', viewValue: 'Optionyy 2'},
    //   {value: 'Option-2', viewValue: 'Optionuu 3'}
    // ];
    // this.options = ['One', 'Two', 'Three'];

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


  testdirection(direction) {
    this.optLayout[this.idLayoutEdit].direction = direction;
  }

  testmainAxis(mainAxis) {
    this.optLayout[this.idLayoutEdit].mainAxis = mainAxis;
  }

  testcrossAxis(crossAxis) {
    this.optLayout[this.idLayoutEdit].crossAxis = crossAxis;
  }

  /////////////////////////////////////////// ADF //////////////////////////////////////////////////////////////////////

  uploadSuccess(event: any) {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(event) {
    this.showViewer = false;
    if (event.value.entry.isFile) {
      this.nodeId = event.value.entry.id;
      this.showViewer = true;
    }
  }

  onGoBack(event: any) {
    this.showViewer = false;
    this.nodeId = null;
  }


  //////////////////////////////////////////// FIN ADF /////////////////////////////////////////////////////////////////////

  layoutAlign(id) {
      return `${this.optLayout[id].mainAxis} ${this.optLayout[id].crossAxis}`;
  }

  openGridView() {
    if (this.gridViewOpen === false) {
      this.gridViewOpen = true;
    }else {
      this.gridViewOpen = false;
    }
  }
  private onDropModel(args: any): void {
    if (args[0].nodeName === 'IMG') {
      const idDiv = args[1].id.split('web');
      const tabValue = this.allArray[idDiv[1]][1];
      for (let i = 0; i < tabValue.length; i++) {
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
        container.id === 'componentDataTable' ||
        container.id === 'componentSearch' ||
        container.id === 'componentAlfresco' ) {
          el.remove();
        }
  }

  // (0 - bagname, 1 - el, 2 - target, 3 - source, 4 - sibling)
  private onDrop(value) {
    if (value[2] == null) {// dragged outside any of the bags
      return; }
    if (value[2].id === 'component' && value[2].id !== value[3].id) {// dragged to a container that should not add the element
      value[1].remove(); }
  }
  PreVisionneuse() {
    const tabExport = [];
    tabExport.push(this.tiles);
    tabExport.push(this.optLayout);
    const theJSON = JSON.stringify(tabExport);
    localStorage.setItem('PreVisionneuse', theJSON );
  }
  ngOnInit() {
    this.reset();
    this.getComposants();
    this.toggleSideNavSetIn('panelAll',0);
    this.totalSave.sort();
    this.gridViewOpen = true;
    this.blocAlignementDispo = "row";
    this.blocHorizontalDispo = "center";

  }

  toggleSideNavSetIn(toggleSideNavGet: string, index) {
    this.tabColorBtnMenu = ['Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off', 'Off'];
    if ( this.total.length === this.totalSave.length) {
      if (this.LeftSideNav.opened === false) {
        this.toggleSideNavSetOut = toggleSideNavGet;
        this.tabColorBtnMenu[index] = 'On';
        this.LeftSideNav.toggle();
      } else if (this.LeftSideNav.opened === true && this.toggleSideNavSetOut !== toggleSideNavGet) {
        this.toggleSideNavSetOut = toggleSideNavGet;
        this.tabColorBtnMenu[index] = 'On';
      } else {
        this.LeftSideNav.toggle();
      }
    }else {
      this.total = this.totalSave;
    }
  }

  enterNameProject() {
    if (this.nameProjectClick === false) {
      this.nameProjectClick = true;
    }else {
      this.nameProjectClick = false;
    }
  }
  valideNameProject(event) {
    if (event.key === 'Enter') {
      this.nameProject = event.path[0].value;
      this.enterNameProject();
    }
  }
  getComposants(): void {
    this.heroService.getComposants()
    .subscribe(composants => this.totaltest = composants);
  }

  addJson(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.heroService.addJson({ content } as Json)
      .subscribe(json => {
       // this.jsons.push(json);
      });
  }

  addValueTabEditItem(value) {
    this.options.push(value);
  }

  addValueSelect() {
    this.OptionSelect.push('');
  }

  onLinkClick(event: MatTabChangeEvent) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        if (event.index === 0) {
          tabValue[i][5] = 'Button';

          tabValue[i][2] = 'basic';
          this.typeButton =  tabValue[i][2];
        }
        if (event.index === 1) {
          tabValue[i][5] = 'add';
          tabValue[i][2] = 'icon';
          this.typeButton =  tabValue[i][2];
        }
      }
    }

  }


  changeValueTabEditItem(value, event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === value) {
        this.options[i] = event.target.value;
      }
    }
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][3] =  this.options;
      }
    }
  }

  changeValueCheckbox(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
         tabValue[i][2] = event.target.value;
      }
    }
  }

  changeValueButton(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
         tabValue[i][5] = event.target.value;
      }
    }
  }

  changeValueUIID(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
         tabValue[i][2] = event.target.value;
      }
    }
  }

  changeValueADFRacine(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
         tabValue[i][3] = event.target.value;
      }
    }
  }

  changeValueDatePicker(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] = event.target.value;
      }
    }
  }

  changeValueSelect(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] = event.target.value;
      }
    }
  }

  monContainer(idContainer) {
    this.idLayoutEdit = idContainer;
  }
changeApi(event) {
    this.heroService.heroesUrl = event.target.value;
}
  changeFonction(event) {
    // tslint:disable-next-line:no-eval
    this.fonctionTest = eval('(function(){"+event.target.value+"})');
  }
  onSubmit() {
    const submitTab = [];
    const data = {};
    for (let z = 0; z < this.tiles.length; z++) {
      if (this.tiles[z].vide === 'true') {
        for (let i = 0; i < this.tiles[z].tab.length; i++) {
          if (this.tiles[z].tab[i][0] === 'input') {
            const key = this.tiles[z].tab[i][2];
            data[key] = (<HTMLInputElement>document.getElementById(this.tiles[z].tab[i][1])).value;
          }
        }
      }
    }
    console.log(JSON.stringify(data));
    console.log(this.heroService.heroesUrl);
    this.addJson(JSON.stringify(data));
  }
  removeValueTabEditItem(value) {
    for (let i = 0; i < this.options.length; i++) {
     if (this.options[i] === value) {
       this.options.splice(i, 1);
     }
    }
  }

  removeValueSelect(value) {
    for (let i = 0; i < this.OptionSelect.length; i++) {
     if (this.OptionSelect[i] === value) {
       this.OptionSelect.splice(i, 1);
     }
    }
  }

  editItem(item, idWeb, idElement) {

    this.ItemEdit = item;
    this.idWebEdit = idWeb;
    this.idElementEdit = idElement;
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];

    if (item === 'autocomplete') {
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.options = tabValue[i][3];
          this.resetInputAuto = tabValue[i][2];
        }
      }
    }

    if (item === 'checkbox') {
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.valueCheckbox = tabValue[i][2];
        }
      }
    }

    if (item === 'datepicker') {
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.valueDatepicker = tabValue[i][2];

        }
      }

    }
    if (item === 'radiobutton') {

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.options = tabValue[i][2];
        }
      }

    }
    if (item === 'icon') {

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.resetInputAuto = tabValue[i][2];
        }
      }
    }  if (item === 'input') {

      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.resetInputAuto = tabValue[i][2];
        }
      }
    }

    if (item === 'select') {
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.options = tabValue[i][3];
          this.valueSelect = tabValue[i][2];
        }
      }
    }
    if (item === 'alfrescoadf') {
      for (let i = 0; i < tabValue.length; i++) {
        if (tabValue[i][1] === this.idElementEdit) {
          this.UIIDadfValue = tabValue[i][2];
        }
      }
    }

  }

  EditPlaceholder(event) {
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
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][2] =  inputValue;
      }
    }
  }


  generateDownloadJsonUri() {

    const tabExport = [];
     tabExport.push(this.tiles);
     tabExport.push(this.optLayout);
    const theJSON = JSON.stringify(tabExport);

    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  changeTextButton(text) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][5] =  text;
        this.iconBtnEdit = text;
      }
    }
  }
  changeTextButtonID(event) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][5] =  event.target.value;
        this.iconBtnEdit = event.target.value;
      }
    }
  }
  changeStyle(style, style2) {
    const idDiv = this.idWebEdit.split('web');
    const tabValue = this.allArray[idDiv[1]][1];
    for (let i = 0; i < tabValue.length; i++) {
      if (tabValue[i][1] === this.idElementEdit) {
        tabValue[i][3] =  style;
        tabValue[i][4] =  style2;
      }
    }
  }

  back() {
    if ( this.lastAction[this.lastAction.length - 1] === 'delete') {
      this.lastActionBack.push('add');
      this.lastAction.splice(this.lastAction.length - 1, 1);
      const forward =  this.saveRemove.splice(this.saveRemove.length - 1 , 1);
      this.matrice.push(forward[0]);
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
    if (this.toggleSideNavSetOut !== 'panelAll') {
      this.toggleSideNavSetIn('panelAll', 0);
    }
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
          if (this.totalSave[i][0][z] !== search[z]) {
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
      this.classBtnDelete = 'floatRight bColorred';
    }else {
      this.deleteMode = 'Off';
      this.classBtnDelete = 'floatRight';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  main() {
    this.fillMatrisVerif(this.matrice);
    this.fillTiles(this.matrice);
    this.changeBackColor(this.matriceVerifColor);
  }

  reset() {
    this.firstStructure = false
    this.tiles = [];
    this.blocAlignementDispo = "row";
    this.blocHorizontalDispo = "center";
    this.blocVerticalDispo = "center";
    this.listID = 0;
    this.allArray = [];
    this.lastAction = [];
    this.lastActionBack = [];
    this.matrisVerif = [];
    this.matrice = [];
    this.total.sort();
    this.tiles.push({text: 'Test.', cols: 4, rows: 1, color: 'rgba(255, 255, 255, 0.87)', vide: 'false', id: '0web'});
    this.backgroundColor = [];
    for (let i = 0; i < 40; i++) {
      this.backgroundColor.push('colTab');
    }

  }

  fillTiles(matrice) {
    this.tiles = [];
    for ( let i = 11; i < 95; i++) {
      if (i === 15 || i === 25 || i === 35 || i === 45 || i === 55 || i === 65 || i === 75 || i === 85 ) {
        i = i + 6;
      }
      let verif = false;
      let matrisVerif = false;
      let verifFinMatrice = false;
      for ( let y = 0; y < matrice.length; y++) {
        if (matrice[y][0] > i ) {
          verifFinMatrice = true;
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
              // tslint:disable-next-line:max-line-length
              this.tiles.push({text: '', cols: matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] , vide: 'true', tab: this.allArray[x][1] , id: 'web' + x, optLayoutId: x});
            }
          }
          if (allArrayVerif === false) {
            this.allArray.push(new Array((matrice[z][0]) + (matrice[z][1]), []));
            this.optLayout.push({
              direction :  'colum',
              mainAxis  : 'space-around',
              crossAxis :  'center'
            });

            // tslint:disable-next-line:max-line-length
            this.tiles.push({text: '', cols: matrice[z][2] , rows: matrice[z][3], color: matrice[z][4] , vide: 'true', tab: this.allArray[this.allArray.length - 1][1] , id: 'web' + x, optLayoutId: x});

          }
        }
      }
      if (verif === false) {
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
      this.matriceVerifColor.push([(parseInt(matrice[z][0])), matrice[z][5]]);
      // tslint:disable-next-line:radix
      for ( let e = 1; e < parseInt(matrice[z][2]); e++) {
      // tslint:disable-next-line:radix
      this.matrisVerif.push(parseInt(matrice[z][0]) + e);
      // tslint:disable-next-line:radix
      this.matriceVerifColor.push([(parseInt(matrice[z][0]) + e), matrice[z][5]]);
      }
      for ( let a = 1; a < matrice[z][3]; a++) {
        // tslint:disable-next-line:radix
        this.matrisVerif.push(parseInt(matrice[z][0]) + 10 * a);
        // tslint:disable-next-line:radix
        this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a), matrice[z][5]]);

        for ( let e = 1; e < matrice[z][2]; e++) {
          // tslint:disable-next-line:radix
          this.matrisVerif.push(parseInt(matrice[z][0]) + 10 * a + e);
          // tslint:disable-next-line:radix
          this.matriceVerifColor.push([(parseInt(matrice[z][0]) + 10 * a + e), matrice[z][5]]);

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

  gridNameColor(color, colorNoOpa, colorNameclass) {
    this.colorSelect = this._sanitizer.bypassSecurityTrustStyle(colorNoOpa);
    this.gridColor = color;
    this.colorNameClass = colorNameclass;

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
         // this.backgroundColor[e] = 'backgroundColor' + matriceVerifColor[i][1];
          this.backgroundColor[e] = 'colTab backgroundColorGrid' +  matriceVerifColor[i][1];
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
            if( this.firstStructure == false){
              this.firstStructure = true
            }
            colonneF = this.mathSignPlus(this.gridColonne - colonne) + 1;
            ligneF = this.mathSignPlus(this.gridLigne - ligne) + 1;
            if (this.gridColonne.toString() > colonne.toString()) {
              if (this.gridLigne.toString() > ligne.toString()) {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
              } else {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
              }
            } else {
              if (this.gridLigne.toString() > ligne.toString()) {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
              } else {
                // tslint:disable-next-line:max-line-length
                this.matrice.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);

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
              this.saveRemove.push([ligne.toString() + colonne.toString(), this.gridLigne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor], this.colorNameClass);
            } else {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([this.gridLigne.toString() + colonne.toString(), ligne.toString() + this.gridColonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
            }
          } else {
            if (this.gridLigne.toString() > ligne.toString()) {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([ligne.toString() + this.gridColonne.toString(), this.gridLigne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
            } else {
              // tslint:disable-next-line:max-line-length
              this.saveRemove.push([this.gridLigne.toString() + this.gridColonne.toString(), ligne.toString() + colonne.toString(), colonneF, ligneF, this.gridColor, this.colorNameClass]);
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
          console.log(this.allArray)
          console.log(this.matrice)
          if(this.matrice.length == 0){
            this.firstStructure = false
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

