import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material';
import { AccountComponent } from './components/account/account.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';




@NgModule({
  declarations: [SettingsComponent, ProfileComponent, AccountComponent, PasswordDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    MatExpansionModule
  ]
})
export class SettingsModule { }
