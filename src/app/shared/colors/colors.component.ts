import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
    @Input() colors = "Blue sunset"

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

}