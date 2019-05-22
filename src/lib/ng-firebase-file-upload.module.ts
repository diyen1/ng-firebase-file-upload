import { NgModule } from '@angular/core';
import { NgFirebaseFileUploadComponent } from './ng-firebase-file-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgFirebaseFileUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgFirebaseFileUploadComponent]
})
export class NgFirebaseFileUploadModule { }
