import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";

@Component({
    selector: "foos-auth",
    template: `
        <form class="auth">
            <foos-auth-create-user *ngIf="create; else login"></foos-auth-create-user>
            <ng-template #login>
                <foos-auth-login></foos-auth-login>
            </ng-template>

            <button mat-flat-button color="accent" class="mat_full-width mat_spacing-bottom">
                {{ create ? translations.createUser : translations.login }}
            </button>

            <button mat-stroked-button type="button" (click)="this.toggleCreate()">
                {{ create ? translations.login : translations.createUser }}
            </button>
        </form>
    `
})
export class AuthComponent {
    translations = Translations.auth;
    create = false;

    toggleCreate() {
        this.create = !this.create;
    }
}
