import { Selector } from "@ngxs/store";
import { ProductState } from "./products.state";
import { ProductStateModel } from "./product.state.model";

export class ProductSelectors {
  @Selector([ProductState])
  static getProductList(state: ProductStateModel) {
    console.log(state.products);
    return state.products;
  }

  @Selector([ProductState])
  static getSelectedProduct(state: ProductStateModel) {
    return state.selectedProduct;
  }
}
