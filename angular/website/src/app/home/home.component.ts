import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Image;
  headerImage: Object;
  public imagepath;

  constructor(private url: UrlService) { 
    this.imagepath = this.url.storagepath;

    this.url.pageImage("home","top")
    .subscribe((data) => {
      this.headerImage = data;
      this.Image = this.headerImage["image"];
      console.log(this.Image);
    });
  }

  ngOnInit() {
  }

}
