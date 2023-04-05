import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {of} from "rxjs";
import {AuthMainService} from "../../../service/auth-main.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

    constructor(
        public auth: AuthService,
        private router: Router,
        private authMain: AuthMainService
    ) {}

    ngOnInit() {
        this.auth.idTokenClaims$.subscribe({
            next: (value) => {
                console.log(value)
            }
        })

        console.log(this.authMain.getToken());
        this.authMain.getNickname()
           .subscribe({
                next: (value) => {
                    console.log(value)
                }
            });
    }
}
