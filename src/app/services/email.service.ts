import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailInputDTO } from '../models/dto/email-input';
import { map } from 'rxjs/operators';
import { EmailOutputDTO } from '../models/dto/email-output';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

    readonly url = environment.api + 'emails';
    readonly headers = { 
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') })
    }

    constructor(private http: HttpClient) { }


    enviar(email) {
        const emailDTO = new EmailInputDTO(email);
        return this.http.post(this.url, emailDTO, this.headers);
    }

    deletar(idEmail){
        return this.http.delete(this.url + '/' + idEmail,this.headers); 
    }

    listar(): Observable<EmailOutputDTO[]> {
        return this.http
            .get<EmailInputDTO[]>(this.url, this.headers)
             .pipe(
                 map(listaEmailsApi => {
                     return listaEmailsApi.map(emailIngles => new EmailOutputDTO(emailIngles))
                 })
             )
    }

    listarEmails() {
        return this.http
            .get(this.url, this.headers);
    }



}