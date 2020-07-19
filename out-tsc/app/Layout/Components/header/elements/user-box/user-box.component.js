import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ThemeOptions } from '../../../../../theme-options';
var UserBoxComponent = /** @class */ (function () {
    function UserBoxComponent(globals) {
        this.globals = globals;
    }
    UserBoxComponent.prototype.ngOnInit = function () {
    };
    UserBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-box',
            templateUrl: './user-box.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeOptions])
    ], UserBoxComponent);
    return UserBoxComponent;
}());
export { UserBoxComponent };
//# sourceMappingURL=user-box.component.js.map