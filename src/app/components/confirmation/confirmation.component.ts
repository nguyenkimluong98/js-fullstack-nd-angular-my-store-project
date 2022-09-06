import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-confirmation",
	templateUrl: "./confirmation.component.html",
	styleUrls: ["./confirmation.component.css"],
})
export class ConfirmationComponent implements OnInit {
	@Input() orderInfo: { name: string; totalPrice: number };

	constructor(private router: Router) {
		this.orderInfo = { name: "", totalPrice: 0 };
	}

	ngOnInit(): void {}

	backToProductList() {
		this.router.navigateByUrl("");
	}
}
