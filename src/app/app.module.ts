import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSortModule, MatTableModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { MapComponent } from './map/map.component';
import { AppRouterModule } from './app-router.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcUhFqN6DcPywXTMcVzHgn6aAke_8tIJQ'
    }),
    RouterModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
