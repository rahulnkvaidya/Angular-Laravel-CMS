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
  selector: 'app-page-image-new',
  templateUrl: './page-image-new.component.html',
  styleUrls: ['./page-image-new.component.css']
})
export class PageImageNewComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    pagename: ["", Validators.required],
    position: [""]
  });

  Data: Object;
  public error;
  options: Object;
  selectedFile: File = null;

  cssvalue = [
    { style: "grape-9", name: "grape-9" },
    { style: "violet-9", name: "violet-9" },
    { style: "yellow-4", name: "yellow-4" },
    { style: "yellow-7", name: "yellow-7" },
    { style: "cyan-5", name: "cyan-5" },
    { style: "bg-primary", name: "bg-primary" }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private url: UrlService
  ) {}

  ngOnInit() {}
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    const fd = new FormData();
    const value = this.profileForm.value;

    fd.append("pagename", this.profileForm.value.pagename);
    fd.append("position", this.profileForm.value.position);
    fd.append("image", this.selectedFile);
    console.log(fd);
    this.url.pageTopImageCreate(fd)
      .subscribe((data)=>{
        console.log('done');
      });
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
  }
}
