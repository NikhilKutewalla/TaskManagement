import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
var PagesLayoutComponent = /** @class */ (function () {
    function PagesLayoutComponent() {
    }
    PagesLayoutComponent.prototype.ngOnInit = function () {
    };
    PagesLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pages-layout',
            templateUrl: './pages-layout.component.html',
            animations: [
                trigger('architectUIAnimation', [
                    transition('* <=> *', [
                        query(':enter, :leave', [
                            style({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column'
                            }),
                        ]),
                        query(':enter', [
                            animate('600ms ease', style({ opacity: 1 })),
                        ]),
                        query(':leave', [
                            animate('600ms ease', style({ opacity: 0 })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PagesLayoutComponent);
    return PagesLayoutComponent;
}());
export { PagesLayoutComponent };
//# sourceMappingURL=pages-layout.component.js.map