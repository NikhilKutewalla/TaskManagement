import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AccordionsComponent = /** @class */ (function () {
    function AccordionsComponent() {
        this.heading = 'Accordions';
        this.subheading = 'Accordions represent collapsable component with extended functionality.';
        this.icon = 'pe-7s-diamond icon-gradient bg-warm-flame';
        this.isCollapsed = false;
    }
    AccordionsComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ;
    AccordionsComponent.prototype.ngOnInit = function () {
    };
    AccordionsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-accordions',
            templateUrl: './accordions.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AccordionsComponent);
    return AccordionsComponent;
}());
export { AccordionsComponent };
//# sourceMappingURL=accordions.component.js.map