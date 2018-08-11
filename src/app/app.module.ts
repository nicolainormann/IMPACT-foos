import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";
import { HeaderModule } from "./header/header.module";
import { MatchModule } from "./match/match.module";
import { NavigationModule } from "./navigation/navigation.module";
import { StandingModule } from "./standing/standing.module";
import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,

        MaterialModule,

        AuthModule,
        HeaderModule,
        MatchModule,
        NavigationModule,
        StandingModule,

        AppRoutingModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
