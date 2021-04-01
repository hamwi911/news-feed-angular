import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showSideMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  toggleSideMenu(): void {
    this.showSideMenu.emit();
  }

  ngOnInit(): void {
  }

}
