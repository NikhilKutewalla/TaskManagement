import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var COUNTRIES = [
    {
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
    },
    {
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
    },
    {
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
    },
    {
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
    }
];
var RegularComponent = /** @class */ (function () {
    function RegularComponent() {
        this.heading = 'Regular Tables';
        this.subheading = 'Tables are the backbone of almost all web applications.';
        this.icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
        this.countries = COUNTRIES;
    }
    RegularComponent.prototype.ngOnInit = function () {
    };
    RegularComponent = tslib_1.__decorate([
        Component({
            selector: 'app-regular',
            templateUrl: './regular.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RegularComponent);
    return RegularComponent;
}());
export { RegularComponent };
//# sourceMappingURL=regular.component.js.map