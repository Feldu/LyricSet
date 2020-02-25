import { CropperModule } from './modules/cropper/cropper.module';
import { ServerErrorModule } from './modules/server-error/server-error.module';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { LibraryModule } from './modules/library/library.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { SettingsModule } from './modules/settings/settings.module';
import { PasswordDialogComponent } from './modules/settings/components/password-dialog/password-dialog.component';
import { AddSetDialogComponent } from './modules/library/components/add-set-dialog/add-set-dialog.component';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
import { ToastrModule } from 'ngx-toastr';
import { CropperComponent } from './modules/cropper/cropper.component';
import { UsernameDialogComponent } from './modules/settings/components/username-dialog/username-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularMaterialModule,
    LibraryModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    LoginModule,
    SettingsModule,
    PageNotFoundModule,
    HttpClientModule,
    ServerErrorModule,
    ToastrModule.forRoot(),
    CropperModule
  ],
  entryComponents: [
    PasswordDialogComponent,
    AddSetDialogComponent,
    CropperComponent,
    UsernameDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function baseUrl(): string {
  return window.location.origin;
}
