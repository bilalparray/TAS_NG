import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Subject } from "rxjs";
import { TopNavViewModel } from "../models/view/top-nav.viewmodel";

@Injectable({
  providedIn: "root",
})
export class TopNavService extends BaseService {
  constructor() {
    super();
  }
  viewModel: TopNavViewModel = new TopNavViewModel();
  showSearch: boolean = true;
  sharedDataSubject: Subject<string> = new Subject<string>();

  updateSharedData(newData: string) {
    this.viewModel.receivedSearchValueFromAppComponent = newData;
    this.sharedDataSubject.next(newData);
  }
}
