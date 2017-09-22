import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTerminologyComponent } from './basic-terminology.component';

describe('BasicTerminologyComponent', () => {
  let component: BasicTerminologyComponent;
  let fixture: ComponentFixture<BasicTerminologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTerminologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTerminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
