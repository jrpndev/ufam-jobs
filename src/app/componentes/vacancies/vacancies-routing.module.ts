import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VacanciesComponent } from './vacancies.component'
import { AuthGuard } from '../auth-guard/auth-guard.module'
const routes: Routes = [
    {path : '', component: VacanciesComponent, canActivate: [AuthGuard]}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class MinhasVagasRoutingModule{}