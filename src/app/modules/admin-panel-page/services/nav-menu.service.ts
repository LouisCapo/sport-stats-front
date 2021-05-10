import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminPanelSections } from '../admin-panel-enum.enum';

@Injectable()

export class NavMenuService {

  onMenuItemSelected = new BehaviorSubject(AdminPanelSections.PLAYER);

  constructor() { }

}
