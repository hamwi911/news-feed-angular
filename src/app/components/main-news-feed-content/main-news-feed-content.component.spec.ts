import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewsFeedContentComponent } from './main-news-feed-content.component';

describe('MainNewsFeedContentComponent', () => {
  let component: MainNewsFeedContentComponent;
  let fixture: ComponentFixture<MainNewsFeedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewsFeedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsFeedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
