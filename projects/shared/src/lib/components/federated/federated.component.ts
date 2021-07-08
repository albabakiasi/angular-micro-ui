import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ɵcreateInjector,
} from "@angular/core";
import { loadRemoteModule } from "../../utils/federation-utils";

@Component({
  selector: "federated-component",
  templateUrl: "./federated.component.html",
  styleUrls: ["./federated.component.scss"],
})
export class FederatedComponent implements OnInit {
  @ViewChild("federatedComponent", { read: ViewContainerRef })
  federatedComponent: ViewContainerRef;
  @Input() remoteEntry: string;
  @Input() remoteName: string;
  @Input("exposedModuleName") exposedModuleName: string;
  @Input() componentName: string;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}
  ngOnInit(): void {
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModuleName,
    }).then((federated) => {
      let exposedModule = federated[this.exposedModuleName];
      const componentFactory = this.cfr.resolveComponentFactory(
        exposedModule.ɵmod.exports.find((e) => e.name === this.componentName)
      );
      const { instance } = this.federatedComponent.createComponent(
        componentFactory,
        null,
        ɵcreateInjector(exposedModule, this.injector)
      );
    });
  }
}
