import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "foos-root",
    template: `
        <div class="app">
            <foos-header></foos-header>

            <div class="app__container" *ngIf="user && user.displayName | async; else auth">
                <foos-navigation></foos-navigation>
                <router-outlet></router-outlet>
            </div>

            <ng-template #auth>
                <div class="app__center">
                    <div class="app__center-container">
                        <foos-auth-profile *ngIf="user | async; else login"></foos-auth-profile>
                        <ng-template #login>
                            <foos-auth></foos-auth>
                        </ng-template>
                    </div>
                </div>
            </ng-template>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy {
    user: firebase.User | null = null;

    private _unsubscribe = new Subject();

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.user$.pipe(
            takeUntil(this._unsubscribe)
        ).subscribe(user => {
            this.user = user;
            console.log(user);
        });
    }

    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}
