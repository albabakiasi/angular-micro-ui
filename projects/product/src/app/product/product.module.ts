import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { NgxsModule } from "@ngxs/store";
import { ProductState } from "./store/products.state";
import { ProductService } from "./services/product.service";
import { SharedModule } from "../../../../shared/src/public-api";

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    NgxsModule.forFeature([ProductState]),
    ProductRoutingModule,
    CommonModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ProductService],
})
export class ProductModule {}
