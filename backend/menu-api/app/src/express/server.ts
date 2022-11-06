import app from '.';
import "./controllers";
import { ProcessManager } from "common";

class ExpressProcessManager implements ProcessManager {
  private _server: any;

  create() {
    this._server = app.listen(3000);
    return Promise.resolve();
  }

  destroy() {
    console.log("Stopping Express Server");
    this._server.stop();
    return Promise.resolve();
  }
};

export default new ExpressProcessManager();