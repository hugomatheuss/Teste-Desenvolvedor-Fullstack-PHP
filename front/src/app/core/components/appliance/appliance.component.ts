import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BrandsEnum } from '../../enums/brand.enum';
import { ApplianceInterface } from '../../interfaces/appliance.interface';

@Component({
    selector: 'app-appliance',
    templateUrl: './appliance.component.html',
    styleUrls: ['./appliance.component.scss']
})
export class ApplianceComponent implements OnInit {
    @Input() data: ApplianceInterface;
    @Output() remove: EventEmitter<number> = new EventEmitter<number>();
    @Output() update: EventEmitter<ApplianceInterface> = new EventEmitter<ApplianceInterface>();
    public brand: typeof BrandsEnum;

    constructor(private route: Router) {
        this.data = {
            nome: '',
            descricao: '',
            marca: 0,
            tensao: 220
        };
        this.brand = BrandsEnum;
    }

    ngOnInit(): void {}

    public redirectToUpdate(data: ApplianceInterface): void {
        this.route.navigateByUrl('/update', { state: data });
    }

    public getBrandName(brand: number): string {
        switch (brand) {
            case 1:
                return 'Electrolux';
            case 2:
                return 'Brastemp';
            case 3:
                return 'Fischer';
            case 4:
                return 'Samsung';
            case 5:
                return 'LG';

            default:
                return '';
                break;
        }
    }
}
