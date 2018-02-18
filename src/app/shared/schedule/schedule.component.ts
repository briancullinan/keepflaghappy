import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
    @Input() schedule = "dotw";
    @Input() time = "specific times";
    @Input() dotw = [];
    @Input() totd = [];

    days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    times = [
        'AM 12:00',
        '12:30',
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
        '5:00',
        '5:30',
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        'PM 12:00',
        '12:30',
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
        '5:00',
        '5:30',
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
    ]

    getDays() {
        return this.days.filter((d, i) => this.dotw[i] && (this.totd[i] = []));
    }

    getTime(i, j) {
        if(typeof this.totd[i] === 'undefined') {
            this.totd[i] = [];
        }
        return this.totd[i][j];
    }

    setTime(i, j, evt) {
        if(typeof this.totd[i] === 'undefined') {
            this.totd[i] = [];
        }
        this.totd[i][j] = evt.value;
    }
}