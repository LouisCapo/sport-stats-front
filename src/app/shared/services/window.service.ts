import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  
  public onWindowResize = new BehaviorSubject<{height: number, width: number}>(undefined);

  constructor() { }

}
