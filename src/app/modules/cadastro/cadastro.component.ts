import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInputDTO } from 'src/app/models/user-input';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError} from "rxjs/operators";
import { CadastroService } from 'src/app/services/cadastro.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  mensagemErro = "";
  nome = new FormControl('',[Validators.required, Validators.minLength(2), Validators.pattern("[a-z A-Z]+")]);
  avatar = new FormControl('',[Validators.required],[this.validaImagem.bind(this)]);

  formCadastro = new FormGroup({ // /^\D*$/
    nome: this.nome,
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    senha: new FormControl('',Validators.required),
    avatar: this.avatar,
    telefone: new FormControl('',Validators.required)
  });


  constructor(private http: HttpClient, private router: Router, private servico: CadastroService, private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.atualizaTitulo('Cadastro');
  }

  validaImagem(campo: FormControl){
    console.log(campo.value);
    return this.http.head(campo.value,{observe: 'response'}).pipe(
     map((response : HttpResponseBase) => {
       if(response.status == 200){
         return null;
       } else{
         return {urlInvalida: true};
       }
     }),catchError((error: HttpErrorResponse) => {
       console.log(error);
       return [{urlInvalida: true}]
     })
    )
  }
  enviarCadastro() {
    if(this.formCadastro.invalid){
      this.formCadastro.markAllAsTouched();
      return;
    }
   // console.log(this.formCadastro.value);
    const dadosForm = this.formCadastro.value;

    const cadastroDTO = new UserInputDTO(dadosForm);

    console.log(cadastroDTO);

    this.servico.cadastrar(cadastroDTO).subscribe(
       (response) => {
         console.log(response);
        //this.formCadastro.reset();
         this.router.navigate(['login',cadastroDTO.username]);

       }, (erro: HttpErrorResponse) => {
         console.log(erro.message);
         this.mensagemErro = erro.message;
       }

     );


    // this.http.post("http://localhost:3200/users", cadastroDTO).subscribe(
    //   (response) => {
    //     console.log(response);
    //     //this.formCadastro.reset();
    //     this.router.navigate(['login',cadastroDTO.username]);

    //   }, (erro: HttpErrorResponse) => {
    //     console.log(erro.message);
    //     this.mensagemErro = erro.message;
    //   }

    // );


    // fetch('http://localhost:3200/users').then(data => data.json()).then(data => console.log(data));

  }

}
