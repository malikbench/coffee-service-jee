import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundExceptionComponent } from './components/not-found-exception/not-found-exception.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { CoffeeMachineComponent } from './components/coffee-machine/coffee-machine.component';
import { EditComponent } from './components/edit/edit.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailsComponent,
    AdminComponent,
    NotFoundExceptionComponent,
    UnauthorizedComponent,
    AddComponent,
    UpdateComponent,
    CoffeeMachineComponent,
    EditComponent,
    EditPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
