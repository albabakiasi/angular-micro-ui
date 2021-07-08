import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  // {
  //   path: "home",
  //   loadChildren: () =>
  //     import("./shell/shell-routing.module").then(
  //       (m) => m.ProfileRoutingModule
  //     ),
  // },
];
