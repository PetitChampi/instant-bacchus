"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor(context = 'unknown', method = 'unknown') {
        this._context = context;
        this._method = method;
    }
    static from(context = 'unknown', method = 'unknown') {
        return new Logger(context, method);
    }
    setMethod(method) {
        return new Logger(this._context, method);
    }
    log(logline) {
        const logValues = {
            context: Logger.CHALK.blue(this._context),
            method: Logger.CHALK.cyan(this._method),
            logline: Logger.CHALK.white(logline)
        };
        // each value is a fn declaration so that it only runs when called
        const logOutputs = {
            text: () => Object.values(logValues).join(" - "),
            json: () => JSON.stringify(logValues)
        };
        !!logOutputs[Logger.OUTPUT_MODE] && console.log(logOutputs[Logger.OUTPUT_MODE]());
    }
}
// defining logger output mode: json/text (text for local dev & json for prod)
Logger.OUTPUT_MODE = ((_a = process.env.LOGGER_OUTPUT_MODE) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || `text`;
Logger.CHALK = new chalk_1.default.Instance({ level: Logger.OUTPUT_MODE === `text` ? 3 : 0 });
exports.default = Logger;
