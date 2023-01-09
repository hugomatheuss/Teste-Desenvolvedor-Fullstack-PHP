import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEnum } from 'src/app/core/enums/router.enum';
import { ApplianceInterface } from 'src/app/core/interfaces/appliance.interface';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public registeredAppliances: Array<ApplianceInterface> = [];
    public routers: typeof RouterEnum;

    constructor(private route: Router, private service: ApiService) {
        this.routers = RouterEnum;
        this.loadItens();
    }

    ngOnInit(): void {}

    public deleteItem(id: number): void {
        this.service.deleteAppliance(id).subscribe((res) => {
            if (res) {
                Swal.fire('Sucesso!', 'Eletrodoméstico apagado.', 'success');
                this.loadItens();
            }
        });
    }

    private loadItens(): void {
        this.service.getAllAppliances().subscribe(
            (appliances) => {
                this.registeredAppliances = appliances.data.length ? appliances.data : [];
            },
            () => this.route.navigateByUrl('/')
        );
    }
}
