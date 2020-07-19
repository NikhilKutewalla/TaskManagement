import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.heading = 'Pagination';
        this.subheading = 'Basic and dynamic pagination for use in your next awesome application.';
        this.icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';
        this.page = 3;
        this.page3 = 3;
        this.page4 = 4;
        this.currentPage = 4;
        this.page2 = 5;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map