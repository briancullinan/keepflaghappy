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
    @Input() colors = "Blue sunset"
    @Input() deals = [
        "$3 draft pints",
        "$2.50 draft PBR",
        "$3.50 well drinks",
        "$4 house wine"
    ]
    @Input() schedule = "dotw";
    @Input() dotw = "Monday";

    days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    colorSchemes: Array<string> = [
        'Blue sunset',
        'Classic and Retro',
        'Shimmering blues and greens',
        'Sunset over a swamp',
        'Mediteranean blues',
        'Exotic orchids',
        'Sophisticated and calm',
        'Magentas and yellows',
        'Blue mountain peaks and clouds',
        'Orange sunset',
        'Vintage 1950s',
        'Vivid and retro',
        'Ornametal reds and yellows',
        'Turqoise and red',
        'Blue sundew',
        'Classic 70s',
        'Gothic architecture',
        'Fiery red landscape',
        'Urban skyline',
        'Natural elegance',
        'Summer blueberries',
        'On the dock of the bay',
        'Earthy greens',
        'Old car and blue jeans',
        'Berries galore',
        'Refreshing and invigorating',
        'Serene and relaxing',
        'Aqua greens',
        'Summer vacation',
        'Twilight moon',
        'Swiss meadows',
        'Tropical wildlife',
        'Child\'s play',
        'Sunset in Hamburg',
        'Lemon in water',
        'Inspirational and romantic',
        'Riverside London',
        'Black and bright orange',
        'Indian fields',
        'Jazz night',
        'Bright and energetic',
        'Earthy and natural',
        'Czech architecture',
        'Blue accent',
        'Kaleidoscope illusions',
        'Winter barn',
        'Bright and fruity',
        'Purple garlic',
        'The colors of nature',
        'Oriental opulence'
    ]

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/deals');
        this.menuService.menuTitle.next('coupon.title');
    }

    getSpan(d) {
        return d.replace(/(\$[0-9\.]+)/ig, '<span>$1</span>')
    }
}
