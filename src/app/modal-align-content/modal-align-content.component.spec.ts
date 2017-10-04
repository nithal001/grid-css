import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlignContentComponent } from './modal-align-content.component';

describe('ModalAlignContentComponent', () => {
  let component: ModalAlignContentComponent;
  let fixture: ComponentFixture<ModalAlignContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlignContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
