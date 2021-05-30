import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creating-stats',
  templateUrl: './creating-stats.component.html',
  styleUrls: ['./creating-stats.component.scss']
})
export class CreatingStatsComponent implements OnInit, OnDestroy {

  @Output() onStatsChanged = new EventEmitter();
  @Output() onStatsDeleted = new EventEmitter();

  @Input() set title(val: string) {
    this.playerStats.controls.title.setValue(val);
  }
  @Input() set value(val: string) {
    this.playerStats.controls.value.setValue(val);
  }

  playerStats = new FormGroup({
    title: new FormControl(''),
    value: new FormControl(''),
  })

  private _subscriptions = new Subscription();

  constructor() { }

  ngOnInit() {
    this._subscriptions.add(this.playerStats.valueChanges.subscribe(res => {
      this.onStatsChanged.emit({
        title: res.title,
        value: res.value, 
      });
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  deleteStats() {
    this.onStatsDeleted.emit();
  }

}
