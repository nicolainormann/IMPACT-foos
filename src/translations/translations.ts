export class Translations {
    static global = {
        name: "IMPACT Foos",
    };

    static routes = {
        addMatch: {
            title: "Add match",
            path: ""
        },
        standing: {
            title: "Standing",
            path: "standing"
        },
        profile: {
            title: "Profile",
            path: "profile"
        },
        logout: {
            title: "Logout"
        }
    };

    static header = {
        logoText: "foos"
    };

    static auth = {
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        createUser: "Create user",
        login: "Login",
        displayName: "Display name",
        photoURL: "Image link",
        createPlayer: "Create player",
        profileImage: "Profile image"
    };

    static match = {
        submit: "Submit",
        score: {
            score: "Score"
        },
        team: {
            team: "Team {0}"
        },
        player: {
            position: ["Defense", "Offense"],
            selectPlaceholder: "Choose player"
        }
    };

    static replaceTokens(translation: string, ...tokens: any[]): string {
        for (let i = 0; i < tokens.length; i++) {
            translation = translation.replace(`{${i}}`, tokens[i]);
        }

        return translation;
    }
}
