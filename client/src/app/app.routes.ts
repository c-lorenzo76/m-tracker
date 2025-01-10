import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {authGuard} from "./auth/auth.guard";
import {JournalEntriesPageComponent} from "./pages/journal-entries-page/journal-entries-page.component";
import {NewJournalEntryPageComponent} from "./pages/new-journal-entry-page/new-journal-entry-page.component";


export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [authGuard]},
  {path: 'journal-entries', component: JournalEntriesPageComponent, canActivate: [authGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [authGuard]},
  {path: 'settings', component: SettingsPageComponent, canActivate: [authGuard]},
  {path: 'new-journal', component: NewJournalEntryPageComponent, canActivate: [authGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
