import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmailOutputDTO } from 'src/app/models/dto/email-output';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`ul, li { margin: 0; padding:0; list-style-type: none;}`]
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private servico: EmailService, private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.atualizaTitulo('Caixa De Entrada');
     this.servico.listar().subscribe(
      (resposta: EmailOutputDTO[]) => {
        console.log(resposta);
        //resposta = resposta.sort((a,b)=>b.dataDeEnvio.localeCompare(a.dataDeEnvio));
        resposta = resposta.reverse();
         this.listaEmails = resposta;
        // this.listaEmails = this.listaEmails.sort((a,b)=>b.created_at.localeCompare(a.created_at));
       }
     )

  }
  textoDigitadoDoFiltro = '';
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  private _isEmailFormOpen = false;

  mensagemErro = "";

  listaEmails: EmailOutputDTO[] = [];

  get isEmailFormOpen() {
    return this._isEmailFormOpen;
  }


  openEmailForm() {
    this._isEmailFormOpen = !this.isEmailFormOpen;
  }

  enviarEmail(formEmail: NgForm) {
    // eventoSubmit: Event
    // eventoSubmit.preventDefault();

    if (formEmail.invalid) {
      // formEmail.controls['para'].markAsTouched();
      // formEmail.controls['assunto'].markAsTouched();


      formEmail.control.markAllAsTouched();

      // alert('Preencha todos os campos!');
      return;
    }

    const novoEmail = {
      destinatario: this.email.destinatario,
      assunto: this.email.assunto,
      conteudo: this.email.conteudo
    }


    return this.servico.enviar(novoEmail).subscribe(
      (response) => {
        console.log(response);
        // this.listaEmails.push(novoEmail);
        this.ngOnInit();
        console.log(novoEmail);

        this.email = {
          destinatario: '',
          assunto: '',
          conteudo: ''
        }
        formEmail.reset;
        //this.formCadastro.reset();
        //this.router.navigate(['login',cadastroDTO.username]);

      }, (erro: HttpErrorResponse) => {
        console.log(erro.message);
        this.mensagemErro = erro.message;
      }

    );

  
  }

  listaFiltrada(){  
    return this.listaEmails.filter( 
      (email) => {
        if(email.assunto.toLowerCase().includes(this.textoDigitadoDoFiltro.toLocaleLowerCase())
            || email.conteudo.toLocaleLowerCase().includes(this.textoDigitadoDoFiltro.toLocaleLowerCase())
            || email.destinatario.toLocaleLowerCase().includes(this.textoDigitadoDoFiltro.toLocaleLowerCase())
            || email.remetente.toLocaleLowerCase().includes(this.textoDigitadoDoFiltro.toLocaleLowerCase())
           ){
          return true;
        }
      }
      )
  }

  // listarEmails(){
  //   return this.servico.listarEmails().subscribe(
  //     (response: any[]) => {
  //       console.log(response);
  //       let novoArray = [];
  //       for(let emailIngles of response){
  //         novoArray.push({
  //           destinatario: emailIngles.to, assunto: emailIngles.subject, conteudo: emailIngles.content
  //         })
  //       }
  //       this.listaEmails=novoArray;
  //     }
  //   )
  // }

  // listar() {


  //   return this.servico.listar().subscribe(
  //     (response) => {
  //       console.log(response);
  //     }

  //     , (erro: HttpErrorResponse) => {
  //       console.log(erro.message);
  //       this.mensagemErro = erro.message;
  //     }

  //   );
  //}

  apagar(id){
    return this.servico.deletar(id).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    }, (erro: HttpErrorResponse) => {
      console.log(erro.message);
      // this.mensagemErro = erro.message;
    }

  );
  }

}
