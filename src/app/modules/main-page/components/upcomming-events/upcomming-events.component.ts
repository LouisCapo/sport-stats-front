import { Component, Input, OnInit } from '@angular/core';
import { ISportTypes } from 'src/app/modules/admin-panel-page/model/edit-panel-interface';

@Component({
  selector: 'app-upcomming-events',
  templateUrl: './upcomming-events.component.html',
  styleUrls: ['./upcomming-events.component.scss']
})
export class UpcommingEventsComponent implements OnInit {

  @Input() sportTypeList: ISportTypes[];

  constructor() { }

  ngOnInit() {
  }

}
