import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
