import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataDirectiveComponent } from './data-directive/data-directive.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowDatamodalComponent } from './show-datamodal/show-datamodal.component';
import { CapitalLatterPipe } from './pipe/capital-latter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataTableComponent,
    DataDirectiveComponent,
    HomeComponent,
    ShowDatamodalComponent,
    CapitalLatterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  entryComponents: [ShowDatamodalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
