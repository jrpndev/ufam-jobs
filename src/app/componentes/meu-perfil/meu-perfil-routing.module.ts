import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MeuPerfilComponent } from './meu-perfil.component'
import { AuthGuard } from '../auth-guard/auth-guard.module'

const routes: Routes = [
    {path : '', component: MeuPerfilComponent, canActivate: [AuthGuard]}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class MeuPerfilRoutingModule{}