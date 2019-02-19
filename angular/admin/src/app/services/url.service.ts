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
  albumCreate(data) {
    return this.http.post(`${this.baseUrl}/album`, data);
  }
  albumUpdate(data) {
    return this.http.post(`${this.baseUrl}/album/update`, data);
  }
  albumDelete(data) {
    return this.http.get(`${this.baseUrl}/album/delete/` + data);
  }
  // Album Image
  albumimageList(id, page) {
    return this.http.get(`${this.baseUrl}/album-images/` + id + `?page=` + page);
  }
  albumimageCreate(data) {
    return this.http.post(`${this.baseUrl}/album-images`, data);
  }
  albumimageDelete(data){
    return this.http.get(`${this.baseUrl}/album-images/delete/`+ data);
  }
  // Service
  serviceList(data) {
    return this.http.get(`${this.baseUrl}/service?page=` + data);
  }
  serviceRead(data) {
    return this.http.get(`${this.baseUrl}/service/` + data);
  }
  serviceCreate(data) {
    return this.http.post(`${this.baseUrl}/service`, data);
  }
  serviceUpdate(data) {
    return this.http.post(`${this.baseUrl}/service/update`, data);
  }
  serviceDelete(data){
    return this.http.get(`${this.baseUrl}/service/delete/`+ data);
  }
  // team
  teamList(data) {
    return this.http.get(`${this.baseUrl}/team?page=` + data);
  }
  teamRead(data) {
    return this.http.get(`${this.baseUrl}/team/` + data);
  }
  teamCreate(data) {
    return this.http.post(`${this.baseUrl}/team`, data);
  }
  teamUpdate(data) {
    return this.http.post(`${this.baseUrl}/team/update`, data);
  }
  teamDelete(data){
    return this.http.get(`${this.baseUrl}/team/delete/`+ data);
  }
  // pageTopImage
  pageTopImageList(data) {
    return this.http.get(`${this.baseUrl}/pageimage?page=` + data);
  }
  pageTopImageRead(data) {
    return this.http.get(`${this.baseUrl}/pageimage/` + data);
  }
  pageTopImageCreate(data) {
    return this.http.post(`${this.baseUrl}/pageimage`, data);
  }
  pageTopImageUpdate(data) {
    return this.http.post(`${this.baseUrl}/pageimage/update`, data);
  }
  pageTopImageDelete(data){
    return this.http.get(`${this.baseUrl}/pageimage/delete/`+ data);
  }
}
