import { Component, ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './loguin/loguin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { GestiontestigosComponent } from './gestiontestigos/gestiontestigos.component';
import { ConsultarpuestoComponent } from './consultarpuesto/consultarpuesto.component';

const routes: Routes = [
  { path: "", component: LoguinComponent, pathMatch: "full" },
  { path: "loguin", component: LoguinComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: 'full'},
  { path: "gestiontestigos", component: GestiontestigosComponent, pathMatch: 'full' },
  { path: "consultarpuestos", component: ConsultarpuestoComponent, pathMatch: 'full' }, 
  { path: "main", component: AppComponent, pathMatch: 'full'},
  { path: "**", component: Page404Component, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
