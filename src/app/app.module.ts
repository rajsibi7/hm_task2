import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyaccordianComponent } from './myaccordian/myaccordian.component';
import { ChildaccordianComponent } from './shared/childaccordian/childaccordian.component';
import { YoutubeserComponent } from './youtube/youtubeser/youtubeser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MyaccordianComponent,
    ChildaccordianComponent,
    YoutubeserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
