import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumImagesComponent } from "./album-images/album-images.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumNewComponent } from "./album-new/album-new.component";
import { AlbumEditComponent } from "./album-edit/album-edit.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamNewComponent } from "./team-new/team-new.component";
import { TeamEditComponent } from "./team-edit/team-edit.component";
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesNewComponent } from './services-new/services-new.component';
import { ServicesEditComponent } from './services-edit/services-edit.component';
import { PageImageListComponent } from './page-image-list/page-image-list.component';
import { PageImageNewComponent } from './page-image-new/page-image-new.component';
import { PageImageEditComponent } from './page-image-edit/page-image-edit.component';

const routes: Routes = [
  {
    path: "album-images/:id/:page",
    component: AlbumImagesComponent
  },
  {
    path: "album-list/:page",
    component: AlbumListComponent
  },
  {
    path: "album-new",
    component: AlbumNewComponent
  },
  {
    path: "album-edit/:id",
    component: AlbumEditComponent
  },
  {
    path: "team-list/:page",
    component: TeamListComponent
  },
  {
    path: "team-new",
    component: TeamNewComponent
  },
  {
    path: "team-edit/:id",
    component: TeamEditComponent
  },
  {
    path: "service-list/:page",
    component: ServicesListComponent
  },
  {
    path: "service-new",
    component: ServicesNewComponent
  },
  {
    path: "service-edit/:id",
    component: ServicesEditComponent
  },
  {
    path: "page-image-list/:page",
    component: PageImageListComponent
  },
  {
    path: "page-image-new",
    component: PageImageNewComponent
  },
  {
    path: "page-image-edit/:id",
    component: PageImageEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
