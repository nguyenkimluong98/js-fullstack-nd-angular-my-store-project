import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./layout/header/header.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProductListComponent,
		ProductItemComponent,
		ProductItemDetailComponent,
		CartComponent,
		ConfirmationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
