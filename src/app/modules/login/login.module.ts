import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { LoginService } from 'src/app/services/login.service';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule, ReactiveFormsModule, HttpClientModule, SharedComponentsModule
  ],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
