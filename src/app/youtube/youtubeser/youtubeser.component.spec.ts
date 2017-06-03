import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeserComponent } from './youtubeser.component';

describe('YoutubeserComponent', () => {
  let component: YoutubeserComponent;
  let fixture: ComponentFixture<YoutubeserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
