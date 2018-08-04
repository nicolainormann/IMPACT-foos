import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";
import { impact } from "../../assets/svg/svg";

@Component({
    selector: "foos-header",
    template: `
        <header class="header">
            <a class="header__logo" routerLink="/${Translations.routes.addMatch.path}">
                ${impact}
                <div class="header__logo-text">
                    ${Translations.header.logoText}
                </div>
            </a>
        </header>
    `
})
export class HeaderComponent { }
