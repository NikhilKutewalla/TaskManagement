import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.heading = 'Timelines';
        this.subheading = 'Timelines are used to show lists of notifications, tasks or actions in a beautiful way.';
        this.icon = 'pe-7s-light icon-gradient bg-malibu-beach';
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = tslib_1.__decorate([
        Component({
            selector: 'app-timeline',
            templateUrl: './timeline.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());
export { TimelineComponent };
//# sourceMappingURL=timeline.component.js.map