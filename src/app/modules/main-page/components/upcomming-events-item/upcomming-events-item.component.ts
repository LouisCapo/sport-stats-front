import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcomming-events-item',
  templateUrl: './upcomming-events-item.component.html',
  styleUrls: ['./upcomming-events-item.component.scss']
})
export class UpcommingEventsItemComponent implements OnInit {

  @Input() date: string;
  @Input() firstMember;
  @Input() secondMember;

  constructor() { }

  ngOnInit() {
  }

}
