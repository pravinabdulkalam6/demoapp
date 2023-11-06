import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TableModule } from 'primeng/table';
import { EmployeeComponent } from '../employee/employee.component';



@NgModule({
  declarations: [
    ListComponent,

  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports:[
    ListComponent
  ]
})
export class SharedmoduleModule { }
