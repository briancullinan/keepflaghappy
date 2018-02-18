import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSidenavModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ContainerComponent } from './container/container.component';
import { ColorsComponent } from './colors/colors.component';
import { RouterModule } from '../common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuModule } from '../menu/menu.module';
import { MenuService } from '../menu/menu.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';

export const MATERIALS = [
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule
]

export const COMPONENT_DECLARATIONS: any[] = [
    ContainerComponent,
    ColorsComponent,
    ScheduleComponent
];

export const COMMON_MODULES: any[] = [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    MenuModule,
    ...MATERIALS,
]

@NgModule({
    imports: [ 
        ...COMMON_MODULES
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    exports: [
        ...COMMON_MODULES,
        ...COMPONENT_DECLARATIONS
    ]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                MenuService
            ]
        }
    }
};
