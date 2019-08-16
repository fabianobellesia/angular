import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({ // /^\D*$/
    email: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',Validators.required)
  });

  
  mensagemErro = "";
  
  constructor(private router: Router, private servico: LoginService, private rota: ActivatedRoute) { }

  ngOnInit() {
    /* this.rota.params.subscribe( parametros => console.log(parametros))
       this.rota.queryParams.subscribe( parametros => console.log(parametros)) */
       const parametros = this.rota.snapshot.params;
       if(this.servico.usuarioLogado) this.router.navigate(['']);
       if(parametros.username){
         this.formLogin.get('email').setValue(`${parametros.username}@cmail.com.br`);
       }

  }

  handleLogin(){
    if(this.formLogin.valid){
      const dadosForm = this.formLogin.value;
      console.log(dadosForm);

      const loginInputDTO: LoginInputDTO = {email: this.formLogin.get('email').value, password: this.formLogin.get('password').value};


      this.servico.autenticar(loginInputDTO).subscribe(() => this.router.navigate(['']),
      (error: HttpErrorResponse) => {
        if(error.status == 400){
          this.mensagemErro = "Usuário ou Senha inválidos";
        }else{
          this.mensagemErro = error.message;
        }
        console.log(error.status);
        error.status
        console.log('not ok');
      })
 

      // this.servico.autenticar(loginInputDTO).subscribe(
      //   (response: any) => {
      //     console.log(response);
      //     localStorage.setItem('TOKEN', response.token);
      //     console.log('ok');
      //     this.router.navigate(['']);
      //   },
      //   (error : HttpErrorResponse) => {
      //     if(error.status == 400){
      //       this.mensagemErro = "Usuário ou Senha inválidos";
      //     }else{
      //       this.mensagemErro = error.message;
      //     }
      //     console.log(error.status);
      //     error.status
      //     console.log('not ok');
      //   }
      // )
    }
  }

}
