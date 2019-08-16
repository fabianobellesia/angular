import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Injectable()
export class LoginService {
  readonly url = environment.api + 'login';
  constructor(private http: HttpClient) { }
  // autenticar(login: LoginInputDTO): Observable<LoginOutputDTO>{
  //    return this.http.post<LoginOutputDTO>(this.url, login);
  // }
  autenticar(login: LoginInputDTO): Observable<{}> {
    return this.http.post<LoginOutputDTO>(this.url, login).pipe(
      map(
        response => {
          localStorage.setItem('TOKEN', response.token);
          return {};
        })
    )

  }


  usuarioLogado() {
    if (localStorage.getItem('TOKEN')){
      return true;
    } return false;
  }

  validaToken(campo: FormControl) {
    console.log(campo.value);
    return this.http.head(campo.value, { observe: 'response' }).pipe(
      map((response: HttpResponseBase) => {
        if (response.status == 200) {
          return null;
        } else {
          return { urlInvalida: true };
        }
      }), catchError((error: HttpErrorResponse) => {
        console.log(error);
        return [{ urlInvalida: true }]
      })
    )
  }

}