import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dressing-room-service/home/home.component';
import { CategoryComponent } from './dressing-room-service/category/category.component';
import { ProductItemComponent } from './dressing-room-service/product-item/product-item.component';
import { ProductListComponent } from './dressing-room-service/product-list/product-list.component';
import { ModelComponent } from './dressing-room-service/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductItemComponent,
    ProductListComponent,
    ModelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
