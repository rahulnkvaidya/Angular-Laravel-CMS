import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { NotifyService } from "src/app/services/notify.service";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"]
})
export class TeamListComponent implements OnInit {
  public error;
  goldens: Object;
  goldendata: Object;
  public next;
  public prev;
  public last_page;
  paramsSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private Notify: NotifyService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.http
        .get(
          "http://rpsrobosoft.com/laravel/public/api/team?page=" +
            params["page"]
        )
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
    this.http
      .delete("http://rpsrobosoft.com/laravel/api/team/" + id)
      .subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      );
  }
  handleError(error) {
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
