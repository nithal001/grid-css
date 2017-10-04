import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateAreaComponent } from '../modal-template-area/modal-template-area.component';
import { ModalTemplateJustifyComponent } from '../modal-template-justify/modal-template-justify.component';
import { ModalTemplateAlignComponent } from '../modal-template-align/modal-template-align.component';

@Component({
  selector: 'app-grid-properties',
  templateUrl: './grid-properties.component.html',
  styleUrls: ['./grid-properties.component.css']
})
export class GridPropertiesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  exampleTemplateArea() {
      const modalRef = this.modalService.open(ModalTemplateAreaComponent);
  }

  exampleTemplateJustify() {
      const modalRefJustify = this.modalService.open(ModalTemplateJustifyComponent);
  }

  exampleTemplateAlign() {
      const modalRefAlign = this.modalService.open(ModalTemplateAlignComponent);
  }

}
