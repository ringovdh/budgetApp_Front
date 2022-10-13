import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommentModule } from "./comment/comment.module";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommentModule,
    HttpClientModule,
    RouterLinkWithHref,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
