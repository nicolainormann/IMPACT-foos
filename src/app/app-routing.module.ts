import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Translations } from "../translations/translations";
import { StandingComponent } from "./standing/standing.component";
import { MatchComponent } from "./match/match.component";
import { AuthProfileComponent } from "./auth/auth-profile.component";

const routes: Routes = [
    {
        path: Translations.routes.addMatch.path,
        component: MatchComponent
    },
    {
        path: Translations.routes.standing.path,
        component: StandingComponent
    },
    {
        path: Translations.routes.profile.path,
        component: AuthProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
