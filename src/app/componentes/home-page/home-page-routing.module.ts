import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page.component'
import { AuthGuard } from '../auth-guard/auth-guard.module'

const routes: Routes = [
    {path : '', component: HomePageComponent, canActivate: [AuthGuard]}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class HomePageRoutingModule{}