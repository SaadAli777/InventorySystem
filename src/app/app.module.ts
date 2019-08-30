import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from './dialog/dialog.module';
// ---- Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule,MatDialogConfig} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormControl } from '@angular/forms';
import { Validators} from '@angular/forms';


// ---- 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpageComponent } from './addpage/addpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SaleComponent } from './sale/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FormsModule, FormGroup }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AddpageComponent,
    ProductlistComponent,
    SaleComponent,
    DashboardComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule ,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
    ScrollingModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
