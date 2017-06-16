import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicateService } from './communicate.service';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
