import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { ThemeEnum } from '../model/theme.enum'
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

public onThemeChange = new BehaviorSubject(this._storageService.theme === 'light' ? ThemeEnum.lightTheme : ThemeEnum.darkTheme);

constructor(private _storageService: StorageService) { 
  if (!_storageService.theme) {
    this._storageService.theme = this.onThemeChange.value === 1 ? 'light' : 'dark' 
  }
  this.onThemeChange.subscribe(res => {
    this._storageService.theme = +res === ThemeEnum.lightTheme ? 'light' : 'dark' 
  })
}

}
