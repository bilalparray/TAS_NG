import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ZoomService {
  private zoomFactor = 1.0;

  getZoomFactor(): number {
    return this.zoomFactor;
  }

  setZoomFactor(factor: number): void {
    this.zoomFactor = factor;
  }
}
