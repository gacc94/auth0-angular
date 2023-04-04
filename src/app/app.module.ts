import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
