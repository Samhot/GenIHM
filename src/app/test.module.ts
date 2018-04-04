import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceHero } from './in-memory-data.service';


// App components
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const appRoutes: Routes = [
  {
    path: 'test',
    component: HeroesComponent
  },
  { path: 'test/hero/:id', component: HeroDetailComponent },
  // { path: 'test/heroes', component: HeroesComponent },
  // { path: 'hero/search/:keyword', component: WodSearchComponent},
  // { path: 'todos', component: TodosComponent},
  // { path: 'todo/:id', component: TodosDetailComponent },
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
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataServiceHero
    // ),
    // InMemoryWebApiModule.forRoot(InMemoryDataServiceHero)
  ],
  declarations: [
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent
  ],
  providers: [HeroService, MessageService],
  bootstrap: [HeroesComponent]
})
export class TestModule { }
