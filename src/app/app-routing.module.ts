import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";
// import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule)

    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
