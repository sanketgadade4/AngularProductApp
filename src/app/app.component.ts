import { Component,Input } from '@angular/core';
// import {listcomponent} from "./product-details.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProductApp';
  public name:any="Laptop";
  public value:any="5000";
  public manufacturer:any="Dell";


 public prductname:"";
 public productvalue:"";
 public productmanf:"";

}
