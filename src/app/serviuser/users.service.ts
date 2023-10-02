import { Component, Injectable, InjectableDecorator, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

/*@Component({
  selector: "app-users",
})*/

export class UsersService {



  constructor(private http: HttpClient) {}

  getUsers(email: string, passwor: string): Observable<any> {
    const url = 'http://avapp.digital:88/AVA/public/api/login';
    const headers = new HttpHeaders({
      Accept: '*/*',
      Authorization: 'Bearer nqhh6FQ2fdoONhmV2kyLHzWqrWYuQsqiQFVBJQ8Jat23cgkgqkHayeXALy5F',
      'Content-Type': 'application/json'
    });

    const requestData = { correo: email, password: passwor};

    return this.http.post(url, requestData, { headers });
  }
  // private apiUrl = 'http://avapp.digital:88/AVA/public/api/login';
  // constructor(private http: HttpClient) {
  // this.http.get('http://avapp.digital:88/AVA/public/api/login');
  // }
  
  // login(user: any): Observable<any> {
  //   return this.http.post("http://avapp.digital:88/AVA/public/api/login", user);
  // }

  // getUsers(email: string,password: string) {
  //   console.log('')
    
  //   this.http.get("http://avapp.digital:88/AVA/public/api/login",{}).subscribe((data) => {
  //     console.log( "Prueba en el servicio");
  //   });
  // }
}
