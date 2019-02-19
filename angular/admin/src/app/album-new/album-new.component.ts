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
  selector: "app-album-new",
  templateUrl: "./album-new.component.html",
  styleUrls: ["./album-new.component.css"]
})
export class AlbumNewComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    title: ["", Validators.required]
  });

  Data: Object;
  public error;
  options: Object;
  selectedFile: File = null;

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

  ngOnInit() {}

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    const fd = new FormData();
    const value = this.profileForm.value;

    fd.append("title", this.profileForm.value.title);
    fd.append("photo", this.selectedFile, this.selectedFile.name);
    console.log(fd);

    this.url.albumnew(fd)
      .subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      );
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
    // this.router.navigateByUrl("/job-list/1");
  }
}

