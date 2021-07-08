import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TranslationService } from "../../services/translation.service";
import { locale as enLang } from "../../config/lang/en";
import { locale as sqLang } from "../../config/lang/sq";
@Component({
  selector: "ai-nav-bar",
  templateUrl: "nav-bar.component.html",
  styleUrls: ["nav-bar.component.scss", "nav-bar-extras.scss"],
})
export class NavBarComponent implements OnInit {
  sideBarActive = false;
  // Language default
  language: string;

  subs: Subscription[] = [];

  constructor(private translationService: TranslationService) {
    this.translationService.loadTranslations(enLang, sqLang);
  }

  ngOnInit() {
    this.language = this.translationService.getSelectedLanguage();

    this.translationService.setLanguage(this.language);

    this.subs.push(
      this.translationService.getLanguageAsObs().subscribe((lan) => {
        console.log("[NAVBAR COMPONENT]", lan);
        this.language = lan;
        this.translationService.setLanguage(this.language);
      })
    );
  }
  // OnDestroy
  ngOnDestroy(): void {
    this.subs.forEach((el) => el.unsubscribe());
  }
  // Select language
  setLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.translationService.changedLanguageSubject.next(lang);
    this.language = this.translationService.getSelectedLanguage();
  }
}
