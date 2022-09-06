import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
	providedIn: "root",
})
export class CartService {
	cart: Array<Product & { quantity: number }>;

	constructor() {
		this.cart = [];
	}

	addToCart(product: Product, quantity: number) {
		quantity = parseInt(quantity.toString());

		let existProduct = this.cart.find((c) => c.id == product.id);

		if (!existProduct) {
			this.cart.push({ ...product, quantity });
		} else {
			existProduct.quantity += quantity;
		}

		alert("Added to cart!");
	}

	getAllCart() {
		return this.cart;
	}
}
