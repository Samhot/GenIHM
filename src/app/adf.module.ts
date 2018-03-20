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
         MatAutocompleteModule,
         MatButtonToggleModule,
         MatCheckboxModule,
         MatChipsModule,
         MatDatepickerModule,
         MatDialogModule,
         MatExpansionModule,
         MatInputModule,
         MatListModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatProgressBarModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatRippleModule,
         MatSelectModule,
         MatSidenavModule,
         MatSliderModule,
         MatSlideToggleModule,
         MatSnackBarModule,
         MatSortModule,
         MatStepperModule,
         MatTableModule,
         MatTabsModule,
         MatTooltipModule,
        } from '@angular/material';

export function modules() {
  return [
      CoreModule,
      ContentModule,
      BrowserAnimationsModule,
      MatButtonModule,
      FormsModule,
      MatMenuModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatGridListModule,
      DragulaModule,
      FlexLayoutModule,
      MatAutocompleteModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatInputModule,
      MatListModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatTooltipModule,
  ];
}

@NgModule({
  imports: modules(),
  exports: modules()
})
export class AdfModule {}
