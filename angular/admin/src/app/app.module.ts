import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from "ng2-ckeditor";
import { NotifyService } from "./services/notify.service";
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
import { MyNavComponent } from "./my-nav/my-nav.component";
import { HomeComponent } from "./home/home.component";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    NotifyService,
    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
