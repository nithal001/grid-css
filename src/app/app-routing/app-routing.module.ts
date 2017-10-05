import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';
import { AboutGridsComponent } from '../about-grids/about-grids.component';
import { GridPropertiesComponent } from '../grid-properties/grid-properties.component';
import { FlexGridComponent } from '../flex-grid/flex-grid.component';
import { BasicTerminologyComponent } from '../basic-terminology/basic-terminology.component';
import { GridChildPropertiesComponent } from '../grid-child-properties/grid-child-properties.component';

const routes: Routes = [
    {
        path: 'grid-child-properties',
        component: GridChildPropertiesComponent,
    },
    {
        path: 'basic',
        component: BasicTerminologyComponent,
    },
    {
        path: 'flex-grid',
        component: FlexGridComponent,
    },
    {
        path: 'grid-properties',
        component: GridPropertiesComponent,
    },
    {
        path: '',
        component: AboutGridsComponent,
    },
    // {
    //     path: '',
    //     component: GridLayoutComponent,
    // },
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
