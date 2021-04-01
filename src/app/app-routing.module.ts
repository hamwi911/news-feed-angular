import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainNewsFeedContentComponent} from './components/main-news-feed-content/main-news-feed-content.component';

const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news/:id', component: MainNewsFeedContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
