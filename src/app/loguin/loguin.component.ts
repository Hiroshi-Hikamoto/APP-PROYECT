import { Component } from '@angular/core';
import { UsersService } from '../serviuser/users.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent {
  email!: String;
  password!: string;
  

  constructor(private service: UsersService) { }

  loguin() {
    console.log(this.email);
    console.log(this.password);
  }
  
}
