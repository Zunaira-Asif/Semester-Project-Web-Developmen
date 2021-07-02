import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-shoes',
  templateUrl: './view-shoes.component.html',
  styleUrls: ['./view-shoes.component.css']
})
export class ViewShoesComponent implements OnInit {

  shoes=[];
  constructor
  (
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getShoesRequest().subscribe((data:any[])=>
    {
      console.log("Let's see if this fetches any thing");
      console.log(data);
      this.shoes=data;
    });
  }



}
