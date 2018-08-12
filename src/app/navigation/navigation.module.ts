import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation.component";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material/material.module";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule
    ],
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule { }
