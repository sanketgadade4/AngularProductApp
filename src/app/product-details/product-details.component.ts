import { Component, OnInit, Input } from '@angular/core';
import{ ListcompComponent } from "../listcomp/listcomp.component";
//import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input('parentData') public name:any;      //name is property here
  @Input('parentData2') public value;
  @Input('parentData3') public manf;

  constructor() { }
  
  ngOnInit() {
  }

  
 
}
