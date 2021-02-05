import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { InfoMessageComponent } from './components/info-message/info-message.component'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [HeaderComponent, InfoMessageComponent],
  exports: [HeaderComponent, InfoMessageComponent]
})
export class SharedModule { }
