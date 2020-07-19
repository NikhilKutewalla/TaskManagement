import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var PolarAreaChartComponent = /** @class */ (function () {
    function PolarAreaChartComponent() {
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    PolarAreaChartComponent.prototype.ngOnInit = function () {
    };
    // events
    PolarAreaChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PolarAreaChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PolarAreaChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-polar-area-chart',
            templateUrl: './polar-area-chart.component.html',
            styleUrls: ['./polar-area-chart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PolarAreaChartComponent);
    return PolarAreaChartComponent;
}());
export { PolarAreaChartComponent };
//# sourceMappingURL=polar-area-chart.component.js.map