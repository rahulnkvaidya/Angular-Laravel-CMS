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

@Component({
  selector: 'app-services-new',
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.css']
})
export class ServicesNewComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    title: ["", Validators.required],
    css: [""],
    description: [""]
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
    private http: HttpClient
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
    fd.append("css", this.profileForm.value.css);
    fd.append("description", this.profileForm.value.description);
    fd.append("image", this.selectedFile);
    console.log(fd);

    this.http
      .post(`http://rpsrobosoft.com/laravel/public/api/service`, fd)
      .subscribe();
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl("admin/service-list/1");
  }
}
