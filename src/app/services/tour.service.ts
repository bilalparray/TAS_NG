import { Injectable } from "@angular/core";
import { ShepherdService } from "angular-shepherd";
import { BaseService } from "./base.service";
import { Router } from "@angular/router";
import Shepherd from "shepherd.js";

@Injectable({
  providedIn: "root",
})
export class AppTourService extends BaseService {
  constructor(public shepherdService: ShepherdService, private router: Router) {
    super();
  }

  startTour() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);

    if (!this.shepherdService.isActive) {
      let defaultSteps = {
        classes: "shepherd-theme-arrows",
        scrollTo: false,
        cancelIcon: {
          enabled: true,
        },
        buttons: [
          {
            text: "skip",
            action: () => {
              document.body.removeChild(overlay);
              return handleSkip();
            },
          },
        ],
      };
      this.shepherdService.modal = true;
      this.shepherdService.defaultStepOptions = defaultSteps;
      this.shepherdService.addSteps([
        {
          title: "Categories",
          text: `Select different categories here`,
          attachTo: {
            element: ".common",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text shepherd-step-highlight",

          buttons: [
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.cancel();
              },
              text: "Skip",
              classes: "shepherd-button-secondary",
            },
            {
              action() {
                return this.next();
              },
              text: "Next",
            },
          ],
          id: "creating",
        },
        // {
        //   title: "Back Button",
        //   text: `Takes you back to previous page.`,
        //   attachTo: {
        //     element: ".back",
        //     on: "bottom",
        //   },
        //   classes:
        //     "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

        //   buttons: [
        //     {
        //       action() {
        //         document.body.style.overflow = "scroll";
        //         document.body.removeChild(overlay);
        //         return this.cancel();
        //       },
        //       text: "Skip",
        //       classes: "shepherd-button-secondary",
        //     },
        //     {
        //       action() {
        //         return this.back();
        //       },
        //       classes: "shepherd-button-secondary",
        //       text: "Back",
        //     },
        //     {
        //       action() {
        //         return this.next();
        //       },
        //       text: "Next",
        //     },
        //   ],
        //   id: "creating",
        // },
        {
          title: "Search",
          text: `Search any Converter.`,
          attachTo: {
            element: ".search",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

          buttons: [
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.cancel();
              },
              text: "Skip",
              classes: "shepherd-button-secondary",
            },
            {
              action() {
                return this.back();
              },
              classes: "shepherd-button-secondary",
              text: "Back",
            },
            {
              action() {
                return this.next();
              },
              text: "Next",
            },
          ],
          id: "creating",
        },
        {
          title: "Favorites",
          text: `Favorite converters list.`,
          attachTo: {
            element: ".favorites",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

          buttons: [
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.cancel();
              },
              text: "Skip",
              classes: "shepherd-button-secondary",
            },
            {
              action() {
                return this.back();
              },
              classes: "shepherd-button-secondary",
              text: "Back",
            },
            {
              action() {
                return this.next();
              },
              text: "Next",
            },
          ],
          id: "creating",
        },
        {
          title: "History",
          text: `List of last five used converters.`,
          attachTo: {
            element: ".history",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

          buttons: [
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.cancel();
              },
              text: "Skip",
              classes: "shepherd-button-secondary",
            },
            {
              action() {
                return this.back();
              },
              classes: "shepherd-button-secondary",
              text: "Back",
            },
            {
              action() {
                return this.next();
              },
              text: "Next",
            },
          ],
          id: "creating",
        },
        {
          title: "Settings",
          text: `Change themes and set precision.`,
          attachTo: {
            element: ".settings",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

          buttons: [
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.cancel();
              },
              text: "Skip",
              classes: "shepherd-button-secondary",
            },
            {
              action() {
                return this.back();
              },
              classes: "shepherd-button-secondary",
              text: "Back",
            },
            {
              action() {
                return this.next();
              },
              text: "Next",
            },
          ],
          id: "creating",
        },
        {
          title: "Choose Unit",
          text: `Select Any Unit to Convert. `,
          attachTo: {
            element: ".unit",
            on: "bottom",
          },
          classes:
            "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",

          buttons: [
            {
              action() {
                return this.back();
              },
              classes: "shepherd-button-secondary",
              text: "Back",
            },
            {
              action() {
                document.body.style.overflow = "scroll";
                document.body.removeChild(overlay);
                return this.next();
              },
              text: "Finish",
            },
          ],
          id: "creating",
        },
      ]);
      this.shepherdService.modal = true;
      this.shepherdService.confirmCancel = false;
      this.shepherdService.start();
    }
  }
}
function handleSkip() {
  throw new Error("Function not implemented.");
}
