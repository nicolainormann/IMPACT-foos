import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";

@Component({
    selector: "foos-auth-login",
    template: `
        <div class="auth-login">
            <mat-form-field class="mat_full-width mat_spacing-bottom">
                <input matInput type="email" name="email" placeholder="${Translations.auth.email}" required />
            </mat-form-field>

            <mat-form-field class="mat_full-width mat_spacing-bottom">
                <input matInput type="password" name="password" placeholder="${Translations.auth.password}" required minlength="6" />
            </mat-form-field>
        </div>
    `
})
export class AuthLoginComponent { }
