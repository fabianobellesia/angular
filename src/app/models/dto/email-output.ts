export class EmailOutputDTO {

    conteudo = '';
    dataDeEnvio = '';
    remetente = '';
    id = '';
    assunto = '';
    destinatario = '';

    constructor({content,created_at,from,id,subject,to}) {
        this.conteudo = content;
        this.dataDeEnvio = created_at;
        this.remetente = from;
        this.id = id;
        this.assunto = subject;
        this.destinatario = to;
    }

    get introducaoDoConteudo(){
        return this.conteudo.substr(0,140) + '...';
    }

  

}