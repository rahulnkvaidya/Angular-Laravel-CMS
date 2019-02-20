import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { UrlService } from '../url.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public Image;
  headerImage: Object;
  public imagepath;

  constructor( private route: ActivatedRoute, private url: UrlService) {
    this.imagepath = this.url.storagepath;
    this.url.pageImage("services","top")
    .subscribe((data) => {
      this.headerImage = data;
      this.Image = this.headerImage["image"];
      console.log(this.Image);
    });
    
  }

  ngOnInit() {
  
  }

}
