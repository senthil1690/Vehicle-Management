import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { FormComponent } from './viewvehicle/form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewvehicleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgSelectModule, FormsModule, TableModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }