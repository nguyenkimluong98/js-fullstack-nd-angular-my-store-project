import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
	{ path: "", component: ProductListComponent },
	{ path: "product-list", component: ProductListComponent },
	{ path: "product-detail/:id", component: ProductItemDetailComponent },
	{ path: "cart", component: CartComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
