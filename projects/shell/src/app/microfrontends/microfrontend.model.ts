import { LoadRemoteModuleOptions } from "../../../../shared/src/lib/utils/federation-utils";

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};
