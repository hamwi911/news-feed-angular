import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MainNewsService} from '../../services/main-news.service';
import {SideMenuService} from '../../services/side-menu.service';

@Component({
  selector: 'app-main-news-feed-content',
  templateUrl: './main-news-feed-content.component.html',
  styleUrls: ['./main-news-feed-content.component.scss']
})
export class MainNewsFeedContentComponent implements OnInit {
  routeSub: Subscription = new Subscription();
  isWorkingComp: boolean;
  isAllFeeds;
  data: any;
  allFeed;

  constructor(private route: ActivatedRoute, private mainNews: MainNewsService, private sideMenu: SideMenuService) {
  }

  getFriendNews(id): void {
    this.isWorkingComp = true;
    this.mainNews.getFeedNews(this, id).subscribe(res => {
      setTimeout(() => {
        this.data = res;
        this.isWorkingComp = false;
      }, 1500);
    });
  }

  getAllFeeds(): void {
    this.isWorkingComp = true;
    this.sideMenu.getFriendsList(this).subscribe(res => {
      setTimeout(() => {
        this.allFeed = res;
        this.isWorkingComp = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      if (param.id === 'all') {
        this.isAllFeeds = true;
        this.getAllFeeds();
      } else {
        this.isAllFeeds = false;
        this.getFriendNews(param.id);
      }
    });
  }

}
