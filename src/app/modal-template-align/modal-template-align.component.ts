import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-template-align',
  templateUrl: './modal-template-align.component.html',
  styleUrls: ['./modal-template-align.component.css']
})
export class ModalTemplateAlignComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
