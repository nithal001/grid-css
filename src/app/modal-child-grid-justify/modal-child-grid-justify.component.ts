import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-child-grid-justify',
  templateUrl: './modal-child-grid-justify.component.html',
  styleUrls: ['./modal-child-grid-justify.component.css']
})
export class ModalChildGridJustifyComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
