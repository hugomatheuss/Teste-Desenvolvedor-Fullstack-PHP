export interface ApplianceInterface {
    id?: number;
    nome: string;
    descricao: string;
    tensao: TensaoInterface;
    marca: number;
}

export type TensaoInterface = 110 | 220;

export interface ApiResponse {
    data: ApplianceInterface;
}