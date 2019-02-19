import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "index.html", component: HomeComponent },
  {
    path: "album-detail/:id/:page",
    component: AlbumDetailComponent
  },
  {
    path: "album/:page",
    component: AlbumListComponent
  },
  {
    path: "team/:page",
    component: TeamComponent
  },
  {
    path: "contact-us.html",
    component: ContactUsComponent
  },
  {
    path: "about-us.html",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
