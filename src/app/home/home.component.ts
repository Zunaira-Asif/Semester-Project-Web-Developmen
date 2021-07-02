import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  createClick=function()
  {
    this.router.navigateByUrl('/create');
  }

  viewClick=function()
  {
    this.router.navigateByUrl('/view');
  }

  updateClick=function()
  {
    this.router.navigateByUrl('/update');
  }

  deleteClick=function()
  {
    this.router.navigateByUrl('/delete');
  }


}
