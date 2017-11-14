import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGridChildAlignComponent } from './modal-grid-child-align.component';

describe('ModalGridChildAlignComponent', () => {
  let component: ModalGridChildAlignComponent;
  let fixture: ComponentFixture<ModalGridChildAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGridChildAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGridChildAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
