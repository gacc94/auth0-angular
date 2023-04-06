import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {ProductsComponent} from "./pages/products/products.component";
import {AuthGuard} from "@auth0/auth0-angular";
import {PermissionGuard} from "../core/guard/permission.guard";
import {UserComponent} from "./pages/user/user.component";

const routes: Routes = [
    {
        path: '',
        title: 'main',
        component: MainComponent,
        children: [
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [PermissionGuard]

            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'users',
                component: UserComponent
            },
        ]

    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: "full"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
