import { Routes } from '@angular/router';
// app
import { DealsComponent } from './components/deals/deals.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { LocationComponent } from './components/location/location.component';

export const DealsRoutes: Routes = [
    {
        path: '',
        component: DealsComponent
    },
    {
        path: ':coupon',
        component: CouponComponent
    },
    {
        path: 'location',
        component: LocationComponent
    }
];
