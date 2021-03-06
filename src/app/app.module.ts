import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatFormFieldModule, MatInputModule,MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule, MatTableModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';
import { ExcelService } from './warehouse-list/excel.service';



// npm install ng2-charts --save
// need to run : npm intall chat.js in case of errors related to p-chart tag
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';
import { MapComponent } from './map/map.component';
import { AppRouterModule } from './app-router.module';
import {RouterModule} from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FaqComponent } from './faq/faq.component';
import { CalculationComponent } from './calculation/calculation.component';

import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent,
    WarehouseDetailsComponent,
    MapComponent,
    QuizComponent,
    FaqComponent,
    CalculationComponent,
    NotificationsComponent,
    SettingsComponent,
    HelpComponent,
    UserComponent
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
    MatButtonModule, 
    MatToolbarModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcUhFqN6DcPywXTMcVzHgn6aAke_8tIJQ'
    }),
    RouterModule,
    AppRouterModule,
    MatExpansionModule,
    ChartsModule,
    HttpClientModule,
    HttpModule,
    BarRatingModule

  ],
  exports: [MatButtonModule, MatToolbarModule],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
