import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { UrlService } from '../services/url.service';


@Component({
  selector: 'app-page-image-list',
  templateUrl: './page-image-list.component.html',
  styleUrls: ['./page-image-list.component.css']
})
export class PageImageListComponent implements OnInit {
  goldens: Object;
  goldendata: Object;
  public next;
  public prev;
  public last_page;
  paramsSubscription: Subscription;
  public imagepath;

  constructor(private http: HttpClient, private route: ActivatedRoute, private url: UrlService) {
    this.imagepath = this.url.storagepath;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.pageTopImageList(params["page"])
       .subscribe((data) => {
          this.goldens = data;
          this.goldendata = this.goldens["data"];
          console.log(this.goldens);
          console.log(this.goldendata);
          /////////////////////
          this.last_page = this.goldens["last_page"];
          this.next = this.goldens["current_page"] + 1;
          this.prev = this.goldens["current_page"] - 1;
          //////
        });
    });
  }
}
