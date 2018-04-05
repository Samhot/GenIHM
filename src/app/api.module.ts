import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


// App components
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { JsonDetailComponent } from './json-detail/json-detail.component';


const appRoutes: Routes = [
  {
    path: 'api',
    component: HeroesComponent
  },
  { path: 'api/hero/:id', component: HeroDetailComponent },
  { path: 'api/heroes', component: HeroesComponent },
  { path: 'api/json/:id', component: JsonDetailComponent }
  // { path: 'hero/search/:keyword', component: WodSearchComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    JsonDetailComponent
  ],
  providers: [HeroService],
  bootstrap: [HeroesComponent]
})
export class ApiModule { }
