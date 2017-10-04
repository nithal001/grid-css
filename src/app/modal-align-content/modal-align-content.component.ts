import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-align-content',
  templateUrl: './modal-align-content.component.html',
  styleUrls: ['./modal-align-content.component.css']
})
export class ModalAlignContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
