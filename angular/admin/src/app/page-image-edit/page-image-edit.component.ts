import { Component, ViewChild, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  selector: 'app-page-image-edit',
  templateUrl: './page-image-edit.component.html',
  styleUrls: ['./page-image-edit.component.css']
})
export class PageImageEditComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    id: [""],
    pagename: ["", Validators.required],
    position: [""]
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
    private http: HttpClient,
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
      this.url.pageTopImageRead(params["id"])
        .subscribe((data) => {
          this.job = data;
          this.profileForm.patchValue({
            id: this.job["id"],
            pagename: this.job["pagename"],
            position: this.job["position"]
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
    fd.append("pagename", this.profileForm.value.pagename);
    fd.append("position", this.profileForm.value.position);
    fd.append("image", this.selectedFile);
    console.log(fd);
    this.url.pageTopImageUpdate(fd)
      .subscribe();
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl("admin/page-image/1");
  }
}
