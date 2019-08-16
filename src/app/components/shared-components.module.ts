import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { UrgenciaEmailPipe } from './cmail-list-item/urgencia-email.pipe';




@NgModule({
  declarations: [HeaderComponent, FormGroupComponent, FormFieldDirective, CmailListItemComponent, UrgenciaEmailPipe],
  exports: [HeaderComponent, CmailListItemComponent, FormGroupComponent, FormFieldDirective, CmailListItemComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedComponentsModule { }
