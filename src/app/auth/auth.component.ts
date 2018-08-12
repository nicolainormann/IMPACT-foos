import { Component } from "@angular/core";
import { Translations } from "../../translations/translations";
import { NgForm, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: "foos-auth",
    template: `
        <form class="auth" [formGroup]="form" (ngSubmit)="onSubmit()">
            <foos-auth-create-user [form]="form" *ngIf="create; else login"></foos-auth-create-user>
            <ng-template #login>
                <foos-auth-login [form]="form"></foos-auth-login>
            </ng-template>

            <button mat-flat-button color="primary" class="mat_full-width mat_spacing-bottom">
                {{ create ? translations.createUser : translations.login }}
            </button>

            <button mat-stroked-button type="button" (click)="this.toggleCreate()">
                {{ create ? translations.login : translations.createUser }}
            </button>
        </form>
    `
})
export class AuthComponent {
    form = this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });

    translations = Translations.auth;
    create = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    toggleCreate() {
        this.create = !this.create;
    }

    onSubmit() {
        if (this.form.valid) {
            if (this.create) {
                // this.authService.createUser();
            }
            else {
                // this.authService.login();
            }
        }
    }
}
