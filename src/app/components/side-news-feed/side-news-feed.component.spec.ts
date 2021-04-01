import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNewsFeedComponent } from './side-news-feed.component';

describe('SideNewsFeedComponent', () => {
  let component: SideNewsFeedComponent;
  let fixture: ComponentFixture<SideNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNewsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
