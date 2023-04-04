import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {of} from "rxjs";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
    private val:string | null =localStorage.getItem('@@auth0spajs@@::LIljVyn8UNv3x1gmpLjiysJtCvmFFf5c::@@user@@')

    constructor(
        public auth: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.auth.idTokenClaims$.subscribe({
            next: (value) => {
                // const raw = JSON.parse(window.atob(value?.__raw))
                // console.log(value?.__raw );
                if(this.val){
                    console.log(JSON.parse(this.val));
                }

            }

        })

        this.auth.error$.subscribe({
            next: (value) => {
                // console.log(typeof value)
            }

        })
    }
}
