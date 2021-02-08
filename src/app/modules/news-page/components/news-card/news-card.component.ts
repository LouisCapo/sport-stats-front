import { Component, Input, OnInit } from '@angular/core';
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
export class NewsCardComponent implements OnInit {
  newsId: string;
  loading = true;
  newsInfo: INews;
  errorInfo: IErrorRequest;

  private _subscriptions: Subscription[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    this._subscriptions.push(
      this._route.params.subscribe((res) => {
        this.newsId = res.id;
      })
    );
    this._subscriptions.push(
      this._newsService.getNews(this.newsId).subscribe((res) => {
        if ((res as IErrorRequest).error) {
          this.errorInfo = res as IErrorRequest;
        }
        this.newsInfo = res as INews;
        this.loading = false;
      })
    );
    // this.newsInfo = {
    //   newsTitle: 'Следующий матч Месси станет его 500-м в Ла Лиге',
    //   newsText:
    //     'Если Лео Месси сыграет против Эйбара 29 декабря, он проведет в Ла Лиге свой 500-й матч. Только 10 игроков сделали это раньше: Андони Зубиццарета (617), Хоакин (565), Рауль (550), Эйсебио (543), Пако Буйо (542), Маноло Санчис (523), Икер Касильяс (510), Хави (505), Серхио Рамос (505) и Микель Солер (504). Если Лео останется в «Барсе», вполне возможно, что через несколько сезонов он установит еще один исторический рекорд.',
    //   newsDate: '25.12.2020',
    //   newsId: '123',
    //   newsPhotos: [
    //     'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1633x511:1635x509)/origin-imgresizer.eurosport.com/2020/08/26/2872402-59156048-2560-1440.jpg',
    //   ],
    //   newsSubtitle: '12321312sdgsdfgdf',
    // };
  }
}
