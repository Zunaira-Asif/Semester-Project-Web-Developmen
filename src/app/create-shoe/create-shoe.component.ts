import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})
export class CreateShoeComponent implements OnInit {
  form:FormGroup;

  constructor(public fb:FormBuilder, private http:HttpClient, private dataService:DataService)
  {
    this.form=this.fb.group({
      ShoeName:[''],
      ShoeType:[''],
      ShoeColor:[''],
      ShoePrice:['']
    })
  }

  ngOnInit(): void {
  }

  submitForm()
  {
    var formData:FormData=new FormData();
    formData.append("ShoeName",this.form.get('ShoeName').value);
    formData.append("ShoeType",this.form.get('ShoeType').value);
    formData.append("ShoeColor",this.form.get('ShoeColor').value);
    formData.append("ShoePrice",this.form.get('ShoePrice').value);

    
    this.http.post('http://localhost:3000/createShoe/',formData).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    )
  }

  
}
