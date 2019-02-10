import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumImagesComponent } from "./album-images/album-images.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumNewComponent } from "./album-new/album-new.component";
import { AlbumEditComponent } from "./album-edit/album-edit.component";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamNewComponent } from "./team-new/team-new.component";
import { TeamEditComponent } from "./team-edit/team-edit.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
