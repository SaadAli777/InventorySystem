import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { MVProduct } from 'src/MVProduct';





@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})



export class ProductlistComponent implements OnInit {
 
  constructor(private ProductService:ProductServiceService ) { }

  public mvproduct = new MVProduct();
  listProducts: any=[];
  product:MVProduct;
  
  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts(){
    this.ProductService.getAllProducts().subscribe(res =>{
      this.listProducts=res;
    });
  }
    

  Delete(delpro:MVProduct){
   let confirmation = confirm("Are you sure you want to delete this product");
    if(confirmation)
    {
      this.ProductService.DeleteById(delpro).subscribe(Delt => {
        console.log('True',Delt)
        this.loadProducts();
      })
    }
  }

 

      update(product:MVProduct){
      this.ProductService.Receiver(product);
           
      }
  

      snakbar(message){
        this.ProductService.openSnackBar(message,"Has been deleted");
      }
}

// res=>      res.xyz
// res=> { res.xyz}