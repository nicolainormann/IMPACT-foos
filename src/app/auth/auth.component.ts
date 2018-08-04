import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";

@Component({
    selector: "foos-auth",
    template: `
        <form class="auth" [ngSwitch]="create">
            <foos-auth-create-user *ngSwitchCase="true"></foos-auth-create-user>
            <foos-auth-login *ngSwitchCase="false"></foos-auth-login>

            <input class="auth__button button" type="submit" value="create ? Translations.auth.createUser : Translations.auth.login" />

            <button type="button" class="button button_link" (click)="this.toggleCreate()">
                <span *ngSwitchCase="true">${Translations.auth.login}</span>
                <span *ngSwitchCase="false">${Translations.auth.createUser}</span>
            </button>
        </form>
    `
})
export class AuthComponent {
    create = false;

    toggleCreate() {
        this.create = !this.create;
    }
}
