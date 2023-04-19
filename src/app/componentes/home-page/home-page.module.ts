import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { JobsModule } from "../layout/jobs/jobs.module";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        NavBarModule,
        HomePageRoutingModule,
        MatInputModule,
        JobsModule,
        MatPaginatorModule,
    ]
})
export class HomePageModule { }
