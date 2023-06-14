import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MinhasVagasComponent } from './minhas-vagas.component'
const routes: Routes = [
    {path : '', component: MinhasVagasComponent}
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