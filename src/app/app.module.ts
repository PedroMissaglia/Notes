import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TaskModule } from './task/task.module';
import { HomeModule } from './home/home.module';
import { FeedModule } from './task/feed/feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    TaskModule,
    HomeModule,
    FeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
