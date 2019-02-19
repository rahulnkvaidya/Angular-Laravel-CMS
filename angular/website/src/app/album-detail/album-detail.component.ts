import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { UrlService } from '../url.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  paramsSubscription: Subscription;
  albums: Object;
  inds: Object;
  public id;

  newsdata: Object;
  public next;
  public prev;
  public last_page;
  public imagepath;
  constructor(private route: ActivatedRoute, private http: HttpClient,  private url: UrlService) {
    this.imagepath = this.url.storagepath;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.albumimageList(params["id"], params["page"])
        .subscribe((data) => {
          this.albums = data;
          // console.log(this.albums);
          this.newsdata = this.albums["data"];
          // console.log(this.newsdata);
          this.last_page = this.albums["last_page"];
          this.next = this.albums["current_page"] + 1;
          this.prev = this.albums["current_page"] - 1;
          this.id = params["id"];
        });
    });
  }
}
