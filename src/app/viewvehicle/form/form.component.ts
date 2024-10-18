import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Vehicle } from './form.model';
import { Router } from '@angular/router';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() model: Vehicle = new Vehicle;
  @Output() showForm = new EventEmitter<boolean>();



  alertMsg: any;

  constructor(private http: FormService) { }

  ngOnInit(): void {

    console.log('ViewvehicleComponent initialized');
  }

  save() {
    if (!this.model.make || !this.model.model || !this.model.year || !this.model.vin) {
      console.error('All fields are required!');
      return;
    }

    console.log('Model to be sent:', this.model);
    this.http.addVehicle(this.model)
      .subscribe({
        next: (response) => {
          // console.log('Vehicle saved successfully', response);
          this.alertMsg = "Vehicle saved successfully"
          this.reset();
          this.showForm.emit(false);
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }


  reset() {
    this.model = new Vehicle;
  }

}






