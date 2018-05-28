import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './services/cep.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
