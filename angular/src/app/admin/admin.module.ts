import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AlbumImagesComponent } from "./album-images/album-images.component";
import { AlbumEditComponent } from "./album-edit/album-edit.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumNewComponent } from "./album-new/album-new.component";
import { ServicesEditComponent } from "./services-edit/services-edit.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import { ServicesNewComponent } from "./services-new/services-new.component";
import { TeamEditComponent } from "./team-edit/team-edit.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamNewComponent } from "./team-new/team-new.component";
import { SnotifyModule } from "ng-snotify";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "ng2-ckeditor";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [
    AlbumImagesComponent,
    AlbumEditComponent,
    AlbumListComponent,
    AlbumNewComponent,
    ServicesEditComponent,
    ServicesListComponent,
    ServicesNewComponent,
    TeamEditComponent,
    TeamListComponent,
    TeamNewComponent,
    MyNavComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SnotifyModule,
    CKEditorModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class AdminModule {}
