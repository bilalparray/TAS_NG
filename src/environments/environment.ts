// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiResponseCacheTimeoutInMinutes: 5,
  enableResponseCacheProcessing: true,
  applicationVersion: '0.0.8', //on this we are checking curruent version and api version then allowing user to use the app if he has updated version.
  apiDefaultTimeout: 10,
  apiBaseUrl: 'https://environmental-antonetta-bilalparray-82a778b4.koyeb.app/',
  // apiBaseUrl: 'http://localhost:3000',

  controlAds: {
    showAds: false,
    showAdsenseAds: true,
    showAdMobAds: true,
    showAdsenseBannerAds: true,
    showAdMobBannerAds: true,
    admobAppId: 'ca-app-pub-5495185583121040~',
    admobBannerAdUnitId: 'ca-app-pub-5495185583121040/',
    adsensePubId: 'ca-pub-9678211037324376',
    adsenseAdSlotId: '1416242989',
    adsenseBannerAdsHeight: 150, //px
    adsenseBannerAdsWidth: 320, //px
  },
  LoggingInfo: {
    cacheLogs: true,
    logToConsole: true,
    logToFile: false,
    logToApi: false,
    logToElasticCluster: false,
    exceptionToConsole: true,
    exceptionToFile: false,
    exceptionToApi: false,
    exceptionToElasticCluster: false,
    localLogFilePath: 'Sample.log',
  },
  encryptionKey: '12345678',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
