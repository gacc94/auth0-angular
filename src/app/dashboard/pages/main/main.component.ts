import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
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

    ngOnInit(){
        this.auth.isAuthenticated$.subscribe({
            next: (value) => {
                if(!value){
                    this.router.navigate(['/auth']).then();
                }
            },
            error: err => {
            }
        })
    }
}
