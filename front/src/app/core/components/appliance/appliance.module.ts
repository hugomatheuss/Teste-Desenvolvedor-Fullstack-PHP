import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplianceComponent } from './appliance.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ApplianceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ApplianceComponent
  ]
})
export class ApplianceModule { }
