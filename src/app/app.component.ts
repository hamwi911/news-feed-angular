import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideMenu: boolean;

  toggleSideMenu(): void {
    this.showSideMenu = !this.showSideMenu;
  }
}
