import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from '../url.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact: Object;
  public cont;
  public imagepath;
  constructor(private http: HttpClient, private url: UrlService) { 
    this.imagepath = this.url.storagepath;
  }

  ngOnInit() {
    this.http
      .get("http://www.artpickle.in/lara/api/page_top_images/contact/top")
      .subscribe((data) => {
        this.contact = data;
        this.cont = this.contact["image"];
        console.log(this.cont);
      });
  }

}
