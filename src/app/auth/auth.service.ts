import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    user$: Observable<firebase.User | null> = this.fireAuth.authState;

    constructor(private fireAuth: AngularFireAuth) { }

    login(email: string, password: string) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.fireAuth.auth.signOut();
    }

    createUser(email: string, password: string) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}
