import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookRoutingModule } from '../book/book-routing.module';
import { BlogRoutingModule } from '../blog/blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, CommandBarComponent]
})
export class SharedModule { }
