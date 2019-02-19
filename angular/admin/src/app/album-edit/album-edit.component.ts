import { Component, ViewChild, OnInit } from "@angular/core";
import {
  FormArray,
  NgForm,
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UrlService } from '../services/url.service';

@Component({
  selector: "app-album-edit",
  templateUrl: "./album-edit.component.html",
  styleUrls: ["./album-edit.component.css"]
})
export class AlbumEditComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    id: [""],
    title: ["", Validators.required]
  });
  job: Object;
  Data: Object;
  public error;
  options: Object;
  selectedFile: File = null;
  public fname;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private url: UrlService
  ) {
    this.options = {
      removePlugins:
        "colorbutton,colordialog,find,font,format,image,link,sourcearea",
      removeButtons: "Strike,Subscript,Superscript,PasteFromWord",
      toolbarGroups: [
        //{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: "basicstyles", groups: ["basicstyles"] },
        { name: "paragraph", groups: ["list", "indent"] },
        { name: "styles", groups: ["Styles", "Format"] },
        { name: "insert", groups: ["Table", "HorizontalRule"] },
        { name: "tools" }
        //{ name: 'document',	   groups: [ 'mode' ] }
      ]
    };
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.url.albumRead(params["id"])
        .subscribe((data) => {
          this.job = data;
          this.profileForm.patchValue({
            id: this.job["id"],
            title: this.job["title"]
          });
        });
    });
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    const fd = new FormData();
    fd.append("id", this.profileForm.value.id);
    fd.append("title", this.profileForm.value.title);
    fd.append("image", this.selectedFile);
    console.log(fd);
    this.url.albumUpdate(fd)
      .subscribe(
        (data) => {
          this.job = data;
          console.log(this.job);
        },
        (error) => {
          this.error = error;
          console.log(this.error);
        }
      );
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl("admin/courses-list/1");
  }
}
