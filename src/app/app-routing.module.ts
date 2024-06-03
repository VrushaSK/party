import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyFormComponent } from './party-form/party-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'parties', component: PartyListComponent },
  { path: 'parties/new', component: PartyFormComponent },
  { path: 'parties/edit/:id', component: PartyFormComponent },
  { path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
