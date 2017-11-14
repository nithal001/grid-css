import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChildGridJustifyComponent } from './modal-child-grid-justify.component';

describe('ModalChildGridJustifyComponent', () => {
  let component: ModalChildGridJustifyComponent;
  let fixture: ComponentFixture<ModalChildGridJustifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChildGridJustifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChildGridJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
