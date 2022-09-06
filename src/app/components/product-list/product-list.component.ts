import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private httpService: HttpService) {
    this.httpService = httpService;
    this.products = [];
  }

  ngOnInit(): void {
    this.httpService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
    });
  }
}
