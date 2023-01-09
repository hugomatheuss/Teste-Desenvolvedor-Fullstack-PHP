import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplianceInterface, TensaoInterface } from 'src/app/core/interfaces/appliance.interface';

export class ApplianceForm extends FormGroup {
    constructor() {
        super({
            nome: new FormControl('', [Validators.required]),
            descricao: new FormControl('', [Validators.required]),
            marca: new FormControl('', [Validators.required]),
            tensao: new FormControl('110', [Validators.required])
        });
    }

    public get nome(): AbstractControl {
        return this.get('nome') as AbstractControl;
    }

    public get descricao() {
        return this.get('descricao') as AbstractControl;
    }

    public get tensao() {
        return this.get('tensao') as AbstractControl;
    }

    public get marca() {
        return this.get('marca') as AbstractControl;
    }

    public setData(data: ApplianceInterface): void {
        const { nome, descricao, tensao, marca } = data;
        this.nome.setValue(nome);
        this.descricao.setValue(descricao);
        this.marca.setValue(marca.toString());
        this.tensao.setValue(tensao.toString());
    }

    public getData(): ApplianceInterface {
        return {
            nome: this.nome.value,
            descricao: this.descricao.value,
            marca: parseInt(this.marca.value),
            tensao: parseInt(this.tensao.value) as TensaoInterface
        };
    }
}
