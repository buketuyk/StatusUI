import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusListComponent } from './components/status-list/status-list.component';
import { StatusDetailComponent } from './components/status-detail/status-detail.component';
import { StatusDeleteComponent } from './components/status-delete/status-delete.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { StatusAddComponent } from './components/status-add/status-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StatusListComponent,
    StatusDetailComponent,
    StatusDeleteComponent,
    ConfirmDialogComponent,
    StatusAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
