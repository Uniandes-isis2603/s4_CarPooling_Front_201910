import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component'
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { ListarAlquilerComponent } from '../alquiler/listar-alquiler/listar-alquiler.component';
import { HomeComponent} from '../home/home/home.component';
import { AdminComponent } from '../admin/admin.component';
const routes: Routes = [

     {
         // Path de login y sign up
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    // Path de los otros modulos
    {
        path: 'usuario',
        children: [         
            {path: 'create',
            component:  UsuarioCreateComponent},
            {path: 'detail',
            component:  UsuarioDetailComponent}
        ]
    },
        {path: 'alquiler',
        component: ListarAlquilerComponent},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
