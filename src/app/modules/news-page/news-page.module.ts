import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { NewsPageRoutingModule } from './news-page-routing.module'
import { NewsCardComponent } from './components/news-card/news-card.component'
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewsService } from './services/news.service'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [NewsService],
  declarations: [NewsPageComponent, NewsCardComponent]
})
export class NewsPageModule { }
