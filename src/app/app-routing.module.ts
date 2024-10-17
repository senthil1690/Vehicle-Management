import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';

const routes: Routes = [
  { path: '', component: ViewvehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
