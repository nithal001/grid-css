import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChildGridComponent } from './modal-child-grid.component';

describe('ModalChildGridComponent', () => {
  let component: ModalChildGridComponent;
  let fixture: ComponentFixture<ModalChildGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChildGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChildGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
