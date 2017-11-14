import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSupportComponent } from './grid-support.component';

describe('GridSupportComponent', () => {
  let component: GridSupportComponent;
  let fixture: ComponentFixture<GridSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
