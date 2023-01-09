import { Observable, throwError } from 'rxjs';

export function throwErrorAPI(): Observable<never> {
    return throwError(new Error('Erro da API'));
}
