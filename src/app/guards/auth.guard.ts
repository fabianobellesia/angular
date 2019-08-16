import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router, private servico: LoginService){}
    canActivate(){
        if(this.servico.usuarioLogado()){
            console.log('logado');
            return true;
        }else{
            console.log('não logado');
            this.router.navigate(['login']);
            return false;
        }
    }
}