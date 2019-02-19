import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { UrlService } from '../url.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  news: Object;
  newsdata: Object;
  paramsSubscription: Subscription;

  public next;
  public prev;
  public last_page;
  public imagepath;

  constructor(private http: HttpClient, private route: ActivatedRoute, private url: UrlService) {
    this.imagepath = this.url.storagepath;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.teamList(params["page"])
        .subscribe((data) => {
          this.news = data;
          this.newsdata = this.news["data"];
          /////////////////////
          this.last_page = this.news["last_page"];
          this.next = this.news["current_page"] + 1;
          this.prev = this.news["current_page"] - 1;
          //////
          console.log(this.news);
        });
    });
  }
}
