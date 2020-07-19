import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.height = '20px';
        this.heading = 'Progress Bar';
        this.subheading = 'You can use the progress bars on their own or in combination with other widgets.';
        this.icon = 'pe-7s-filter icon-gradient bg-grow-early';
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    ProgressBarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-progress-bar',
            templateUrl: './progress-bar.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
//# sourceMappingURL=progress-bar.component.js.map