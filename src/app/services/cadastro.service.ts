import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInputDTO } from '../models/user-input';

@Injectable()
export class CadastroService {
    readonly url = environment.api + 'users';
    constructor(private http: HttpClient){} 
    
    cadastrar(dados: UserInputDTO){
        return this.http.post(this.url, dados);
    }

}