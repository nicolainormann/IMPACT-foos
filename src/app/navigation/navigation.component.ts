import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";
import { plus, leaderboard, logout } from "../../assets/svg/svg";

@Component({
    selector: "foos-navigation",
    template: `
        <nav class="navigation">
            <div class="navigation__top">
                <a class="navigation__link" routerLinkActive="navigation__link_active" routerLink="${Translations.routes.addMatch.path}" [routerLinkActiveOptions]="{ exact: true }">
                    ${plus}
                    <div class="navigation__link-text">
                        ${Translations.routes.addMatch.title}
                    </div>
                </a>

                <a class="navigation__link" routerLinkActive="navigation__link_active" routerLink="${Translations.routes.standing.path}">
                    ${leaderboard}
                    <div class="navigation__link-text">
                        ${Translations.routes.standing.title}
                    </div>
                </a>
            </div>

            <div class="navigation__bottom">
                <!-- <a class="navigation__link" routerLinkActive="navigation__link_active" routerLink="${Translations.routes.profile.path}">
                    <div class="navigation__link-image">
                    </div>

                    <div class="navigation__link-text">
                    </div>
                </a>-->

                <button class="navigation__link navigation__link_bottom">
                    ${logout}
                    <div class="navigation__link-text">
                        ${Translations.routes.logout.title}
                    </div>
                </button>
            </div>
        </nav>
    `
})
export class NavigationComponent {

}
