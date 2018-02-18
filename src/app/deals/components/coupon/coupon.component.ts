import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
    @Input() title = "Altitudes Bar and Grill Daily Special";
    @Input() layout = 1;
    @Input() deals = [
        "$3 draft pints",
        "$2.50 draft PBR",
        "$3.50 well drinks",
        "$4 house wine"
    ]

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/deals');
        this.menuService.menuTitle.next('coupon.title');
    }

    getSpan(d) {
        return d.replace(/(\$[0-9\.]+)/ig, '<span>$1</span>')
    }

    emptyDeals() {
        while(this.deals.length < this.layout) {
            this.deals.push('');
        }
    }
}
