import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { HttpService } from "src/app/services/http.service";

@Component({
	selector: "app-product-item-detail",
	templateUrl: "./product-item-detail.component.html",
	styleUrls: ["./product-item-detail.component.css"],
})
export class ProductItemDetailComponent implements OnInit {
	private id: number;

	product: Product | undefined;

	quantity: number = 1;

	constructor(
		private route: ActivatedRoute,
		private httpService: HttpService,
		private cartService: CartService
	) {
		this.id = this.route.snapshot.params["id"];

		this.httpService
			.getProductById(this.id)
			.subscribe((data: Product | undefined) => (this.product = data));
	}

	ngOnInit(): void {}

	addToCart(product: Product, quantity: number) {
		this.cartService.addToCart(product, quantity);
	}
}
