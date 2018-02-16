import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-deals',
    templateUrl: './deals.component.html',
    styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('#menu');
        this.menuService.menuTitle.next('deals.title');
    }

}
