import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
        this.heading = 'Modals';
        this.subheading = 'Wide selection of modal dialogs styles and animations available.';
        this.icon = 'pe-7s-phone icon-gradient bg-premium-dark';
    }
    ModalsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalsComponent.prototype.openCentred = function (content) {
        this.modalService.open(content, { centered: true });
    };
    ModalsComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, {
            size: 'sm'
        });
    };
    ModalsComponent.prototype.openLarge = function (content) {
        this.modalService.open(content, {
            size: 'lg'
        });
    };
    ModalsComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-modals',
            templateUrl: './modals.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], ModalsComponent);
    return ModalsComponent;
}());
export { ModalsComponent };
//# sourceMappingURL=modals.component.js.map