import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { InputComponent } from "./components/input/input.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { SelectComponent } from "./components/select/select.component";
import { RadioButtonComponent } from "./components/radio-button/radio-button.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { LinkComponent } from "./components/link/link.component";
import { ToggleComponent } from "./components/toggle/toggle.component";
import { CardComponent } from "./components/card/card.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { ExpansionPanelComponent } from "./components/expansion-panel/expansion-panel.component";
import { TextAreaComponent } from "./components/text-area/text-area.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "./components/progress-spinner/progress-spinner.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { TabComponent } from "./components/tabs/tab/tab.component";
import { SortHeaderDirective } from "./directives/sort-header.directive";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { AlertComponent } from "./components/alert/alert.component";
import { ButtonDirective } from "./directives/button.directive";
import { FooterComponent } from "./components/footer/footer.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FederatedComponent } from "./components/federated/federated.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TranslationService } from "./services/translation.service";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    SharedComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    RadioButtonComponent,
    DatePickerComponent,
    AutocompleteComponent,
    LinkComponent,
    ToggleComponent,
    CardComponent,
    ChipsComponent,
    DialogComponent,
    ExpansionPanelComponent,
    TextAreaComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    SliderComponent,
    SidenavComponent,
    ToolbarComponent,
    TabsComponent,
    TabComponent,
    SortHeaderDirective,
    CarouselComponent,
    AlertComponent,
    ButtonDirective,
    // UI Components
    FooterComponent,
    NavBarComponent,
    FederatedComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule,
  ],
  exports: [
    ButtonDirective,
    NavBarComponent,
    FooterComponent,
    FederatedComponent,
    CommonModule,
    HttpClientModule,
    TranslateModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TranslationService],
    };
  }
}
