import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { SearchBoxComponent } from "./you-tube-search/search-box.component";
import { SearchResultComponent} from "./you-tube-search/search-result.component";

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
