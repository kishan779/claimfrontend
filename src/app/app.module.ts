import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateClaimComponent,
    UpdateClaimComponent,
    ClaimDetailsComponent,
    ClaimListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }









