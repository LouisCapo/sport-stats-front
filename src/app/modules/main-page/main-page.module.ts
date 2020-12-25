import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NewsComponent } from './components/news/news.component'
import { MainPageRoutingModule } from './main-page-routing.module'

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  declarations: [MainPageComponent, NewsComponent]
})
export class MainPageModule { }
