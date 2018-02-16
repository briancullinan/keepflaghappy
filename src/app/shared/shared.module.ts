import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSidenavModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule } from '@angular/material';

export const MATERIALS = [
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule
]

@NgModule({
    imports: [ CommonModule ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ...MATERIALS
    ]
})
export class SharedModule { };
