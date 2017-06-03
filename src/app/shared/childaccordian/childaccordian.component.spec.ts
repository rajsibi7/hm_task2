import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildaccordianComponent } from './childaccordian.component';

describe('ChildaccordianComponent', () => {
  let component: ChildaccordianComponent;
  let fixture: ComponentFixture<ChildaccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildaccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
