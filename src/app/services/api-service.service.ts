import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl: string = "http://localhost:3000/";

  httpHeadres: HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
 
  })

  constructor(private http: HttpClient) { }

  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    console.log("URL", url);
    return this.http.get(url, { headers: this.httpHeadres });
  }
  postDataToServer(endPoint: string, data: any) {
    const url = this.baseUrl + endPoint;
    return this.http.post(url, data, { headers: this.httpHeadres });
    //this.http.post()
  }

  putDataToServer(endPoint:string,data:any){
    const url =this.baseUrl + endPoint;
    return this.http.put(url,data,{headers:this.httpHeadres});
  }
}
