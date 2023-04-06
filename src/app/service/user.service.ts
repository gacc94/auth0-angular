import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser, IUserPage} from "../core/interface/user.interface";
import { apisRoutes } from "@env/environment.dev";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _urlApi = apisRoutes.reqres;

    constructor(
        private http: HttpClient
    ) { }

    public getUsers():Observable<IUserPage>{
        let params= new HttpParams()
            .set('page',1)
            .set('per_page',10)

        return this.http.get<IUserPage>(`${this._urlApi}/users`,{params})
    }

}
