import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { EmployeeComponent } from './employee/employee.component';
import { StaffComponent } from './staff/staff.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StaffComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    SharedmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
