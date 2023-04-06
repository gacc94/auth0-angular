import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SpinnerInterceptor} from "./core/interceptor/spinner.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AuthModule.forRoot({
            domain: 'dev-yizzp4hi8iykykc1.us.auth0.com',
            clientId: 'LIljVyn8UNv3x1gmpLjiysJtCvmFFf5c',
            authorizationParams: {
                redirect_uri: window.location.origin
            },
            cacheLocation: "localstorage",
            // useRefreshTokens: true,
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
