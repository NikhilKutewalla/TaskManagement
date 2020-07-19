import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ConfigActions } from '../../ThemeOptions/store/config.actions';
import { ThemeOptions } from '../../theme-options';
import { animate, query, style, transition, trigger } from '@angular/animations';
var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(globals, configActions) {
        this.globals = globals;
        this.configActions = configActions;
    }
    BaseLayoutComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    tslib_1.__decorate([
        select('config'),
        tslib_1.__metadata("design:type", Observable)
    ], BaseLayoutComponent.prototype, "config$", void 0);
    BaseLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-base-layout',
            templateUrl: './base-layout.component.html',
            animations: [
                trigger('architectUIAnimation', [
                    transition('* <=> *', [
                        query(':enter, :leave', [
                            style({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                transform: 'translateY(-20px)',
                                flexDirection: 'column'
                            }),
                        ]),
                        query(':enter', [
                            animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                        ]),
                        query(':leave', [
                            animate('600ms ease', style({ opacity: 0, transform: 'translateY(-20px)' })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeOptions, ConfigActions])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());
export { BaseLayoutComponent };
//# sourceMappingURL=base-layout.component.js.map