import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccordianComponent } from './myaccordian.component';

describe('MyaccordianComponent', () => {
  let component: MyaccordianComponent;
  let fixture: ComponentFixture<MyaccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
