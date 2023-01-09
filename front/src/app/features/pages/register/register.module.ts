import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule],
    exports: [RegisterComponent],
    providers: [ApiService]
})
export class RegisterModule {}
