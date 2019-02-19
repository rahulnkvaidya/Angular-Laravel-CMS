import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
// for Local host 
  private baseUrl = "http://localhost/laraang/laravel/public/api";
//  private baseUrl = "http://rpsrobosoft.com/laravel/public/api";

  constructor(private http: HttpClient) {}
 
  albumread(data) {
    return this.http.get(`${this.baseUrl}/album/` + data);
  }
  albumdelete(data) {
    return this.http.get(`${this.baseUrl}/album/` + data);
  }
  albumlist(data) {
    return this.http.get(`${this.baseUrl}/album?page=` + data);
  }
  albumimage(data, id) {
    return this.http.get(`${this.baseUrl}/album-image/` + id + `?page=` + data);
  }
  albumimageadd(data) {
    return this.http.post(`${this.baseUrl}/album-image`, data);
  }
  albumedit(data) {
    return this.http.post(`${this.baseUrl}/albums/edit`, data);
  }
  albumnew(data) {
    return this.http.post(`${this.baseUrl}/album`, data);
  }
  albumimagedelete(data){
    return this.http.get(`${this.baseUrl}/album-image/`+ data);
  }
  // Service
  servicelist(data) {
    return this.http.get(`${this.baseUrl}/service?page=` + data);
  }
  servicedelete(data){
    return this.http.delete(`${this.baseUrl}/service`, data);
  }
  servicenew(data) {
    return this.http.post(`${this.baseUrl}/service`, data);
  }
  // team
  teamread(data) {
    return this.http.get(`${this.baseUrl}/team/` + data);
  }
  teamlist(data) {
    return this.http.get(`${this.baseUrl}/team?page=` + data);
  }
  teamdelete(data){
    return this.http.delete(`${this.baseUrl}/team`, data);
  }
  teamnew(data) {
    return this.http.post(`${this.baseUrl}/team`, data);
  }
  teamedit(data, fd) {
    return this.http.put(`${this.baseUrl}/team/` + data, fd);
  }
}
