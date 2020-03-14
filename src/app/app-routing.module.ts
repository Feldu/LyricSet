import { AuthGuard } from './core/guards/auth.guard';
import { ServerErrorComponent } from './modules/server-error/server-error.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibraryComponent} from './modules/library/library.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {TrackListComponent} from './modules/library/components/track-list/track-list.component';
import {SongComponent} from './shared/components/song/song.component';
import {LoginComponent} from './modules/login/login.component';
import {RegisterComponent} from './modules/register/register.component';
import {SettingsComponent} from './modules/settings/settings.component';
import {ProfileComponent} from './modules/settings/components/profile/profile.component';
import {AccountComponent} from './modules/settings/components/account/account.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'library', canActivate: [AuthGuard], component: LibraryComponent, children: [
      {path: ':setid', component: TrackListComponent},
      {path: ':setid/:songid', component: SongComponent}
    ]
  },
  {path: 'song/:songid', component: SongComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'settings', canActivate: [AuthGuard], component: SettingsComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'account', component: AccountComponent}
    ]
  },
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
