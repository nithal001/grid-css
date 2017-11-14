import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalChildGridComponent } from '../modal-child-grid/modal-child-grid.component';
import { ModalChildGridJustifyComponent } from '../modal-child-grid-justify/modal-child-grid-justify.component';
import { ModalGridChildAlignComponent } from '../modal-grid-child-align/modal-grid-child-align.component';

@Component({
  selector: 'app-grid-child-properties',
  templateUrl: './grid-child-properties.component.html',
  styleUrls: ['./grid-child-properties.component.css']
})
export class GridChildPropertiesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  exampleTemplateGrid() {
       const modalRef = this.modalService.open(ModalChildGridComponent);
  }

  exampleTemplateJustify() {
      const modalRef = this.modalService.open(ModalChildGridJustifyComponent);
  }

  exampleTemplateAlign() {
      const modalRef = this.modalService.open(ModalGridChildAlignComponent);
  }

}
