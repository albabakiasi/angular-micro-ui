import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { loadRemoteModule } from "../../../shared/src/lib/utils/federation-utils";
import { HomeComponent } from "./shell/components/home/home.component";

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", redirectTo: "products", pathMatch: "full" },

  { path: "home", component: HomeComponent },

  {
    path: "products",
    loadChildren: () =>
      loadRemoteModule({
        remoteName: "product",
        remoteEntry: "http://localhost:4205/remoteEntry.js",
        exposedModule: "ProductModule",
      }).then((m) => m.ProductModule),
  },

  {
    path: "timeline",
    loadChildren: () =>
      loadRemoteModule({
        remoteName: "timeline",
        remoteEntry: "http://localhost:4202/remoteEntry.js",
        exposedModule: "TimelineModule",
      }).then((m) => m.TimelineModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
