
import {Component,OnInit, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../Services/GlobalService";
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent } from '@alfresco/adf-content-services';
import {Json} from "../json";
import {Composant} from "../composant";
import {HeroService} from "../hero.service";



@Component({
  selector: 'app-custom-search',
  templateUrl: './visionneuse-genihm.component.html',
  styleUrls: ['./visionneuse-genihm.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VisionneuseGenIHMComponent implements OnInit {
  id: number;
  private sub: any;
  public tiles
  public optLayout
  showViewer: Boolean = false;
  nodeId: String = null;

  @ViewChild(DocumentListComponent)
  documentList: DocumentListComponent;
  totaltest: Composant[];
  public jsons: Json[];

  constructor(private notificationService: NotificationService, private heroService: HeroService ,private route: ActivatedRoute,public global : GlobalService, public router: Router) {
    this.jsons = []
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if(this.id == -1){
      const local = localStorage.getItem('PreVisionneuse')
      console.log(JSON.parse(local))
      this.tiles = JSON.parse(local)[0];
      this.optLayout = JSON.parse(local)[1];
    }else{
      const local = localStorage.getItem('VisionneuseGenIHM').split('|$|');
      if (local.length - 1 < this.id || local === [] || local == null) {
        this.router.navigate(['/genihm']);
        console.log(local);
        this.tiles = JSON.parse(local[this.id])[0];
        this.optLayout = JSON.parse(local[this.id])[1];
      }
    }




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
  addJson(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.heroService.addJson({ content } as Json)
      .subscribe(json => {
        this.jsons.push(json);
        alert('Envoyé avec succès')
      });
  }

  onSubmit(){
    var data = {}
    for(var z = 0; z < this.tiles.length; z++){
      if(this.tiles[z].vide == 'true'){
        for(var i = 0; i < this.tiles[z].tab.length; i++){
          if(this.tiles[z].tab[i][0] == "input"){
            let key = this.tiles[z].tab[i][2]
            data[key] = (<HTMLInputElement>document.getElementById(this.tiles[z].tab[i][1])).value
          }
        }
      }
    }
    console.log(JSON.stringify(data))
    console.log(this.heroService.heroesUrl)
    this.addJson(JSON.stringify(data))
  }

  onGoBack(event: any) {
    this.showViewer = false;
    this.nodeId = null;
  }
}
