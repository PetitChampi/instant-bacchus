import app from '.';
import "./controllers";
import { ProcessManager } from "common";

class ExpressProcessManager implements ProcessManager {
  private _server: any;

  create() {
    this._server = app.listen(parseInt(process.env.SERVER_PORT || '3000', 10), "0.0.0.0");
    return Promise.resolve();
  }

  destroy() {
    console.log("Stopping Express Server");
    this._server.stop();
    return Promise.resolve();
  }
};

export default new ExpressProcessManager();