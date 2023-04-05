import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from "@auth0/auth0-angular";
import {AuthMainService} from "../service/auth-main.service";

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

    nickname!: string;

    constructor(
        private auth: AuthService,
        private authMain: AuthMainService,
        private router: Router,
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean > | boolean {

        this.authMain.getNickname().subscribe({
            next: value => {
                if(value){
                    this.nickname = value;
                }
            }
        })

        return (this.nickname === 'gustavocaqui94');

    }

}
