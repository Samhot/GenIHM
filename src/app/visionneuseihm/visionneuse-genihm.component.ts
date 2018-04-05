<<<<<<< HEAD
import {Component,OnInit, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../Services/GlobalService";
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent } from '@alfresco/adf-content-services';
=======
import {Component, ViewEncapsulation, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../Services/GlobalService';
>>>>>>> a14790b2ddc2371a2d61b2a6055f3e630d26fdb2


@Component({
  selector: 'app-custom-search',
  templateUrl: './visionneuse-genihm.component.html',
  styleUrls: ['./visionneuse-genihm.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VisionneuseGenIHMComponent implements OnInit {
  id: number;
  private sub: any;
<<<<<<< HEAD
  public tiles
  public optLayout
  showViewer: Boolean = false;
  nodeId: String = null;

  @ViewChild(DocumentListComponent)
  documentList: DocumentListComponent;


  constructor(private notificationService: NotificationService,private route: ActivatedRoute,public global : GlobalService, public router: Router) {}
=======
  public tiles;
  public optLayout;

  constructor(private route: ActivatedRoute, public global: GlobalService, public router: Router) {}
>>>>>>> a14790b2ddc2371a2d61b2a6055f3e630d26fdb2

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

    });
    const local = localStorage.getItem('VisionneuseGenIHM').split('|$|');
    if (local.length - 1 < this.id || local === [] || local == null) {
      this.router.navigate(['/genihm']);
    }
    console.log(local);
    this.tiles = JSON.parse(local[this.id])[0];
    this.optLayout = JSON.parse(local[this.id])[1];
  }
  layoutAlign(id) {
    return `${this.optLayout[id].mainAxis} ${this.optLayout[id].crossAxis}`;
  }

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
}
