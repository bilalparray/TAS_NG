import { environment } from 'src/environments/environment';

// TODO: MOVE ALL CONSTANTS HERE
export const AppConstants = {
  ApiUrls: {
    TEST_URL: 'test/test',
    LOG_URL: 'log',
    ACCOUNT_URL: 'api/token',
    DUMMY_TEACHER_URL: 'api/DummyTeacher',
    DUMMY_STUDENT_URL: 'api/token',
    PLAYERS: '/api/players',
    ADDPLAYER: '/api/data',
    APP_VERSIONING: '/api/updateapp',
    ManOfTheMatch: '/api/mom',
  },

  AppSpecific: {},

  DbKeys: {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    LOGIN_USER: 'LOGIN_USER',
    API_RESP_CACHE: 'API_RESP_CACHE',
    PLATFORM: 'PLATFORM',
    REMEMBER_PWD: 'REMEMBER_PWD',
    COMPANY_CODE: 'COMPANY_CODE',
  },
  DbDefaultValues: {},
  ErrorPrompts: {
    App_StartError: 'Error occured. Please restart the application.',
    Load_Data_Error: 'Error in loading data. Please try again.',
    Invalid_Input_Data: 'Invalid data.Please try again.',
    Unknown_Error: 'Error occured. Please try again.',
    Network_Error: 'Please check network and try again.',
    Save_Data_Error: 'Error in saving. Please try again.',
    Delete_Data_Error: 'Error in delete. Please try again.',
    Permission_Error: 'Permission denied.',
    Unauthorized_User: 'User not authorized. Please relogin.',
  },
  HeadersName: {
    ApiType: 'targetapitype',
    DevApk: 'isdeveloperapk',
    AppVersion: 'appversion',
    CORS_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
    CORS_ALLOW_METHODS: 'Access-Control-Allow-Methods',
    CORS_ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials',
  },
  HeadersValue: {
    ApiType: 'abcd',
    DevApk: (!environment.production).toString(),
    AppVersion: environment.applicationVersion,
    CORS_ALLOW_ORIGIN: 'http://localhost:4200',
    CORS_ALLOW_METHODS: 'GET, POST, OPTIONS, DELETE, PUT',
    CORS_ALLOW_CREDENTIALS: 'true',
  },
  WebRoutes: {
    SAMPLE: 'sample',
    TEACHERS: 'teachers',
    UNAUTHORIZED: '',
    LOGIN: 'login',
    HOME: 'home',
  },
  Token_Info_Keys: {
    Role: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    Expiry: 'exp',
    CompanyCode: 'clCd',
    Audience: 'aud',
    CompanyId: 'clId',
    RecordId: 'dbRId',
    EmailAddress:
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
    UserName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    GivenName:
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname',
    Issuer: 'iss',
    TokenStart: 'nbf',
  },
};
