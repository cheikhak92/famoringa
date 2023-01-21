import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:3000/";

  createAuthorizationHeader(headers : Headers){
    headers.append("content-type","application/json");
  }
  constructor(public http: HttpClient) {
  }

  get(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  post(url: string, data: any) {
    this.createAuthorizationHeader(new Headers())
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + url, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  patch(url: string, id: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http.patch(this.baseUrl + url + "/" + id, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(url: string, id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUrl + url + "/" + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}