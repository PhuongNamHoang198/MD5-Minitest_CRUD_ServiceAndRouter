import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
