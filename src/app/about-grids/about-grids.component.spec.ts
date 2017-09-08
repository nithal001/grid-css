import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGridsComponent } from './about-grids.component';

describe('AboutGridsComponent', () => {
  let component: AboutGridsComponent;
  let fixture: ComponentFixture<AboutGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
