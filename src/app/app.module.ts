import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutGridsComponent } from './about-grids/about-grids.component';
import { GridPropertiesComponent } from './grid-properties/grid-properties.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GridLayoutComponent,
    AboutGridsComponent,
    GridPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
