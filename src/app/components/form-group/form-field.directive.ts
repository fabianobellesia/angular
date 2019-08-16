import { ElementRef, Directive } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})
export class FormFieldDirective {
    constructor(elemento: ElementRef){
        const campo : HTMLInputElement = elemento.nativeElement;
        campo.classList.add('mdl-textfield__input');
        campo.placeholder = " ";
        if(campo.name.trim().length>0){
            campo.id = campo.name;
        }else{
            throw new Error("O atributo name do campo deve ser definido!");
        }

        
    }
}