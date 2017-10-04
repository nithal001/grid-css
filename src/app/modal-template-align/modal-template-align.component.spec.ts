import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateAlignComponent } from './modal-template-align.component';

describe('ModalTemplateAlignComponent', () => {
  let component: ModalTemplateAlignComponent;
  let fixture: ComponentFixture<ModalTemplateAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
