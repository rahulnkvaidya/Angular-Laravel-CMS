import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { UrlService } from '../url.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Object;
  albumstop: Object;
  newsdata: Object;
  paramsSubscription: Subscription;
  public next;
  public prev;
  public last_page;
  public top;
  public imagepath;

  constructor(private route: ActivatedRoute,  private url: UrlService) {
    this.imagepath = this.url.storagepath;
  }

  ngOnInit() {
    this.url.pageImage("album","top")
      .subscribe((data) => {
        this.albumstop = data;
        this.top = this.albumstop["image"];
        console.log(this.top);
      });
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.albumlist(params["page"])
        .subscribe((data) => {
          this.albums = data;
          this.newsdata = this.albums["data"];
          //  console.log(this.newsdata);
          this.last_page = this.albums["last_page"];
          this.next = this.albums["current_page"] + 1;
          this.prev = this.albums["current_page"] - 1;
        });
    });
  }
}
