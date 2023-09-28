import { Component, Injectable, InjectableDecorator, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

/*@Component({
  selector: "app-users",
})*/

export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get("http://localhost:1337/api/usuarios-pruebas").subscribe((data) => {
      console.log(data);
    });
  }
}
