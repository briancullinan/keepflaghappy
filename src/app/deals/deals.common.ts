// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { DealsRoutes } from './deals.routes';
import { DealsComponent } from './components/deals/deals.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { LocationComponent } from './components/location/location.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>DealsRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    DealsComponent,
    CouponComponent,
    LocationComponent
];
