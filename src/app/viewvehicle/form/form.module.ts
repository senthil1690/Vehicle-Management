import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormsModule,NgSelectModule,HttpClientModule],
})
export class formModule {}
