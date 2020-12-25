import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NewsComponent } from './components/news/news.component'
import { MainPageRoutingModule } from './main-page-routing.module'
import { NewsItemComponent } from './components/news-item/news-item.component'
import { MatSelectModule } from '@angular/material/select';
import { UpcommingEventsComponent } from './components/upcomming-events/upcomming-events.component'
import { UpcommingEventsItemComponent } from './components/upcomming-events-item/upcomming-events-item.component'

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatSelectModule
  ],
  declarations: [MainPageComponent, NewsComponent, NewsItemComponent, UpcommingEventsComponent, UpcommingEventsItemComponent]
})
export class MainPageModule { }
