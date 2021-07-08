import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "../../../../shared/src/public-api";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ShellModule {}
