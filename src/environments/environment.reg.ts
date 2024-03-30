export const environment = {
  production: true,
  apiResponseCacheTimeoutInMinutes: 5,
  enableResponseCacheProcessing: true,
  applicationVersion: '0.0.1',
  apiBaseUrl: 'reg_url',
  apiDefaultTimeout: 10,
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

  
  playstoreLink:
    "https://play.google.com/store/apps/details?id=com.rovio.baba&hl=en&gl=US", ///to be changed to actual app play store url
  appStoreLink: "", //to be channged for app store link
  GoogleAdsInfo: {
    appId: 'ca-app-pub-2369888874710587~756492074',
    showAds: false,
    bannerId: 'ca-app-pub-2369888874710587/214450845',
    showBannerAds: true,
  },
  applicationReleaseDate: new Date("2024-01-01"),

};
