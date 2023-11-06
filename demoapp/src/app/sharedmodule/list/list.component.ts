import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() products:any[]=[]
  // products: any[]=[{code:1,name:'Pravin',category:'sjdkjs',quantity:2}];
}
