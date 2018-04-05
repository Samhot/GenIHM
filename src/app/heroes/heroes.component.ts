import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Json } from '../json';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  jsons: Json[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getJson();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getJson(): void {
    this.heroService.getJson()
    .subscribe(jsons => this.jsons = jsons);
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  addJson(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.heroService.addJson({ content } as Json)
      .subscribe(json => {
        this.jsons.push(json);
      });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
