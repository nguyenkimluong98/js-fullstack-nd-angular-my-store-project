import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
	providedIn: "root",
})
export class HttpService {
	private productUrl = "assets/data.json";

	constructor(private http: HttpClient) {}

	getAllProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.productUrl);
	}

	getProductById(id: number): Observable<Product | undefined> {
		return new Observable((subscriber) => {
			this.getAllProducts().subscribe((data: Product[]) => {
				subscriber.next(data.find((p) => p.id == id));
			});
		});
	}
}
