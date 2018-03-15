import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { FlexLayoutModule } from '@angular/flex-layout';


// ADF modules
import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';

// Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule,
         MatButtonModule,
         MatCardModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatButton,
        } from '@angular/material';

export function modules() {
  return [
      CoreModule,
      ContentModule,
      BrowserAnimationsModule,
      MatButtonModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      DragulaModule,
      FlexLayoutModule,
  ];
}

@NgModule({
  imports: modules(),
  exports: modules()
})
export class AdfModule {}
