import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url:string="http://localhost:3000/getshoes"
  

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {

  }

}
