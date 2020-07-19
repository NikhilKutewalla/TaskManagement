import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.heading = 'Tabs';
        this.subheading = 'Tabs are used to split content between multiple sections. Wide variety available.';
        this.icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
        this.currentJustify = 'start';
        this.currentJustify2 = 'center';
        this.currentJustify3 = 'start';
        this.currentOrientation = 'horizontal';
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map