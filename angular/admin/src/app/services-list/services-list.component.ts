import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { NotifyService } from "src/app/services/notify.service";
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  public error;
  goldens: Object;
  goldendata: Object;
  public next;
  public prev;
  public last_page;
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private Notify: NotifyService,
    private url: UrlService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.serviceList(params["page"])
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
  deleteteam(id) {
    this.Notify.onwaitInfo();
    this.url.serviceDelete(id)
    .subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      );
  }
  handleError(error) {
    console.log(error);
    this.error = error.error.message;
    this.Notify.onClear();
    this.Notify.onError(
      "Please Retry and and check your internet connection",
      "Failed"
    );
  }
  handleResponse(data) {
    console.log(data);
    this.Notify.onClear();
    this.Notify.onSuccess(data["data"], "Success");
    this.ngOnInit();
  }
}

