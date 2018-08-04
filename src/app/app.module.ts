import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { StandingComponent } from "./standing/standing.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthCreateUserComponent } from "./auth/auth-create-user.component";
import { AuthLoginComponent } from "./auth/auth-login.component";
import { AuthProfileComponent } from "./auth/auth-profile.component";
import { AuthProfileImageComponent } from "./auth/auth-profile-image.component";
import { MatchComponent } from "./match/match.component";
import { MatchPlayerComponent } from "./match/match-player.component";
import { MatchTeamComponent } from "./match/match-team.component";
import { MatchScoreComponent } from "./match/match-score.component";
import { MatchScoreInputComponent } from "./match/match-score-input.component";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AuthService } from "./auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        StandingComponent,
        AuthComponent,
        AuthCreateUserComponent,
        AuthLoginComponent,
        AuthProfileComponent,
        AuthProfileImageComponent,
        MatchComponent,
        MatchPlayerComponent,
        MatchTeamComponent,
        MatchScoreComponent,
        MatchScoreInputComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
