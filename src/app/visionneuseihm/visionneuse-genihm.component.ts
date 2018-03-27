import {Component, ViewEncapsulation, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalService} from "../Services/GlobalService";


@Component({
  selector: 'app-custom-search',
  templateUrl: './visionneuse-genihm.component.html',
  styleUrls: ['./visionneuse-genihm.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VisionneuseGenIHMComponent {
  id: number;
  private sub: any;
  public tiles
  public optLayout

  constructor(private route: ActivatedRoute,public global : GlobalService, public router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

    });
    let local = localStorage.getItem("VisionneuseGenIHM").split('|$|')
    if(local.length - 1 < this.id || local == [] || local == null){
      this.router.navigate(['/genihm']);
    }
    console.log(local)
    this.tiles = JSON.parse(local[this.id])[0]
    this.optLayout = JSON.parse(local[this.id])[1]
  }
  layoutAlign(id) {
    return `${this.optLayout[id].mainAxis} ${this.optLayout[id].crossAxis}`;
  }
}
