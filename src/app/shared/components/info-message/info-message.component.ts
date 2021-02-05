import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.scss']
})
export class InfoMessageComponent implements OnInit {

  @Input() error = false;
  @Input() messageText: string;

  constructor() { }

  ngOnInit() {
  }

}
