import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEnum } from './core/enums/router.enum';

const routes: Routes = [
    {
        path: RouterEnum.INICIO.replace('/', ''),
        loadChildren: () => import('./features/pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: RouterEnum.LISTA.replace('/', ''),
        loadChildren: () => import('./features/pages/list/list.module').then((m) => m.ListModule)
    },
    {
        path: RouterEnum.CADASTRAR.replace('/', ''),
        loadChildren: () => import('./features/pages/register/register.module').then((m) => m.RegisterModule)
    },
    {
        path: RouterEnum.ATUALIZAR.replace('/', ''),
        loadChildren: () => import('./features/pages/register/register.module').then((m) => m.RegisterModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
