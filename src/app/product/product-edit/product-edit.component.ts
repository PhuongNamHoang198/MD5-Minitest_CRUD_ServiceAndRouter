import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ProductListComponent} from "../product-list/product-list.component";
import {Product} from "../product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input("id-edit-product") id : number = 0;

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  product : Product = {
    id: 1,
    name: '',
    price: 1,
    description: ''
  }

  constructor(private productListComponent : ProductListComponent,private productService : ProductService) { }

  ngOnInit(): void {
    this.product = this.productListComponent.productEdit;
  }

  submit() {
    const productEdit = this.productForm.value;
    this.productService.editProduct(this.product.id,productEdit);
    this.productForm.reset();
  }
}
