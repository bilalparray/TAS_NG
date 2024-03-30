import { AppConstants } from "src/app-constants";
import { StorageService } from "src/app/services/storage.service";
import { environment } from "src/environments/environment";
import { LoggerClient } from "../logger.client";
import { LogLocation } from "src/app/models/internal/log-location";
import { LogType } from "src/app/models/internal/log-type";
import { LoggerConfig } from "src/app/models/internal/logger-config";
import { ApiRequest } from "src/app/models/service/api-contracts/base/api-request";
import { ErrorLog } from "src/app/models/service/api-contracts/error-log";


export class CommonLogger {


    private static storageService: StorageService;

    private static loggerConfig: LoggerConfig
        = (() => { return CommonLogger.GetDefaultLoggerConfigObject() })(); // self executing setter

    private static loggerClient: LoggerClient
        = (() => { return new LoggerClient(); })(); // self executing setter

    // static file: File
    constructor() {
        throw new Error('Cannot instantiate static class "Logger".');
    }

    private static GetDefaultLoggerConfigObject(): LoggerConfig {
        const logConfig = new LoggerConfig();
        logConfig.exceptionLogLocations = [];
        logConfig.logLocations = [];
        if (environment.LoggingInfo.logToConsole)
            logConfig.logLocations.push(LogLocation.Console);
        if (environment.LoggingInfo.logToApi)
            logConfig.logLocations.push(LogLocation.Api);
        if (environment.LoggingInfo.logToElasticCluster)
            logConfig.logLocations.push(LogLocation.ElasticCluster);
        if (environment.LoggingInfo.exceptionToApi)
            logConfig.exceptionLogLocations.push(LogLocation.Api);

        if (environment.LoggingInfo.exceptionToConsole)
            logConfig.exceptionLogLocations.push(LogLocation.Console);
        if (environment.LoggingInfo.exceptionToElasticCluster)
            logConfig.exceptionLogLocations.push(LogLocation.ElasticCluster);
        if (environment.LoggingInfo.exceptionToFile)
            logConfig.exceptionLogLocations.push(LogLocation.File);
        if (logConfig.exceptionLogLocations.length == 0)
            logConfig.exceptionLogLocations.push(LogLocation.None)
        if (logConfig.logLocations.length == 0)
            logConfig.logLocations.push(LogLocation.None)
        return logConfig;
    }

    static async LogException(data: Error) {
        try {
            if (this.loggerConfig.exceptionLogLocations.includes(LogLocation.None))
                return;
            if (this.loggerConfig.exceptionLogLocations.includes(LogLocation.Console))
                console.log(data);
            if (this.loggerConfig.exceptionLogLocations.includes(LogLocation.File))
                await this.AddItemToFile(LogType.Log, data);
            if (this.loggerConfig.exceptionLogLocations.includes(LogLocation.Api))
                await this.AddItemToCommonApi(LogType.Log, data);
        } catch (error) {
            console.log(error);
        }
    }

    static async LogTextOrObject(data: any) {
        try {
            if (this.loggerConfig.logLocations.includes(LogLocation.Console))
                console.log(data);
            if (this.loggerConfig.logLocations.includes(LogLocation.File))
             await   this.AddItemToFile(LogType.Log, data);
        } catch (error) {
            console.log(error);
        }
    }

    private static async AddItemToFile(logType: LogType, data: Error) {
        return;//for now
        try {

        } catch (error) {

        }
        //code to add item to local file    
    }

    private static async AddItemToCommonApi(logType: LogType, data: Error) {
        // return; //for now
        try {
            let errorLogs: ErrorLog[] = [];
            let errorLog = new ErrorLog();
            if (this.storageService) {
                // errorLog.username = await this.storageService.getFromStorage(AppConstants.DbKeys.USER_ID);
                errorLog.platform = await this.storageService.getFromStorage(AppConstants.DbKeys.PLATFORM);
            }
            errorLog.name = data.name;
            errorLog.message = data.message;
            errorLog.stack = data.stack;
            errorLog.logType = logType;
            if (data.name === undefined)
                errorLog.name = data.toString();
            if (data.message === undefined)
                errorLog.message = data.toString();
            errorLog.createdDateUTC = new Date().toUTCString();
            errorLogs.push(errorLog);
            var logData: ApiRequest<ErrorLog[]> = new ApiRequest<ErrorLog[]>();
            logData.reqData = errorLogs;
            CommonLogger.loggerClient.SendLogsToServerAsync(errorLogs, null);
        } catch (error) {
            if (environment.LoggingInfo.logToConsole)
                console.log(error);
        }
    }
}