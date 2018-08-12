import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthCreateUserComponent } from "./auth-create-user.component";
import { AuthLoginComponent } from "./auth-login.component";
import { AuthComponent } from "./auth.component";
import { AuthProfileComponent } from "./auth-profile.component";
import { AuthProfileImageComponent } from "./auth-profile-image.component";
import { MaterialModule } from "../material/material.module";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        AuthComponent,
        AuthCreateUserComponent,
        AuthLoginComponent,
        AuthProfileComponent,
        AuthProfileImageComponent,
    ],
    exports: [
        AuthComponent,
        AuthProfileComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }
