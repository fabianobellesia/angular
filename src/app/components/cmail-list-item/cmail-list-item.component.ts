import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmail-cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls:  ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {


  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Input() id = '';
  @Output() clicouNaLixeira = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletar(){
    console.log(this.id);
    this.clicouNaLixeira.emit(this.id);
  }

}
