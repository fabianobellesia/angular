import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'urgencia'
})
export class UrgenciaEmailPipe implements PipeTransform {
    transform(destinatario) {
        if (destinatario.includes('chefe')) {
            return `[URGENTE] ${destinatario}`;
        } else {
            return destinatario;
        }
    }

}