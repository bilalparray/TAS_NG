// time-zone-conversion.service.ts
import { Injectable } from "@angular/core";
import * as moment from "moment-timezone";

@Injectable({
  providedIn: "root",
})
export class TimeZoneConversionService {
  getAllTimeZones(): string[] {
    return moment.tz.names();
  }

  convertTimeZone(inputDateTime: string, destinationTimeZone: string): string {
    try {
      console.log("Input DateTime:", inputDateTime);
      console.log("Destination Time Zone:", destinationTimeZone);

      const convertedDateTime = moment.tz(inputDateTime, destinationTimeZone);
      console.log("Converted DateTime:", convertedDateTime);

      const formattedDateTime = convertedDateTime.format("YYYY-DD-MM HH:mm:ss");
      console.log("Formatted DateTime:", formattedDateTime);

      return formattedDateTime;
    } catch (error) {
      console.error("Error converting time zone:", error);
      return "Invalid Date and Time";
    }
  }
}
