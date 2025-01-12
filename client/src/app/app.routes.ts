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
import {LayoutComponent} from "./pages/layout/layout.component";
import {MoodHistoryComponent} from "./pages/mood-history/mood-history.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";


export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},

  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'journal-entries', component: JournalEntriesPageComponent},
      {path: 'new-journal', component: NewJournalEntryPageComponent},
      {path: 'mood-history', component: MoodHistoryComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'settings', component: SettingsPageComponent},
      { path: '**', component: NotFoundComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
