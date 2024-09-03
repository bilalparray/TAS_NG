export const environment = {
  production: true,
  apiResponseCacheTimeoutInMinutes: 5,
  enableResponseCacheProcessing: true,
  applicationVersion: '0.0.8',
  apiBaseUrl: 'https://teamawesomebackend-sgsc.onrender.com',
  apiDefaultTimeout: 10,

  controlAds: {
    showAds: true,
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
    cacheLogs: false,
    cacheLogsToConsole: true,
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
