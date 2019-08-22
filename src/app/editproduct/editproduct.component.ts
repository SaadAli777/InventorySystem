import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MVProduct} from '../../MVProduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  public valid : boolean;
  public mvproduct = new MVProduct();
  public pro: MVProduct = new MVProduct();

  constructor(private myserviceedit:ProductServiceService) {}


  onUpdate(){
        this.myserviceedit.UpdateProduct(this.pro).subscribe(
           edit =>{console.log(this.pro,edit);}
        )
       }
       
      receiver(){
        this.pro = this.myserviceedit.TCS();
      }

    ngOnInit():void {
      this. receiver();
    }
  
  

}






  

 

