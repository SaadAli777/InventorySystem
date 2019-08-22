
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MVProduct } from 'src/MVProduct';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http: HttpClient,private _snackBar: MatSnackBar) { }

  /* ------------------Post method-------------------------------- */
  AddProduct(mvpro: MVProduct): Observable<any> {
    return this._http.post<any>("/api/product", mvpro);
  }


  getAllProducts() {
    return this._http.get<any>("/api/product");
  }


  GetProduct(mvpro: MVProduct): Observable<any> {
    return this._http.get<any>("/api/product/" + mvpro.productId);
  }

  DeleteById(mvpro: MVProduct): Observable<any> {
    return this._http.delete("/api/product/" + mvpro.productId);
  }

  ///////////////////////// under construction ////////////////////////////

  public proedit: MVProduct = new MVProduct();
  Receiver(mvprduct: MVProduct) {
    this.proedit = mvprduct;
  }


  TCS(): MVProduct {
    return this.proedit;
  }

  UpdateProduct(mvpro: MVProduct): Observable<any> {
    return this._http.put("/api/product", mvpro);
  }

  public openSnackBar(message,action) {
    this._snackBar.open(message,action,{duration: 2000});
  }

    SoldProduct(mvpro:MVProduct): Observable<any>{
      return this._http.put<any>("/api/product/", mvpro);
    }
  
}


// Subscription memory leaks  of observables 