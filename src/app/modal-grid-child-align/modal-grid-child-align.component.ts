import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-grid-child-align',
  templateUrl: './modal-grid-child-align.component.html',
  styleUrls: ['./modal-grid-child-align.component.css']
})
export class ModalGridChildAlignComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
