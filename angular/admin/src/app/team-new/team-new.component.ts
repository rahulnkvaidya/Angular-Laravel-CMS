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
  selector: "app-team-new",
  templateUrl: "./team-new.component.html",
  styleUrls: ["./team-new.component.css"]
})
export class TeamNewComponent implements OnInit {
  @ViewChild("profileForm")
  formValues;
  profileForm = this.fb.group({
    name: ["", Validators.required],
    tag_line: [""],
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

    fd.append("name", this.profileForm.value.name);
    fd.append("css", this.profileForm.value.css);
    fd.append("tag_line", this.profileForm.value.tag_line);
    fd.append("description", this.profileForm.value.description);
    fd.append("photo", this.selectedFile);
    console.log(fd);

    this.url.teamCreate(fd)
    .subscribe();
  }
  handleError(error) {
    this.error = error.error.message;
  }
  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl("admin/courses-list/1");
  }
}
