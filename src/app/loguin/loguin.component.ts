import { Component, OnInit, Injectable } from '@angular/core';
import { UsersService } from '../serviuser/users.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss'],
  template: '<button (click)="login()">Login</button>'
})
export class LoguinComponent implements OnInit, FormsModule{
  showMenu: boolean = false;
  email: String = '';
  passwor: string = '';

  constructor(private router: Router, public service: UsersService) { }
  ngOnInit() {}

  redirigir() {
    this.router.navigate(['home']);
  }

  // private isJSONResponse(response: any): boolean {
  //   try {
  //     const parsedResponse = JSON.parse(response);
  //     return typeof parsedResponse === 'object';
  //   } catch (error) {
  //     return false;
  //   }
  // }

  //Credenciales prueba: Email: john_ene@hotmail.com Password: 1113526224

  login(email: string, passwor: string) {

    this.service.getUsers(email, passwor).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
         this.redirigir();
        } 
        else {
          console.error('Credenciales Incorrectas');
        }
        console.log(response);
      },
      (error: any) => {
        console.error(error, 'No hay respuesta del servidor');
      }
    );
}
}
