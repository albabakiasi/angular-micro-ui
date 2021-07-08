import { Action, State, StateContext } from "@ngxs/store";
// RxJS
import { tap } from "rxjs/operators";

import { GetProducts, SetSelectedProduct } from "./product.actions";
import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ProductStateModel } from "./product.state.model";

@State<ProductStateModel>({
  name: "products",
  defaults: {
    products: [],
    selectedProduct: null,
  },
})
@Injectable()
export class ProductState {
  constructor(private productService: ProductService) {}

  @Action(GetProducts)
  getProducts({ getState, setState }: StateContext<ProductStateModel>) {
    // console.log(this.productService);
    return this.productService.getAllProducts().subscribe((res) => {
      console.log(res);
      const state = getState();
      console.log(state);
      setState({
        ...state,
        products: res,
      });
      console.log(state);
    });
    // return this.productService.getAllProducts().pipe(
    //   tap((result) => {
    //     console.log(result);
    //     const state = getState();
    //     console.log(state);
    //     setState({
    //       ...state,
    //       products: result,
    //     });
    //   })
    // );
  }

  @Action(SetSelectedProduct)
  setSelectedProduct(
    { getState, setState }: StateContext<ProductStateModel>,
    { payload }: SetSelectedProduct
  ) {
    const state = getState();
    setState({
      ...state,
      selectedProduct: payload,
    });
  }

  // @Action(AddTodo)
  // addTodo(
  //   { getState, patchState }: StateContext<TodoStateModel>,
  //   { payload }: AddTodo
  // ) {
  //   return this.todoService.addTodo(payload).pipe(
  //     tap((result) => {
  //       const state = getState();
  //       patchState({
  //         todos: [...state.todos, result],
  //       });
  //     })
  //   );
  // }
  // @Action(UpdateTodo)
  // updateTodo(
  //   { getState, setState }: StateContext<TodoStateModel>,
  //   { payload, id }: UpdateTodo
  // ) {
  //   return this.todoService.updateTodo(payload, id).pipe(
  //     tap((result) => {
  //       const state = getState();
  //       const todoList = [...state.todos];
  //       const todoIndex = todoList.findIndex((item) => item.id === id);
  //       todoList[todoIndex] = result;
  //       setState({
  //         ...state,
  //         todos: todoList,
  //       });
  //     })
  //   );
  // }
  // @Action(DeleteTodo)
  // deleteTodo(
  //   { getState, setState }: StateContext<TodoStateModel>,
  //   { id }: DeleteTodo
  // ) {
  //   return this.todoService.deleteTodo(id).pipe(
  //     tap(() => {
  //       const state = getState();
  //       const filteredArray = state.todos.filter((item) => item.id !== id);
  //       setState({
  //         ...state,
  //         todos: filteredArray,
  //       });
  //     })
  //   );
  // }
}
