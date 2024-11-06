import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: 'claims', component: ClaimListComponent},
  {path: 'create-claim', component:CreateClaimComponent},
  {path: '', redirectTo: 'claims', pathMatch:'full'},
  {path: 'update-claim/:id', component:UpdateClaimComponent},
  {path: 'claim-details/:id', component: ClaimDetailsComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
