import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { MVProduct } from 'src/MVProduct';
import {MatDialogModule,MatDialogConfig, MatDialog} from '@angular/material/dialog';
import { EditproductComponent } from '../editproduct/editproduct.component';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {
 
  constructor(private ProductService:ProductServiceService,private _dialog:MatDialog) { }

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
    this.openConfirmDialog();
  let confirmation = confirm("Are you sure you want to delete this product");
    if(confirmation)
    {
      this.ProductService.DeleteById(delpro).subscribe(Delt => {
        console.log('True',Delt)
        this.loadProducts();
        this.snakbar(delpro.productName);
      })
    }
  }

 
      update(product:MVProduct){
      this.ProductService.Receiver(product);
      this.OpenDialog();   
      }

      snakbar(message){
        this.ProductService.openSnackBar(message,"Has been deleted");
      }

    // Dialog open
      OpenDialog(){
        const dialogConfug = new MatDialogConfig();
        dialogConfug.disableClose = true;
        dialogConfug .autoFocus = true;
        dialogConfug .width = "50%";
         this._dialog.open(EditproductComponent,dialogConfug);
      }

      openConfirmDialog(){
        this._dialog.open(ProductlistComponent,{
          width:'390px',
          panelClass:'confirm-dialog-container',
          disableClose:true
        });
      }
}