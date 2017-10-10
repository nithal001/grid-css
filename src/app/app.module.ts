import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutGridsComponent } from './about-grids/about-grids.component';
import { GridPropertiesComponent } from './grid-properties/grid-properties.component';
import { FlexGridComponent } from './flex-grid/flex-grid.component';
import { BasicTerminologyComponent } from './basic-terminology/basic-terminology.component';
import { ModalTemplateAreaComponent } from './modal-template-area/modal-template-area.component';
import { ModalTemplateJustifyComponent } from './modal-template-justify/modal-template-justify.component';
import { ModalTemplateAlignComponent } from './modal-template-align/modal-template-align.component';
import { ModalJustifyContentComponent } from './modal-justify-content/modal-justify-content.component';
import { ModalAlignContentComponent } from './modal-align-content/modal-align-content.component';
import { GridChildPropertiesComponent } from './grid-child-properties/grid-child-properties.component';

import { CommonService } from './common.service';
import { ModalChildGridComponent } from './modal-child-grid/modal-child-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GridLayoutComponent,
    AboutGridsComponent,
    GridPropertiesComponent,
    FlexGridComponent,
    BasicTerminologyComponent,
    ModalTemplateAreaComponent,
    ModalTemplateJustifyComponent,
    ModalTemplateAlignComponent,
    ModalJustifyContentComponent,
    ModalAlignContentComponent,
    GridChildPropertiesComponent,
    ModalChildGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [CommonService],
  entryComponents: [ModalTemplateAreaComponent, ModalTemplateJustifyComponent, ModalTemplateAlignComponent,
  ModalJustifyContentComponent, ModalAlignContentComponent, ModalChildGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
