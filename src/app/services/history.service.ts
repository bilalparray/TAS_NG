import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { AppConstants } from "src/app-constants";

@Injectable({
  providedIn: "root",
})
export class HistoryService {
  private history: any[] = [];

  constructor(private storageService: StorageService) {}

  saveHistory() {
    try {
      this.storageService.saveToStorage(
        AppConstants.DbKeys.HISTORY,
        this.history
      );
    } catch (error) {
      console.error("Error saving history:", error);
    }
  }

  // private updateHistory(unit: string) {
  //   // Update history array in memory
  //   const index = this.history.indexOf(unit);

  //   if (index !== -1) {
  //     // If unit is already in history, move it to the front without modifying the length
  //     this.history.splice(index, 1);
  //   } else {
  //     // Add the new unit to the front
  //     this.history.unshift(unit);

  //     // Ensure that the history array does not exceed the maximum length
  //     if (this.history.length > 6) {
  //       this.history.pop();
  //     }
  //   }

  //   // Save the updated history to local storage
  //   // this.saveHistory();
  // }

  addToHistory(unit: string) {
    this.history.unshift(unit);
    if (this.history.length > 6) {
      this.history.pop();
    }
    this.saveHistory();
  }

  clearHistory() {
    this.history = [];
    // localStorage.removeItem(HISTORY_KEY);
    this.storageService.removeFromStorage(AppConstants.DbKeys.HISTORY);
  }
}
