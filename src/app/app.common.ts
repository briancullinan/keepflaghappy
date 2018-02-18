import { AppRoutingModule } from './app-routing.module';
// demo
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    SharedModule.forRoot(),
    HomeModule,
    MenuModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
    AppComponent
];

export const COMPONENT_EXPORTS: any[] = [
    AppComponent
];

export * from './app-routing.module';
