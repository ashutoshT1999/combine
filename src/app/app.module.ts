import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { categoryinfo } from 'src/category/category.component';
import { categorypipe } from 'src/category/categorypipe.component';
import { contentinfo } from 'src/content/content.component';
import { Productinfo } from 'src/Product/product.component';
import { studentclass } from 'src/student/student.component';
import { highlightDirective } from 'src/student/studentdirective.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent, categoryinfo, Productinfo, categorypipe, studentclass, highlightDirective, contentinfo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatDividerModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
