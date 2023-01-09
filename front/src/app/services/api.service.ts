import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { throwErrorAPI } from '../core/utils/genereals.utils';
import { HttpOptionsInterface, RequestMethodType } from '../core/interfaces/http.interface';
import { ApiResponse, ApplianceInterface } from '../core/interfaces/appliance.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _url: string;
    private _options: HttpOptionsInterface;

    constructor(protected http: HttpClient) {
        this._url = 'http://localhost:8000/api';
        this._options = {
            responseType: 'json',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    public getAllAppliances(): Observable<{ data:Array<ApplianceInterface> }> {
        return this.sendRequest(this.getUrl('eletrodomesticos'), 'get');
    }

    public getAppliance(id: number): Observable<ApiResponse> {
        return this.sendRequest(this.getUrl(`eletrodomesticos/${id}`), 'get');
    }

    public saveNewAppliance(data: ApplianceInterface): Observable<ApiResponse> {
        return this.sendRequest(this.getUrl('eletrodomesticos'), 'post', null, data);
    }

    public updateAppliance(data: ApplianceInterface, id: number): Observable<{updated: boolean;}> {
        return this.sendRequest(this.getUrl(`eletrodomesticos/${id}`), 'put', null, data);
    }

    public deleteAppliance(id: number): Observable<string> {
        return this.sendRequest(this.getUrl(`eletrodomesticos/${id}`), 'delete');
    }

    private sendRequest(url: string, type: RequestMethodType, params?: Record<string, string> | null, body?: any) {
        this._options['params'] = params ?? undefined;
        this._options['body'] = body ?? undefined;
        this._options['observe'] = 'body';

        return this.http.request(type, url, this._options).pipe(
            take(1),
            catchError((error: HttpErrorResponse) => {
                this.showMessageError(error.status !== 0 ? error.error : 'Erro ao conectar na API!');
                return throwErrorAPI();
            })
        );
    }

    private showMessageError(msg: string) {
        const msgError = msg ?? 'Ocorreu um erro na requisição';

        Swal.fire('Atenção!', msgError, 'error');
    }

    private getUrl(path: string): string {
        return `${this._url}/${path}`;
    }
}
