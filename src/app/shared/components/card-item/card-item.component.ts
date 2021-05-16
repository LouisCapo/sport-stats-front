import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  extended = false;

  @Input() title: string;
  @Input() photo: string;
  @Input() expandable: boolean = false;

  get icon() {
    return this.extended ? 'expand_less' : 'expand_more'
  }

  constructor() { }

  ngOnInit() {
  }

}
