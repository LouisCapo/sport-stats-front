import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { INews } from '../../model/news-interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit, OnDestroy {
  
  newsId: string;
  loading = true;
  newsInfo: INews;
  errorInfo: IErrorRequest;

  private _subscriptions = new Subscription();

  constructor(
    private _route: ActivatedRoute,
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    this._subscriptions.add(
      this._route.params.subscribe((res) => {
        this.newsId = res.id;
      })
    );
    this._subscriptions.add(
      this._newsService.getNews(this.newsId).subscribe((res) => {
        if ((res as IErrorRequest).error) {
          this.errorInfo = res as IErrorRequest;
        }
        this.newsInfo = res as INews;
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
