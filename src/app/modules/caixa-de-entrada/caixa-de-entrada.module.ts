import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page-data.service';



@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule, FormsModule, CaixaDeEntradaRoutingModule, SharedComponentsModule, HttpClientModule
  ],
  exports: [CaixaDeEntradaComponent],
  providers: [EmailService, PageDataService]
})
export class CaixaDeEntradaModule { }
