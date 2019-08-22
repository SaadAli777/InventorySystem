import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {MVProduct} from '../../MVProduct';
import { ProductServiceService } from '../services/product-service.service';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html', 

  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {
  public mvproduct = new MVProduct();
  constructor(private myservice:ProductServiceService) {}

  // controlForm = new FormGroup({
  // idControl : new FormControl('', [Validators.required]),
  // nameControl : new FormControl('', [Validators.required]),
  // quantityControl : new FormControl('', [Validators.required]),
  // pControl : new FormControl('', [Validators.required]),
  // sControl : new FormControl('', [Validators.required])
  // });


  Validations: FormGroup;
  idControl = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]);
  nameControl = new FormControl('', [Validators.required]);
  quantityControl = new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]);
  pControl = new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]);
  sControl = new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]);

      


  ngOnInit() {
    
  }

  onSubmit(){
    this.myservice.AddProduct(this.mvproduct).subscribe(res=>{
      this.mvproduct=new MVProduct();console.log(this.mvproduct.salePrice);
    });  
  }

  snakbar(message){
    this.myservice.openSnackBar(message,"Has been added");
  }


}



// this.Validations = this.formBuilder.group({
//   firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), Validators.pattern('[a-zA-Z]+')]]
// });