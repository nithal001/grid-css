import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-justify-content',
  templateUrl: './modal-justify-content.component.html',
  styleUrls: ['./modal-justify-content.component.css']
})
export class ModalJustifyContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
