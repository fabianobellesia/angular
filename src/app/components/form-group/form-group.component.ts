import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {


  @Input() label = "";
  @Input() idCampo = "";
  @Input() validacao = false;
  constructor(private elemento: ElementRef) { }

  ngOnInit() {
//    const campo = this.elemento.nativeElement.querySelector('input');
//    this.label = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
//    this.idCampo = campo.name;
  }

}
