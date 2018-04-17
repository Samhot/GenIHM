import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';
import { AuthGuardEcm } from '@alfresco/adf-core';

import { ApiModule } from './api.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
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
    ApiModule,
    PerfectScrollbarModule
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
  providers: [GlobalService, {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
