import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatchComponent } from "./match.component";
import { MatchTeamComponent } from "./match-team.component";
import { MatchPlayerComponent } from "./match-player.component";
import { MatchScoreComponent } from "./match-score.component";
import { MatchScoreInputComponent } from "./match-score-input.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MatchComponent,
        MatchTeamComponent,
        MatchPlayerComponent,
        MatchScoreComponent,
        MatchScoreInputComponent
    ]
})
export class MatchModule { }
