import { Component, Input } from "@angular/core";
import { Translations } from "../../translations/translations";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "foos-auth-login",
    template: `
        <div class="auth-login" [formGroup]="form" *ngIf="form">
            <mat-form-field class="mat_full-width mat_spacing-bottom">
                <input matInput formControlName="email" type="email" name="email" placeholder="${Translations.auth.email}" required />
            </mat-form-field>

            <mat-form-field class="mat_full-width mat_spacing-bottom">
                <input matInput formControlName="password" type="password" name="password" placeholder="${Translations.auth.password}" required minlength="6" />
            </mat-form-field>
        </div>
    `
})
export class AuthLoginComponent {
    @Input() form: FormGroup | undefined;
}
