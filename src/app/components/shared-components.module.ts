import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';




@NgModule({
  declarations: [HeaderComponent, FormGroupComponent, FormFieldDirective, CmailListItemComponent],
  exports: [HeaderComponent, CmailListItemComponent, FormGroupComponent, FormFieldDirective, CmailListItemComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedComponentsModule { }
