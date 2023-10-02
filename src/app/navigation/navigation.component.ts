import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() showMenu: boolean = true;

  constructor(private router: Router) {}

  redirigirConsulta() {
    this.router.navigate(['consultarpuestos']);
  }

  redirigirHome() {
    this.router.navigate(['home']);
  }

  redirigirGestion() {
    this.router.navigate(['gestiontestigos']);
  }
}
