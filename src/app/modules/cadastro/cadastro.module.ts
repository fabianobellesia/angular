import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroService } from 'src/app/services/cadastro.service';
import { PageDataService } from 'src/app/services/page-data.service';






@NgModule({
  declarations: [CadastroComponent],
  exports: [CadastroComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, CadastroRoutingModule, SharedComponentsModule
  ],
  providers: [CadastroService, PageDataService]
})
export class CadastroModule { }
