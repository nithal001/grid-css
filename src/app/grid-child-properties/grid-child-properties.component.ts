import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalChildGridComponent } from '../modal-child-grid/modal-child-grid.component';

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

}
