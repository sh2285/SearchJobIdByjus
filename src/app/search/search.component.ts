import { Component, OnInit, ViewChild } from '@angular/core';
import {IJobDescDataModel} from '../job-desc-data-model'
import  { ServiceAmazonAwsService } from '../service-amazon-aws.service';
import { map, distinct, toArray, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Observable, from, of, pipe } from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  //city : Observable<JobDescDataModel[]>;
  dataSource;
  displayedColumns: string[] 
  = ['_id', 
  'title' , 'applyLink' , 'companyname' , 
  'location' , 'experience' , 'skills' ,
   'source'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public allJobDesc = [] ;
  public lstCity =[] ;
  public lstCompany = [];
  public count : number;
 public selectedCompany : string;
 public selectedCity : string;
  constructor(private servicesJob: ServiceAmazonAwsService) {}
 
  ngOnInit() {
    this.servicesJob.getAllJob()
    .subscribe   
     (res => {      
      this.dataSource = new MatTableDataSource(this.allJobDesc = res);               
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    } , 
    (error : Response) =>{
      if(error.status === 404)
      alert('Data not found.')
      else{
      alert('An unexpected error occurred.');
      console.log(error);
      }
    });
    this.BindLoactionddl();
    this.BindCompanyddl();
    
  }

 
  BindLoactionddl(){
  this.servicesJob.BindLoactionddlService()              
   .subscribe(data => {this.lstCity = data
  },   
   (error :Response) =>{
      if(error.status === 404)
      alert('Data not found.');
      else{
          alert('An unexpected error occurred.')
          console.log(error);
      }
   }   
   ) 
   this.selectedCity = '0';}

   BindCompanyddl(){
    this.servicesJob.getAllJob()           
   .subscribe(data => {this.lstCompany = data.filter(x => x.companyname)
  },   
   (error :Response) =>{
      if(error.status === 404)
      alert('Data not found.');
      else{
          alert('An unexpected error occurred.')
          console.log(error);
      }
   }   
   ) 
    this.selectedCompany = '0'; }

  applyFilter(filterValue: string) {
    try{
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    }
    catch(ex)
    {
      alert(ex.message);
    }
  }

  onChangeCity(city :string)   {
    console.log(city);
    if(city != '0'){
    this.servicesJob.getAllJob()
    .subscribe   
     (res => {      
      this.dataSource = new MatTableDataSource(this.allJobDesc = res.filter(x => x.location == city))
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     },
     (error :Response) =>{
      if(error.status === 404)
      alert('Data not found.');
      else{
        alert('An unexpected error occurred.')
        console.log(error);
      }
   }   
   )
   this.selectedCompany = '0';
  }
    else{
      this.servicesJob.getAllJob().subscribe(res => {
        this.dataSource = new MatTableDataSource(this.allJobDesc = res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error:Response) => {
        if(error.status === 404)
        alert('Data not found.');
        else{
          alert('An unexpected error occurred.')
          console.log(error);
        }
      })              
}
  }

  onChangeCompany(company :string)   {
    console.log(company);
    if(company != '0'){
    this.servicesJob.getAllJob()
    .subscribe   
     (res => {      
      this.dataSource = new MatTableDataSource(this.allJobDesc = res.filter(x => x.companyname == company))
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     },
     (error :Response) =>{
      if(error.status === 404)
      alert('Data not found.');
      else{
        alert('An unexpected error occurred.')
        console.log(error);
      }
   }   
   )
  this.selectedCity = '0';
  }
    else{
      this.servicesJob.getAllJob().subscribe(res => {
        this.dataSource = new MatTableDataSource(this.allJobDesc = res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error:Response) => {
        if(error.status === 404)
        alert('Data not found.');
        else{
          alert('An unexpected error occurred.')
          console.log(error);
        }
      })         
}
  }

}