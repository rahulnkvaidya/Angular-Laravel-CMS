import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WebsiteComponent } from "./website.component";

const routes: Routes = [
  {
    path: "",
    component: WebsiteComponent
  },
  {
    path: "team/:page",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
