import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNewsFeedComponent } from './components/side-news-feed/side-news-feed.component';
import { MainNewsFeedContentComponent } from './components/main-news-feed-content/main-news-feed-content.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNewsFeedComponent,
    MainNewsFeedContentComponent,
    HeaderComponent,
    ConvertDatePipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
