import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(
        public auth: AuthService,
        private router: Router
    ) {}

    logout() {
        this.auth.logout().subscribe({
            next: (value) => {
                console.log(value);
            }
        })
    }
}
