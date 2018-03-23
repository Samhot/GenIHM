import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RouterModule, Routes } from '@angular/router';


// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';
import { AuthGuardEcm } from '@alfresco/adf-core';


// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { SearchDemoComponent } from './search/search-demo.component';
import {GenimhComponent, DialogOverviewExampleDialogComponent} from 'app/genimh/genimh.component';
import {AccordionModule} from 'ng2-accordion';
import { NewComponent } from './new/new.component';


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
    path: 'test',
    component: NewComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AccordionModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),

    // ADF modules
    AdfModule,
  ], entryComponents: [ DialogOverviewExampleDialogComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialogOverviewExampleDialogComponent,
    DocumentlistComponent,
    SearchDemoComponent,
    GenimhComponent,
    NewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
