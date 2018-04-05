import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Json } from '../json';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-json-detail',
  templateUrl: './json-detail.component.html',
  styleUrls: [ './json-detail.component.scss' ]
})
export class JsonDetailComponent implements OnInit {
  @Input() jsons: Json;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getJson1();
  }

  getJson1(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getJson1(id)
      .subscribe(jsons => this.jsons = jsons);
  }

  goBackHero(): void {
    this.location.back();
  }

}
