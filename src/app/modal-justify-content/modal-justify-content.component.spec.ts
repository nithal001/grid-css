import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJustifyContentComponent } from './modal-justify-content.component';

describe('ModalJustifyContentComponent', () => {
  let component: ModalJustifyContentComponent;
  let fixture: ComponentFixture<ModalJustifyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJustifyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJustifyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
