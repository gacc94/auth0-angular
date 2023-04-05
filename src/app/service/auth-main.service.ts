import { Injectable } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {map, mergeMap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthMainService {

    private key = `@@auth0spajs@@::LIljVyn8UNv3x1gmpLjiysJtCvmFFf5c::@@user@@`;

    constructor(
        private auth: AuthService
    ) { }

    public getNickname(){
        return this.auth.user$
            // .pipe(
            //     mergeMap((value)=> [value?.nickname])
            // )
            .pipe(
                map((value)=> value?.nickname)
            )
    }

    public getToken(){
        let value= localStorage.getItem(this.key);
        if(value) return JSON.parse(value).id_token;
    }

}
