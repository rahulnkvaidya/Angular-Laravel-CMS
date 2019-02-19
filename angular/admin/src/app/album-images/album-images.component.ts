import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { NotifyService } from "src/app/services/notify.service";
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-album-images',
  templateUrl: './album-images.component.html',
  styleUrls: ['./album-images.component.css']
})
export class AlbumImagesComponent implements OnInit {
  albums: Object;
  newsdata: Object;
  paramsSubscription: Subscription;
  public next;
  public prev;
  public last_page;
  public imagepath;
  selectedFile: File = null;

  constructor(
    private route: ActivatedRoute,
    private Notify: NotifyService,
    private url: UrlService
  ) {
    this.imagepath = this.url.storagepath;
  }
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.url.albumimageList(params["id"], params["page"])
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
  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      const fd = new FormData();
      fd.append("image", this.selectedFile);
      fd.append("album", params["id"]);
      console.log(fd);
      this.url.albumimageCreate(fd)
        .subscribe((data) => {
          this.ngOnInit();
        });
    });
  }
  deleteimage(id) {
    this.url.albumimageDelete(id)
      .subscribe((data) => {
        this.Notify.onSuccess(
          "Your Request was successfull proccesed",
          "Delete Successfully"
        );
        this.ngOnInit();
      });
  }
}
