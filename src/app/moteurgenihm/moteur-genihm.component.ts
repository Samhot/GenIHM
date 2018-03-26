import {Component, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';
import { ThumbnailService } from '@alfresco/adf-core';
import { MinimalNodeEntity } from 'alfresco-js-api';
import {Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

import { FileUploader } from 'ng2-file-upload';
import {GlobalService} from "../Services/GlobalService";
import {ActivatedRoute, Router} from "@angular/router";

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-custom-search',
  templateUrl: './moteur-genihm.component.html',
  styleUrls: ['./moteur-genihm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoteurGenIHMComponent {

  public jsonModel
  public tiles
  public optLayout
  public testJson

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  constructor(public global : GlobalService,public route: ActivatedRoute, public router: Router) {

//    this.jsonModel = [[{"text":"","cols":4,"rows":2,"color":"lightblue","vide":"true","tab":[["autocomplete","autocomplete0","Placeholder",["OneT","Two","Three"]]],"id":"web0","optLayoutId":0},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":4,"rows":2,"color":"lightblue","vide":"true","tab":[["checkbox","checkbox1"]],"id":"web1","optLayoutId":1},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":1,"rows":1,"color":"","vide":"false"},{"text":"","cols":4,"rows":2,"color":"lightblue","vide":"true","tab":[["datepicker","datepicker2"]],"id":"web2","optLayoutId":2}],[{"direction":"row","mainAxis":"space-around","crossAxis":"center"},{"direction":"column","mainAxis":"space-around","crossAxis":"center"},{"direction":"column","mainAxis":"space-around","crossAxis":"center"},{"direction":"column","mainAxis":"space-around","crossAxis":"center"}]]
    this.jsonModel
  }

  layoutAlign(id) {
    return `${this.optLayout[id].mainAxis} ${this.optLayout[id].crossAxis}`;
  }
  RecupeJson(event){
    this.testJson = event.target.value

}
  envoiJson(){
   this.tiles = this.testJson[0]
   this.optLayout = this.testJson[1]
    this.global.visionneuseAllElement.push(this.testJson)
    //console.log(localStorage.getItem("VisionneuseGenIHM"))
    if(localStorage.getItem("VisionneuseGenIHM") == null ){

      localStorage.setItem('VisionneuseGenIHM',this.testJson )
    }else{
      let local = localStorage.getItem("VisionneuseGenIHM")

      localStorage.setItem('VisionneuseGenIHM', local + '|$|' + this.testJson)
    }
   let newId = localStorage.getItem("VisionneuseGenIHM").split('|$|')
    this.router.navigate(['/VisionneuseGenIHM', newId.length -1 ]);

}

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  ngOnInit() {

  }
  envoyerJson(){

  }
  chargeJson(event){
this.jsonModel = event.target.value.toString()
  }
}
