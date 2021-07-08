import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { Product } from "../../models/product.model";
import { GetProducts, SetSelectedProduct } from "../../store/product.actions";
import { ProductSelectors } from "../../store/product.selector";

@Component({
  selector: "app-profile",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  @Select(ProductSelectors.getProductList) products$: Observable<Product[]>;

  // products: Product[] = [];

  constructor(private store: Store, private router: Router) {}

  // Subscriptions
  private unsubscribe: Subscription[] = [];

  ngOnInit(): void {
    this.store.dispatch(new GetProducts());
  }

  // Destroy subs
  ngOnDestroy() {
    this.unsubscribe.forEach((el) => el.unsubscribe());
  }

  selectProduct(product: Product) {
    this.store.dispatch(new SetSelectedProduct(product));
    this.router.navigateByUrl("/timeline");
  }
}
