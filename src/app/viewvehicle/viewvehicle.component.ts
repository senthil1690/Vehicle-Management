import { Component, OnInit } from '@angular/core';
import { Vehicle } from './form/form.model';
import { FormService } from './form/form.service';
import { ViewvehicleService } from './viewvehicle.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss'],
})
export class ViewvehicleComponent implements OnInit {
  dataCols = [
    { field: 'make', header: 'Make' },
    { field: 'model', header: 'Model' },
    { field: 'year', header: 'Year' },
    { field: 'vin', header: 'Vehicle Identification Number' },
  ];

  data: Vehicle[] = [];
model = new Vehicle();
  showForm = false;
  

  constructor(private formService: FormService , private ViewvehicleService : ViewvehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }
  loadVehicles() {
    this.formService.getVehicles().subscribe(
      (vehicles: Vehicle[]) => {
        this.data = vehicles;
      },
      (error) => {
        console.error('Error fetching vehicles', error);
      }
    );
  }
  searchText: string = ''; 
  refresh() {
    this.loadVehicles();
  }

  onAdd() {
    this.model = new Vehicle();
    this.showForm = true;
  }

  onEdit(i:  number) {
    this.showForm = true;
    this.model = this.data[i];
this.model.edited = true;
  }
  onBack() {
    this.showForm = false;
  }
  onDelete(id: number) {
    this.ViewvehicleService.deleteVehicle(this.data[id].id).subscribe(
      () => {
        console.log('Vehicle deleted successfully');
        // Fetch updated list of vehicles
        this.formService.getVehicles().subscribe(
          (vehicles: Vehicle[]) => {
            this.data = vehicles;
          },
          (error) => {
            console.error('Error fetching vehicles', error);
          }
        );
      },
      (error) => {
        console.error('Error deleting vehicle', error);
      }
    );
  }
  
  onShowForm(){
    this.showForm = false;
    this.loadVehicles();
  }
  filteredVehicles: Vehicle[] = [];
  search() {
    if (!this.searchText.trim()) {
      this.filteredVehicles = this.data; // Reset to original list if search is empty
      return; // Exit the method to avoid making an API call
  }

    this.ViewvehicleService.searchVehicles(this.searchText).subscribe(data => {
      this.filteredVehicles = data;
    },error => {
        console.error('Error fetching vehicles:', error); // Handle error
    });
    
  }

}
