import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-child-grid',
  templateUrl: './modal-child-grid.component.html',
  styleUrls: ['./modal-child-grid.component.css']
})
export class ModalChildGridComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
