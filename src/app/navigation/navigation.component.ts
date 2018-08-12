import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";
import { plus, leaderboard, logout } from "../../assets/svg/svg";

@Component({
    selector: "foos-navigation",
    template: `
        <nav class="navigation">
            <div class="navigation__top">
                <a mat-button class="navigation__link mat_full-width mat_icon-button" routerLinkActive="navigation__link_active" routerLink="${Translations.routes.addMatch.path}" [routerLinkActiveOptions]="{ exact: true }">
                    ${plus}
                    ${Translations.routes.addMatch.title}
                </a>

                <a mat-button class="navigation__link mat_full-width mat_icon-button" routerLinkActive="navigation__link_active" routerLink="${Translations.routes.standing.path}">
                    ${leaderboard}
                    ${Translations.routes.standing.title}
                </a>
            </div>

            <div class="navigation__bottom">
                <!-- <a routerLinkActive="mat_active" routerLink="${Translations.routes.profile.path}">
                    <div class="navigation__link-image">
                    </div>

                    <div class="navigation__link-text">
                    </div>
                </a>-->

                <button mat-flat-button class="mat_full-width mat_icon-button">
                    ${logout}
                    ${Translations.routes.logout.title}
                </button>
            </div>
        </nav>
    `
})
export class NavigationComponent {

}
