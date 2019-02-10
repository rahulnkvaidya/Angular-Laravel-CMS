import { Injectable } from "@angular/core";
import {
  SnotifyService,
  SnotifyPosition,
  SnotifyToastConfig
} from "ng-snotify";

@Injectable({
  providedIn: "root"
})
export class NotifyService {
  style = "material";
  title = "Snotify title!";
  body = "Lorem ipsum dolor sit amet!";
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.rightTop;
  progressBar = true;
  closeClick = true;
  newTop = true;
  filterDuplicates = false;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 80;
  bodyMaxLength = 80;

  constructor(private snotifyService: SnotifyService) {}

  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax
        //  filterDuplicates: this.filterDuplicates,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }
  getwaitConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax
        //  filterDuplicates: this.filterDuplicates,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: 0,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }
  onSuccess(body: string, title: string) {
    this.snotifyService.success(body, title, this.getConfig());
  }
  onInfo(body: string, title: string) {
    this.snotifyService.info(body, title, this.getConfig());
  }
  onwaitInfo() {
    this.snotifyService.info(
      "Please Wait We are processing your Request",
      "Wait",
      this.getwaitConfig()
    );
  }
  onError(body: string, title: string) {
    this.snotifyService.error(body, title, this.getConfig());
  }
  onWarning(body: string, title: string) {
    this.snotifyService.warning(body, title, this.getConfig());
  }
  onSimple(body: string, title: string) {
    // const icon = `assets/custom-svg.svg`;
    const icon = `https://placehold.it/48x100`;

    this.snotifyService.simple(this.body, this.title, {
      ...this.getConfig(),
      icon: icon
    });
  }
  onClear() {
    this.snotifyService.clear();
  }
}
