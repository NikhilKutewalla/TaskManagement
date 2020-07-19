import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var PrimaryWhite = '#fff';
var SecondaryGrey = '#ccc';
var PrimaryRed = 'var(--danger)';
var SecondaryBlue = 'var(--primary)';
var CardsComponent = /** @class */ (function () {
    function CardsComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.heading = 'Cards';
        this.subheading = 'Wide selection of cards with multiple styles, borders, actions and hover effects.';
        this.icon = 'pe-7s-stopwatch icon-gradient bg-amy-crisp';
    }
    CardsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], CardsComponent);
    return CardsComponent;
}());
export { CardsComponent };
//# sourceMappingURL=cards.component.js.map