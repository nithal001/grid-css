import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-template-area',
  templateUrl: './modal-template-area.component.html',
  styleUrls: ['./modal-template-area.component.css']
})
export class ModalTemplateAreaComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
