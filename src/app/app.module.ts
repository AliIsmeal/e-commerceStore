import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";

import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { ProductFormComponent } from "./admin/product-form/product-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firbase),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: HomeComponent },

      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "check-out", component: CheckOutComponent },
      { path: "order-success", component: OrderSuccessComponent },
      { path: "login", component: LoginComponent },
      { path: "admin/products", component: AdminProductsComponent },
      { path: "admin/orders", component: AdminOrdersComponent },
      { path: "admin/products/new", component: ProductFormComponent },
      { path: "my/orders", component: MyOrdersComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
