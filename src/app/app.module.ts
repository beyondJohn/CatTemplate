import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule
  , MatExpansionModule, MatTreeModule, MatIconModule, MatProgressBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterAccordionComponent } from './center-accordion/center-accordion.component';
import { LeftTreeComponent } from './left-tree/left-tree.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { FiltersComponent } from './filters/filters.component';
import { DataService } from './services/data.service';

import { Item } from './classes/item';
import { CategoryObject } from './classes/category-object';
import { FiltersService } from './services/filters.service';
import { LeftColumnComponent } from './left-column/left-column.component';

const material = [MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule
  , MatExpansionModule, MatTreeModule, MatIconModule, MatProgressBarModule ];

@NgModule({
  declarations: [
    AppComponent,
    CenterAccordionComponent,
    LeftTreeComponent,
    RightColumnComponent,
    FiltersComponent,
    LeftColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material
  ],
  providers: [DataService, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
