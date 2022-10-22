import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentModule } from "./comment/comment.module";
import { CategoryModule } from "./category/category.module";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommentModule,
    CategoryModule,
    HttpClientModule,
    RouterLinkWithHref,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
