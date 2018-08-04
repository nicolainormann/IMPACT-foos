import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";

@Component({
    selector: "foos-auth-login",
    template: `
        <div class="auth-login">
            <input class="auth__input input" type="email" name="email" placeholder="${Translations.auth.email}" required />
            <input class="auth__input input" type="password" name="password" placeholder="${Translations.auth.password}" required minLength={6} />
        </div>
    `
})
export class AuthLoginComponent { }
