import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creating-stats',
  templateUrl: './creating-stats.component.html',
  styleUrls: ['./creating-stats.component.scss']
})
export class CreatingStatsComponent implements OnInit, OnDestroy {

  public playerStats = new FormGroup({
    title: new FormControl(''),
    value: new FormControl(''),
  })
  public hasChanges = false;

  @Input() title: string;
  @Input() value: string

  @Output() onStatsChanged = new EventEmitter();
  @Output() onStatsDeleted = new EventEmitter();

  private _subscriptions = new Subscription();

  constructor() { }

  ngOnInit() {
    this.playerStats.controls.title.setValue(this.title);
    this.playerStats.controls.value.setValue(this.value);
    this._subscriptions.add(this.playerStats.valueChanges.subscribe(res => {
      if (res.title !== this.title || res.value !== this.value) {
        return this.hasChanges = true;
      }
      this.hasChanges = false;
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  deleteStats() {
    this.onStatsDeleted.emit();
  }

  saveStats() {
    this.onStatsChanged.emit({
      title: this.playerStats.controls.title.value,
      value: this.playerStats.controls.value.value,
    })
  }

}
