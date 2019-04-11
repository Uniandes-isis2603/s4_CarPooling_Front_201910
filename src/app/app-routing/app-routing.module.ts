import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component'
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { UsuarioEditComponent} from '../usuario/usuario-edit/usuario-edit.component'
import { UsuarioListaComponent} from '../usuario/usuario-lista/usuario-lista.component'
import { UsuarioInfoComponent} from '../usuario/usuario-info/usuario-info.component'

import { PagoCreateComponent} from '../pago/pago-create/pago-create.component'
import { InfoComponent } from '../pago/info/info.component';
import { PagoEditComponent} from '../pago/pago-edit/pago-edit.component'
import { PagoListComponent} from '../pago/pago-list/pago-list.component'
import { ListarAlquilerComponent } from '../alquiler/listar-alquiler/listar-alquiler.component';
import { MenuComponent} from '../usuario/menu/menu.component';
import { HomeComponent} from '../home/home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../home/login/login.component';

import { TrayectoCrearComponent} from '../trayecto/trayecto-crear/trayecto-crear.component';
import { TrayectoDetailComponent } from '../trayecto/trayecto-detail/trayecto-detail.component';
import { TrayectoEditComponent} from '../trayecto/trayecto-edit/trayecto-edit.component';
import { ListarTrayectoComponent} from '../trayecto/listar-trayecto/listar-trayecto.component';
import { ListarInfoTrayectoComponent} from '../info-trayecto/listar-info-trayecto/listar-info-trayecto.component';
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
        path: 'pago',
        children: [         
            {path: 'create',
            component:  PagoCreateComponent},
            {path: 'info',
            component:  InfoComponent},
            {path: 'edit',
            component:  PagoEditComponent},
            {
                path: 'list',
                component:  PagoListComponent            }
        
        ]
    },
    {
        path: 'usuario',
        children: [         
            {
                path: 'create',
                component:  UsuarioCreateComponent
            },
            {
                path: 'detail',
                component:  UsuarioDetailComponent
            },
            {
                path: 'menu',
                component:  MenuComponent,
                children :
                [   
                    {  
                        path: 'info',
                        component: UsuarioInfoComponent,
                        outlet: 'content'
                    },
                    {
                        path: 'edit',
                        component:  UsuarioEditComponent,
                        outlet: 'content'}
                ]
            },
            {
                path: 'lista',
                component:  UsuarioListaComponent,
            }

        
        ]
    },
        {path: 'alquiler',
        component: ListarAlquilerComponent},
        
        {path: 'login',
        component: LoginComponent},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'trayecto',
        children: [         
            {path: 'create',
            component:  TrayectoCrearComponent},
            
            {path: 'edit',
            component:  TrayectoEditComponent},
            {path: 'list',
                component:  ListarTrayectoComponent            
            }
        
        ]
    },
    {
        path: 'infoTrayecto',
        children: [         
            {path: 'list',
                component:  ListarInfoTrayectoComponent            
            }
        
        ]
    },
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
