import { Component, OnInit } from '@angular/core';
import { MVProduct } from 'src/MVProduct';
import { ProductServiceService } from '../services/product-service.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})

//class
export class SaleComponent implements OnInit {
  public saleproduct = new MVProduct();
  public database = new MVProduct();
  constructor(private Service:ProductServiceService ) { }

   /*--------------*/
  datalist: any = [];
  error:any;
  soldValue:number;
   ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.Service.getAllProducts().subscribe(res=>{
      this.datalist=res;
    });
  }
/*--------------*/
   sold()
   {
     this.error=undefined;

      if(this.val > this.saleproduct.productQuantity){
        this.error="Sold Quantity cannot be greater than product availiable quantity";
        return;
      }
      else{
      this.onSold();
      }
   } 

   /*-----End-------*/

 
   onSold(){
     this.saleproduct.sold+= this.val;
     this.Service.SoldProduct(this.saleproduct).subscribe(
       data =>{ console.log(this.saleproduct,data);
      });
   }
  
 //////////////////////
   
 productControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  qSaleControl = new FormControl('', Validators.required);

    select(list:MVProduct){
     this.saleproduct = list;
    }
    val:number;



}
