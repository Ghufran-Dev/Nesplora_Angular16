import { Component } from '@angular/core';
import { patients_card_data } from 'src/app/patients_card_data';

@Component({
  selector: 'app-patients-cards',
  templateUrl: './patients-cards.component.html',
  styleUrls: ['./patients-cards.component.css']
})
export class PatientsCardsComponent {
patient_data = patients_card_data
}
