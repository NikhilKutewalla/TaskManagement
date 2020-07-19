import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { ThemeOptions } from '../../../theme-options';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(globals, activatedRoute) {
        this.globals = globals;
        this.activatedRoute = activatedRoute;
        this.activeId = 'dashboardsMenu';
    }
    SidebarComponent.prototype.toggleSidebar = function () {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    };
    SidebarComponent.prototype.sidebarHover = function () {
        this.globals.sidebarHover = !this.globals.sidebarHover;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.innerWidth = window.innerWidth;
            if (_this.innerWidth < 1200) {
                _this.globals.toggleSidebar = true;
            }
        });
        this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
    };
    SidebarComponent.prototype.onResize = function (event) {
        this.newInnerWidth = event.target.innerWidth;
        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        }
        else {
            this.globals.toggleSidebar = false;
        }
    };
    tslib_1.__decorate([
        select('config'),
        tslib_1.__metadata("design:type", Observable)
    ], SidebarComponent.prototype, "config$", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], SidebarComponent.prototype, "onResize", null);
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeOptions, ActivatedRoute])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map