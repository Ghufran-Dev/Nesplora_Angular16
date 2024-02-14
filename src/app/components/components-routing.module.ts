import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsCardsComponent } from './patients-cards/patients-cards.component';
import { PatientsRecordComponent } from './patients-record/patients-record.component';
import { EditDocumentsComponent } from './edit-documents/edit-documents.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BillingComponent } from './billing/billing.component';
import { PlanComponent } from './plan/plan.component';
import { ClinicComponent } from './clinic/clinic.component';

const routes: Routes = [
  {
    path:'patients-cards', component:PatientsCardsComponent
  },
  {
    path:'patients-records', component:PatientsRecordComponent
  },
  {
    path:'edit-documents', component:EditDocumentsComponent
  },
  {
    path:'subscription', component:SubscriptionComponent
  },
  {
    path:'billing', component:BillingComponent
  },
  {
    path:'plan', component:PlanComponent
  },
  {
    path:'location', component:ClinicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
