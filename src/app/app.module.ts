import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceHero } from './in-memory-data.service';

// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';
import { AuthGuardEcm } from '@alfresco/adf-core';

import { TestModule } from './test.module';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { SearchDemoComponent } from './search/search-demo.component';
import { GenimhComponent, DialogOverviewExampleDialogComponent } from 'app/genimh/genimh.component';
import { MoteurGenIHMComponent } from './moteurgenihm/moteur-genihm.component';
import { AccordionModule } from 'ng2-accordion';
import { VisionneuseGenIHMComponent } from './visionneuseihm/visionneuse-genihm.component';
import { GlobalService } from './Services/GlobalService';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'documentlist',
    component: DocumentlistComponent,
    canActivate: [ AuthGuardEcm ]
  },
    {
    path: 'search',
    component: SearchDemoComponent,
    canActivate: [ AuthGuardEcm ]
  },
  {
    path: 'genihm',
    component: GenimhComponent,
    canActivate: [ AuthGuardEcm ]
  },
  {
    path: 'moteurGenihm',
    component: MoteurGenIHMComponent,
    canActivate: [ AuthGuardEcm ]
  },
  {
    path: 'VisionneuseGenIHM/:id',
    component: VisionneuseGenIHMComponent,
    canActivate: [AuthGuardEcm]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    AccordionModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    // ADF modules
    AdfModule,
    TestModule
  ], entryComponents: [ DialogOverviewExampleDialogComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialogOverviewExampleDialogComponent,
    DocumentlistComponent,
    SearchDemoComponent,
    GenimhComponent,
    VisionneuseGenIHMComponent,
    MoteurGenIHMComponent,
    FileSelectDirective,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
