import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { ProductState } from "./product/store/products.state";
import { SharedModule } from "../../../shared/src/public-api";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    TranslateModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forFeature([ProductState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
