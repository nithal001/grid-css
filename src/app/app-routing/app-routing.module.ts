import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AboutGridsComponent } from '../about-grids/about-grids.component';
import { GridPropertiesComponent } from '../grid-properties/grid-properties.component';
import { FlexGridComponent } from '../flex-grid/flex-grid.component';
import { BasicTerminologyComponent } from '../basic-terminology/basic-terminology.component';
import { GridChildPropertiesComponent } from '../grid-child-properties/grid-child-properties.component';
import { GridSupportComponent } from '../grid-support/grid-support.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';

const routes: Routes = [
    {
        path: 'thank-you',
        component: ThankYouComponent,
    },
    {
        path: 'grid-support',
        component: GridSupportComponent,
    },
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
