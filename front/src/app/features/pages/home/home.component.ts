import { Component, OnInit } from '@angular/core';
import { RouterEnum } from 'src/app/core/enums/router.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public routes: typeof RouterEnum;

    constructor() {
        this.routes = RouterEnum;
    }

    ngOnInit(): void {}
}
