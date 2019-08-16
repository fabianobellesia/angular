export class Email {
    destinatario: string;
    assunto: string;
    conteudo: string;
    dataDeEnvio: string;

    constructor({destinatario, assunto, conteudo, dataDeEnvio}){
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataDeEnvio = dataDeEnvio
    }

 

}
