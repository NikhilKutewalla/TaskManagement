import * as tslib_1 from "tslib";
import { Component, HostBinding } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ThemeOptions } from '../../../theme-options';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(globals) {
        this.globals = globals;
    }
    Object.defineProperty(HeaderComponent.prototype, "isActiveAsGetter", {
        get: function () {
            return this.isActive;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    HeaderComponent.prototype.toggleHeaderMobile = function () {
        this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
    };
    tslib_1.__decorate([
        HostBinding('class.isActive'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderComponent.prototype, "isActiveAsGetter", null);
    tslib_1.__decorate([
        select('config'),
        tslib_1.__metadata("design:type", Observable)
    ], HeaderComponent.prototype, "config$", void 0);
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeOptions])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map