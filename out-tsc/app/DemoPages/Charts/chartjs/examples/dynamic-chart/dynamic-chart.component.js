import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DynamicChartComponent = /** @class */ (function () {
    function DynamicChartComponent() {
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    DynamicChartComponent.prototype.ngOnInit = function () {
    };
    // events
    DynamicChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DynamicChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DynamicChartComponent.prototype.randomize = function () {
        this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    };
    DynamicChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dynamic-chart',
            templateUrl: './dynamic-chart.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DynamicChartComponent);
    return DynamicChartComponent;
}());
export { DynamicChartComponent };
//# sourceMappingURL=dynamic-chart.component.js.map