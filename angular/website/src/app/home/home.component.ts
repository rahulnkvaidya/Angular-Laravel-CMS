import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Image;
  public logo;
  headerImage: Object;
  logoImage: Object;

  public ourVision;
  visionImage: Object;

  public ourAim;
  aimImage: Object;

  public Whatweoffer;
  WhatweofferImage: Object;

  public OurPlacements;
  OurPlacementsImage: Object;


  public imagepath;

  constructor(private url: UrlService) {
    this.imagepath = this.url.storagepath;

    this.url.pageImage("logo", "top")
      .subscribe((data) => {
        this.logoImage = data;
        this.logo = this.logoImage["image"];
        console.log(this.logo);
      });
    this.url.pageImage("home", "top")
      .subscribe((data) => {
        this.headerImage = data;
        this.Image = this.headerImage["image"];
        console.log(this.Image);
      });
    this.url.pageImage("ourVision", "top")
      .subscribe((data) => {
        this.visionImage = data;
        this.ourVision = this.visionImage["image"];
        console.log(this.Image);
      });
    this.url.pageImage("ourAim", "top")
      .subscribe((data) => {
        this.aimImage = data;
        this.ourAim = this.aimImage["image"];
        console.log(this.Image);
      });

    this.url.pageImage("Whatweoffer", "top")
      .subscribe((data) => {
        this.WhatweofferImage = data;
        this.Whatweoffer = this.WhatweofferImage["image"];
        console.log(this.Image);
      });
    this.url.pageImage("OurPlacements", "top")
      .subscribe((data) => {
        this.OurPlacementsImage = data;
        this.OurPlacements = this.OurPlacementsImage["image"];
        console.log(this.Image);
      });

  }

  ngOnInit() {
  }

}
