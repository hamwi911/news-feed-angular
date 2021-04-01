import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';

@Component({
  selector: 'app-side-news-feed',
  templateUrl: './side-news-feed.component.html',
  styleUrls: ['./side-news-feed.component.scss']
})
export class SideNewsFeedComponent implements OnInit {
  @Output() showSideMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  isWorkingComp: boolean;
  data: any;

  constructor(private sideMenuService: SideMenuService) {
  }

  toggleSideMenu(): void {
    this.showSideMenu.emit();
  }

  ngOnInit(): void {
    this.isWorkingComp = true;
    this.sideMenuService.getFriendsList(this).subscribe(res => {
      setTimeout(() => {
        this.data = res;
        this.isWorkingComp = false;
      }, 1000);
    });
  }

}
