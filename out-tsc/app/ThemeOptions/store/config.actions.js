import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
var ConfigActions = /** @class */ (function () {
    function ConfigActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ConfigActions_1 = ConfigActions;
    ConfigActions.prototype.getConfig = function () {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_GET,
        });
    };
    ConfigActions.prototype.updateConfig = function (config) {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_UPDATE,
            payload: config
        });
    };
    var ConfigActions_1;
    ConfigActions.CONFIG_GET = 'CONFIG_GET';
    ConfigActions.CONFIG_UPDATE = 'CONFIG_UPDATE';
    ConfigActions = ConfigActions_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgRedux])
    ], ConfigActions);
    return ConfigActions;
}());
export { ConfigActions };
//# sourceMappingURL=config.actions.js.map