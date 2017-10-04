import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-template-justify',
  templateUrl: './modal-template-justify.component.html',
  styleUrls: ['./modal-template-justify.component.css']
})
export class ModalTemplateJustifyComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
