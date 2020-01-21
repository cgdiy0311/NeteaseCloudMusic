import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    HomeModule
  ],
  exports: [
    ShareModule,
    HomeModule
  ]
})
export class PagesModule { }
