import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsId: string
  @Input() title: string
  @Input() subTitle: string;
  @Input() date: Date;
  @Input() photo: string;

  constructor() { }

  ngOnInit() {
  }

}
