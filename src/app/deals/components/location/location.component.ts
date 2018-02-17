import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
    @Input() zoom: number = 4;
    @Input() lat: number = 51.678418;
    @Input() lng: number = 7.809007;
    
    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/deals');
        this.menuService.menuTitle.next('location.title');
    }

}
