import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './appContent/content.component';
import { HomeComponent } from './appHome/home.component';
import { CsvUploadComponent } from './appLogic/csv-upload/csv-upload.component';
import { SearchComponent } from './appLogic/search/search.component';
import { TableComponent } from './appLogic/table/table.component';
import { SharedModule } from './appModule/shared.module';
import { NavbarComponent } from './appNavbar/navbar.component';
import { FileGeneratorComponent } from './appLogic/file-generator/file-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CsvUploadComponent,
    SearchComponent,
    TableComponent,
    ContentComponent,
    FileGeneratorComponent,

  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,

    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
