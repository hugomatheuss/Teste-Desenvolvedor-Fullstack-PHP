import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterEnum } from 'src/app/core/enums/router.enum';
import { ApplianceInterface } from 'src/app/core/interfaces/appliance.interface';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { ApplianceForm } from './appliance.form';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public isRegister: boolean;
    private _applianceForm: ApplianceForm;
    private _id?: number;

    constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: ApiService) {
        this.isRegister = this.route.url === RouterEnum.CADASTRAR;
        this._applianceForm = new ApplianceForm();

        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state.id) {
                const data = window.history.state as ApplianceInterface;
                this._applianceForm.setData(data);
                this._id = data.id;
            }
        });
    }

    ngOnInit(): void {}

    public get form(): ApplianceForm {
        return this._applianceForm;
    }

    public save() {
        if (this._applianceForm.valid) {
            if (this.isRegister) {
                this.service.saveNewAppliance(this.form.getData()).subscribe((res) => {
                    Swal.fire('Sucesso!', `${res.data.nome} salvo com sucesso!`, 'success').then(() => {
                        this.route.navigateByUrl('/list');
                    });
                });
            } else if (this._id) {
                this.service.updateAppliance(this.form.getData(), this._id).subscribe((res) => {
                    if (res.updated) {
                        Swal.fire('Sucesso!', `${this.form.getData().nome} Atualizado com sucesso!`, 'success').then(() => {
                            this.route.navigateByUrl('/list');
                        });
                    } else {
                        Swal.fire('Atenção!', 'Erro ao atualizar Eletrodomestico.', 'error');
                    }
                });
            } else {
                Swal.fire('Atenção!', 'Erro ao salvar!', 'error');
                this.route.navigateByUrl('/list');
            }
        } else {
            Swal.fire('Atenção!', 'Preencha todos os campos corretamente', 'warning');
        }
    }
}
