import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
    @Input() zoom: number = 4;
    @Input() lat: number = 51.678418;
    @Input() lng: number = 7.809007;

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/deals');
        this.menuService.menuTitle.next('coupon.title');
    }

}
