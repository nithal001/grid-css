import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateAreaComponent } from './modal-template-area.component';

describe('ModalTemplateAreaComponent', () => {
  let component: ModalTemplateAreaComponent;
  let fixture: ComponentFixture<ModalTemplateAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
