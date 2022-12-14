import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  productEdit: Product= {
    id: 1,
    name: '',
    price: 1,
    description: ''
  };

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  findProductById(id: number) {
    // console.log(this.productService.findProductById(id));
    this.productEdit = <Product>this.productService.findProductById(id);
    console.log(this.productEdit);
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAll();
  }
}
