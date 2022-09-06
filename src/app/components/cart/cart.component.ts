import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
	informationForm: FormGroup;

	cart: Array<Product & { quantity: number }>;

	totalPrice: number;

	orderInfo!: { name: string; totalPrice: number };

	@Output() information = new EventEmitter();

	constructor(
		private formBuilder: FormBuilder,
		private cartService: CartService
	) {
		this.informationForm = this.formBuilder.group({
			fullname: new FormControl("", [
				Validators.required,
				Validators.minLength(3),
			]),
			address: new FormControl("", [
				Validators.required,
				Validators.minLength(6),
			]),
			credit: new FormControl("", [
				Validators.required,
				Validators.pattern("^[0-9]*$"),
				Validators.minLength(16),
			]),
		});

		this.cart = this.cartService.getAllCart();

		this.totalPrice = this.calTotalPrice();
	}

	ngOnInit(): void {}

	onChange(newValue: number) {
		if (newValue <= 0) {
			alert("Removed product from cart!");
		}

		this.cart = this.cartService.cart = this.cartService.cart.filter(
			(p) => p.quantity > 0
		);
		this.totalPrice = this.calTotalPrice();
	}

	calTotalPrice() {
		return this.cart.reduce(
			(total, current) => total + current.price * current.quantity,
			0
		);
	}

	onSubmit() {
		this.information.emit(this.informationForm.value);
		this.orderInfo = {
			name: this.informationForm.value.fullname,
			totalPrice: this.totalPrice,
		};
		console.log(this.informationForm.value);
	}

	get fullname() {
		return this.informationForm.get("fullname");
	}
	get address() {
		return this.informationForm.get("address");
	}
	get credit() {
		return this.informationForm.get("credit");
	}
}
