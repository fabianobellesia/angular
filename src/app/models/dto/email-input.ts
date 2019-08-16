export class EmailInputDTO {
    
    to = '';
    subject = '';
    content = '';
    from = '';
    id = '';
    created_at = '';

    constructor({destinatario, assunto, conteudo}){
        this.to = destinatario;
        this.subject = assunto;
        this.content = conteudo;
    }
}