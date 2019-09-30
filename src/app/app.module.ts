import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient , HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import  { ServiceAmazonAwsService } from './service-amazon-aws.service';
import {IJobDescDataModel} from './job-desc-data-model'

//import {DataTableModule} from "angular-6-datatable";

import { DataTableModule } from 'ng-angular8-datatable';
// #### Add For Search 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlertComponent } from './components/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { JwtInterceptor, ErrorInterceptor , fakeBackendProvider } from './helpers';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    Ng2SearchPipeModule,  
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
    
  ],
  exports: [
    MatSortModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider , ServiceAmazonAwsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
