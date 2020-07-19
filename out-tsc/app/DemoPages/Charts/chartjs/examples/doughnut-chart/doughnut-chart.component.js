import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DoughnutChartComponent = /** @class */ (function () {
    function DoughnutChartComponent() {
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [
            [350, 450, 100],
            [50, 150, 120],
            [250, 130, 70],
        ];
        this.doughnutChartType = 'doughnut';
    }
    DoughnutChartComponent.prototype.ngOnInit = function () {
    };
    // events
    DoughnutChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DoughnutChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DoughnutChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-doughnut-chart',
            templateUrl: './doughnut-chart.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
export { DoughnutChartComponent };
//# sourceMappingURL=doughnut-chart.component.js.map