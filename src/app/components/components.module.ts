import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PatientsCardsComponent } from './patients-cards/patients-cards.component';
import { PatientsRecordComponent } from './patients-record/patients-record.component';
import { EditDocumentsComponent } from './edit-documents/edit-documents.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BillingComponent } from './billing/billing.component';
import { PlanComponent } from './plan/plan.component';
import { ClinicComponent } from './clinic/clinic.component';

@NgModule({
  declarations: [
    PatientsCardsComponent,
    PatientsRecordComponent,
    EditDocumentsComponent,
    SubscriptionComponent,
    BillingComponent,
    PlanComponent,
    ClinicComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule

  ]
})
export class ComponentsModule { }
