import { NgModule, Injectable, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from "./serviuser/users.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { LoguinComponent } from './loguin/loguin.component';
import { Page404Component } from './page404/page404.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GestiontestigosComponent } from './gestiontestigos/gestiontestigos.component';
import { ConsultarpuestoComponent } from './consultarpuesto/consultarpuesto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoguinComponent,
    Page404Component,
    NavigationComponent,
    GestiontestigosComponent,
    ConsultarpuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
