import { NgModule } from "@angular/core";
import { MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    exports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule { }
