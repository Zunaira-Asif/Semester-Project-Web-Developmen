import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private LOCAL_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getShoesRequest()
  {
    return this.httpClient.get(this.LOCAL_API_SERVER+'/getShoes/')
  }

  public postShoesRequest()
  {
    return this.httpClient.get(this.LOCAL_API_SERVER+'/createShoe/')
  }
}
