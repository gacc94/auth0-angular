import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {SpinnerService} from "@service/spinner.service";
import {AuthMainService} from "@service/auth-main.service";
import {apisRoutes } from "@env/environment.dev";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    api = apisRoutes.reqres;
    constructor(
        private authMain: AuthMainService,
        private readonly spinnerSvc: SpinnerService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.authMain.getToken();
        this.spinnerSvc.show();

        if(token){
            const authReq = request.clone({
                // url: `${this.api}/users`,

                setHeaders:{
                    Authorization: `Bearer: ${token}`
                } ,
                // setParams: {
                //     page: '1',
                //     per_page :'10'
                // }
                // headers: request.headers.set('Authorization', `Bearer ${token}`)
            })

            return next.handle(authReq).pipe(finalize(()=> this.spinnerSvc.hide()));
        }

        return next.handle(request).pipe(
            catchError((err) => {
                console.log("Erro", err)
                return throwError('Error Extra');
            }),
            finalize(()=> this.spinnerSvc.hide())
        );
    }
}
