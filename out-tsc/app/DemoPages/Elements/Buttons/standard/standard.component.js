import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var StandardComponent = /** @class */ (function () {
    function StandardComponent() {
        this.heading = 'Standard Buttons';
        this.subheading = 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!';
        this.icon = 'pe-7s-plane icon-gradient bg-tempting-azure';
        this.progress = false;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    StandardComponent.prototype.startLoading = function () {
        var _this = this;
        this.progress = 0; // starts spinner
        setTimeout(function () {
            _this.progress = 0.5; // sets progress bar to 50%
            setTimeout(function () {
                _this.progress = 1; // sets progress bar to 100%
                setTimeout(function () {
                    _this.progress = false; // stops spinner
                }, 200);
            }, 500);
        }, 400);
    };
    StandardComponent.prototype.ngOnInit = function () {
    };
    StandardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-standard',
            templateUrl: './standard.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StandardComponent);
    return StandardComponent;
}());
export { StandardComponent };
//# sourceMappingURL=standard.component.js.map