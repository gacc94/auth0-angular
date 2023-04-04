import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    login(){
        this.auth.loginWithRedirect()
    }

    ngOnInit(){
        this.auth.isAuthenticated$.subscribe({
            next: (value) => {
                if(value){
                    this.router.navigate(['/dashboard']).then();
                }
            },
            error: err => {
            }
        })
    }
}
