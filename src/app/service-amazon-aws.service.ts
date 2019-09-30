import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, distinctUntilChanged, distinctUntilKeyChanged, distinct } from 'rxjs/operators';
import {IJobDescDataModel} from './job-desc-data-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAmazonAwsService {
  url = 'https://raw.githubusercontent.com/sh2285/apionline/master/db.json';  
  locationUrl = 'https://raw.githubusercontent.com/sh2285/apionline/master/location.json'
  constructor(private http: HttpClient) { }  
  
  getAllJob():Observable<IJobDescDataModel[]> {
    return this.http.get<IJobDescDataModel[]>(this.url)
    .pipe(
      retry(2), 
      catchError(this.handleError)
    );  
  }  

  
  BindLoactionddlService():Observable<IJobDescDataModel[]> {
    return this.http.get<IJobDescDataModel[]>(this.locationUrl) 
     .pipe(distinct(),
       retry(2),
       catchError(this.handleError)
     )       
  }  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {   
      console.error('An error occurred:', error.error.message);
    } else {    
      console.error(
        `error status ${error.status}, ` +
        `${error.error}`);
    }   
    return throwError('An unexpected error occured.');
  };
  
}

