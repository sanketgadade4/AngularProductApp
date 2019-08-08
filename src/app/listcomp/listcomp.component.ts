import { Component, OnInit,Input,EventEmitter, Output} from '@angular/core';
// import { EventEmitter } from 'events';
//import {  } from "../listcomp/listcomp.component";
// import  { ProductDetailsComponent } from '../product-details/product-details.component';


@Component({
  selector: 'app-listcomp',
  templateUrl: './listcomp.component.html',
  styleUrls: ['./listcomp.component.css']
})
export class ListcompComponent implements OnInit {
  public product1:any="";
  public product1value="";
  // receiving the value from parent
 @Input() public parentData:any;

//  passing values to parent start here

@Output() public childEvent=new EventEmitter();
@Output() public productValueEvent=new EventEmitter();
@Output() public productManfEvent=new EventEmitter();


// passing values to child end here
  constructor() { }

  ngOnInit() {
  }
 
  
 

  public onClickMe1()
  {
    
    this.childEvent.emit("HP-NoteBook");
    this.productValueEvent.emit("25000");
    this.productManfEvent.emit("HP");

  }
  public onClickMe2()
  {
    
    this.childEvent.emit("Dell-Latitude E7450");
    this.productValueEvent.emit("35000");
    this.productManfEvent.emit("Dell");

  }
  public onClickMe3()
  {
    
    this.childEvent.emit("Dell-Vastro");
    this.productValueEvent.emit("45000");
    this.productManfEvent.emit("Dell");

  }
  public onClickMe4()
  {
    
    this.childEvent.emit("Asus-4120");
    this.productValueEvent.emit("55000");
    this.productManfEvent.emit("Asus");

  }

  
}
