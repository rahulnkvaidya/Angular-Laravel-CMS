import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public Image;
  headerImage: Object;
  public imagepath;

  constructor(private url: UrlService) { 
    this.imagepath = this.url.storagepath;

    this.url.pageImage("aboutus","top")
    .subscribe((data) => {
      this.headerImage = data;
      this.Image = this.headerImage["image"];
      console.log(this.Image);
    });
  }

  ngOnInit() {
  }

}
