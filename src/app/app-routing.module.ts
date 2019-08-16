import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';


const rotasApp : Routes = [
    {path: '', loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule), pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'cadastro', loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)},
    {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
    {path: 'login/:username', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
    {path: '**', redirectTo: ''} 
];

@NgModule({
    imports: [RouterModule.forRoot(rotasApp), HttpClientModule], 
    exports: [RouterModule],
    providers: [AuthGuard, LoginService]
})
export class AppRoutingModule{}
// export const ModuloRoteamento = RouterModule.forRoot(rotasApp);