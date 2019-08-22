import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpageComponent } from './addpage/addpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleComponent } from './sale/sale.component';
import { EditproductComponent } from './editproduct/editproduct.component';



const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'Addpage', component:AddpageComponent},
  {path:'Productlist', component:ProductlistComponent},
  {path:'Sale', component:SaleComponent},
  {path: 'Edit', component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
