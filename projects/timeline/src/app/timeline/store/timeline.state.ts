import { State } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TimelineStateModel } from "./timeline.state.model";

@State<TimelineStateModel>({
  name: "timeline",
  defaults: {
    products: [],
    selectedProduct: null,
  },
})
@Injectable()
export class TimelineState {
  constructor() {}

  // @Action(GetProducts)
  // getProducts({ getState, setState }: StateContext<ProductStateModel>) {
  //   // console.log(this.productService);
  //   return this.productService.getAllProducts().subscribe((res) => {
  //     console.log(res);
  //     const state = getState();
  //     console.log(state);
  //     setState({
  //       ...state,
  //       products: res,
  //     });
  //     console.log(state);
  //   });
  // }
}
