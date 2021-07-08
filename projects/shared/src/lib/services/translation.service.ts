// Angular
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
// Tranlsation
import { Subject, Observable } from "rxjs";

export interface Locale {
  lang: string;
  // tslint:disable-next-line:ban-types
  data: Object;
}

@Injectable()
export class TranslationService {
  // Private properties
  private langIds: any = [];

  changedLanguageSubject: Subject<string> = new Subject<string>();
  //instant: any;

  getLanguageAsObs(): Observable<string> {
    return this.changedLanguageSubject.asObservable();
  }
  /**
   * Service Constructor
   *
   * @param translate: TranslateService
   */
  constructor(private translate: TranslateService) {
    // add new langIds to the list
    this.translate.addLangs(["en", "sq"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang("sq");
  }

  /**
   * Load Translation
   *
   * @param args: Locale[]
   */
  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);

      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  /**
   * Setup language
   *
   * @param lang: any
   */
  setLanguage(lang: string) {
    if (lang) {
      // this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      // this.cookieService.delete("KEYCLOAK_LOCALE");
      // this.cookieService.set("KEYCLOAK_LOCALE", lang);
      localStorage.setItem("language", lang);
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    return localStorage.getItem("language") || this.translate.getDefaultLang();
  }
}
