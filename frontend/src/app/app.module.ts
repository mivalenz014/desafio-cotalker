import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './grafico/grafico.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontEndAPIService } from './front-end-api.service';


@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    FrontEndAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
