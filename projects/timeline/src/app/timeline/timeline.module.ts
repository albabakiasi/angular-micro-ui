import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../../shared/src/public-api";
import { NgxsModule } from "@ngxs/store";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { TimelineRoutingModule } from "./timeline-routing.module";
import { TimelineState } from "./store/timeline.state";

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    NgxsModule.forFeature([TimelineState]),
    TimelineRoutingModule,
    CommonModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
})
export class TimelineModule {}
