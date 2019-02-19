import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  // for Local host 
  // private baseUrl = "http://rpsrobosoft.com/laravel/public/api";
  private domain = "http://localhost";
  private folder = "/laraang";
  // Dont Edit this line
  private baseUrl = this.domain + this.folder + "/laravel/public/api";
  public storagepath = this.domain + this.folder + "/laravel/storage/app/";

  constructor(private http: HttpClient) {}
  // Album
  albumlist(data) {
    return this.http.get(`${this.baseUrl}/album?page=` + data);
  }
  albumRead(data) {
    return this.http.get(`${this.baseUrl}/album/` + data);
  }
  // Album Image
  albumimageList(id, page) {
    return this.http.get(`${this.baseUrl}/album-images/` + id + `?page=` + page);
  }
  // Service
  serviceList(data) {
    return this.http.get(`${this.baseUrl}/service?page=` + data);
  }
  serviceRead(data) {
    return this.http.get(`${this.baseUrl}/service/` + data);
  }
  // team
  teamList(data) {
    return this.http.get(`${this.baseUrl}/team?page=` + data);
  }
  teamRead(data) {
    return this.http.get(`${this.baseUrl}/team/` + data);
  }
  // pageTopImage
  pageTopImageList(data) {
    return this.http.get(`${this.baseUrl}/pageimage?page=` + data);
  }
  pageTopImageRead(data) {
    return this.http.get(`${this.baseUrl}/pageimage/` + data);
  }
}
