import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list.routing.module';
import { ApplianceModule } from 'src/app/core/components/appliance/appliance.module';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ListComponent],
    imports: [CommonModule, ListRoutingModule, ApplianceModule, RouterModule],
    exports: [ListComponent],
    providers: [ApiService]
})
export class ListModule {}
