import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PageTitleComponent.prototype, "heading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PageTitleComponent.prototype, "subheading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PageTitleComponent.prototype, "icon", void 0);
    PageTitleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-page-title',
            templateUrl: './page-title.component.html',
        })
    ], PageTitleComponent);
    return PageTitleComponent;
}());
export { PageTitleComponent };
//# sourceMappingURL=page-title.component.js.map