import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
       private auth: AuthService,
       private router: Router,
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean > | boolean {

        return this.auth.isAuthenticated$
            .pipe(
                tap((loggedIn) => {
                    if(loggedIn){
                        return ;
                    } else {
                        this.router.navigate(['/auth']).then();
                    }
                })
            )

    }

}
