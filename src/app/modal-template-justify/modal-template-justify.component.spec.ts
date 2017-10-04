import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateJustifyComponent } from './modal-template-justify.component';

describe('ModalTemplateJustifyComponent', () => {
  let component: ModalTemplateJustifyComponent;
  let fixture: ComponentFixture<ModalTemplateJustifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateJustifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
