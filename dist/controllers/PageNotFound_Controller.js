"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFound_Controller = (req, h) => {
    console.info(`[INFO] (${new Date().toUTCString()}) >> ${req.info.remoteAddress} just had a 404 error.`);
    return 'ERROR 404: Page not found, <a href="/">return to homepage</a>';
};
//# sourceMappingURL=PageNotFound_Controller.js.map