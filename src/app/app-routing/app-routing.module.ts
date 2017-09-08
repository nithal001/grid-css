import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';
import { AboutGridsComponent } from '../about-grids/about-grids.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutGridsComponent,
    },
    {
        path: '',
        component: GridLayoutComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
