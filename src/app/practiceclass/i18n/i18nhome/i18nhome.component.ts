import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "ng2-translate";

@Component({
  selector: "app-i18nhome",
  templateUrl: "./i18nhome.component.html",
  styleUrls: ["./i18nhome.component.css"]
})
export class I18nhomeComponent implements OnInit, OnDestroy {
  queryParamSubscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService
  ) {
    // 1.
    translateService.addLangs(["en", "fr", "ja", "cn"]);
    this.setLocale("en");
  }

  ngOnInit() {
    // 2.
    this.queryParamSubscription = this.activatedRoute.queryParams.subscribe(
      queryParams => {
        console.log("Query String :" + JSON.stringify(queryParams));

        let selecteLocale = queryParams.locale;
        console.log("Sleected lang :" + selecteLocale);

        this.setLocale(selecteLocale);
      }
    );
  }

  setLocale(locale: string) {
    if (locale == undefined) {
      this.translateService.setDefaultLang("en");
      return;
    }

    // let browserLang = this.translateService.getBrowserLang();

    this.translateService.use(locale.match(/en|fr|cn|ja/) ? locale : "en");
  }

  ngOnDestroy() {
    // Final Step
    this.queryParamSubscription.unsubscribe();
  }

  handleLangChange(e) {
    console.log("Language selected " + e.target.value);
    this.setLocale(e.target.value);
  }
}
