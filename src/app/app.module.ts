import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { ViewShoesComponent } from './view-shoes/view-shoes.component';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateShoeComponent,
    ViewShoesComponent,
    DeleteShoeComponent,
    UpdateShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
