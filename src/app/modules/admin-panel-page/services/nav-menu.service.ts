import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class NavMenuService {

  onMenuItemSelected = new BehaviorSubject(1);

  constructor() { }

}
