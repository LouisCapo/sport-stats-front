import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

  isNullOrUndefined(value) {
    return value === undefined || value === null;
  }

}
