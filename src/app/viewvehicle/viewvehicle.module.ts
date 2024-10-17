import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { formModule } from './form/form.module';
import { ViewvehicleComponent } from './viewvehicle.component';


@NgModule({
  declarations: [
    ViewvehicleComponent
  ],
  imports: [
    CommonModule, NgSelectModule, TableModule,HttpClientModule ,formModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ViewvehicleModule { }
