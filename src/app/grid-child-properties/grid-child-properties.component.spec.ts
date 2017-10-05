import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridChildPropertiesComponent } from './grid-child-properties.component';

describe('GridChildPropertiesComponent', () => {
  let component: GridChildPropertiesComponent;
  let fixture: ComponentFixture<GridChildPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridChildPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridChildPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
