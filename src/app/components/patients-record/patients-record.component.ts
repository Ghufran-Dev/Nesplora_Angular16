import { Component } from '@angular/core';
import { patients_record_data } from 'src/app/patients_record_data';

@Component({
  selector: 'app-patients-record',
  templateUrl: './patients-record.component.html',
  styleUrls: ['./patients-record.component.css']
})
export class PatientsRecordComponent {
record=patients_record_data
}
