// import Chalk from "chalk";

class Logger {

  // defining logger output mode: json/text (text for local dev & json for prod)
  static OUTPUT_MODE = process.env.LOGGER_OUTPUT_MODE?.toLowerCase() || `text`;

  // static CHALK = new Chalk.Instance({level: Logger.OUTPUT_MODE === `text` ? 3 : 0});

  static CHALK: Record<string, ((param: string) => string)> = {
    blue: (param: string): string => param,
    cyan: (param: string): string => param,
    white: (param: string): string => param
  }

  static from(context = 'unknown', method = 'unknown') {
    return new Logger(context, method);
  }

  private readonly _context: string;
  private readonly _method: string;

  constructor(context: string = 'unknown', method: string = 'unknown') {
    this._context = context;
    this._method = method;
  }

  setMethod(method: string) {
    return new Logger(
      this._context,
      method
    );
  }

  log(logline: string) {

    const logValues: Record<string, string> = {
      context: Logger.CHALK.blue(this._context),
      method: Logger.CHALK.cyan(this._method),
      logline: Logger.CHALK.white(logline)
    };

    // each value is a fn declaration so that it only runs when called
    const logOutputs: Record<string, () => string> = {
      text: () => Object.values(logValues).join(" - "),
      json: () => JSON.stringify(logValues)
    };

    !!logOutputs[Logger.OUTPUT_MODE] && console.log(logOutputs[Logger.OUTPUT_MODE]());
  }
}

export default Logger;