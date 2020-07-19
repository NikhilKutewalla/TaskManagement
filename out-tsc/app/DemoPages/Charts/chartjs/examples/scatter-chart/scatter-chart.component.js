import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ScatterChartComponent = /** @class */ (function () {
    function ScatterChartComponent() {
        // scatter
        this.scatterChartOptions = {
            responsive: true,
        };
        this.scatterChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.scatterChartData = [
            {
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 3 },
                    { x: 3, y: -2 },
                    { x: 4, y: 4 },
                    { x: 5, y: -3 },
                ],
                label: 'Series A',
                pointRadius: 10,
            },
        ];
        this.scatterChartType = 'scatter';
    }
    ScatterChartComponent.prototype.ngOnInit = function () {
    };
    // events
    ScatterChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    ScatterChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    ScatterChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-scatter-chart',
            templateUrl: './scatter-chart.component.html',
            styleUrls: ['./scatter-chart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ScatterChartComponent);
    return ScatterChartComponent;
}());
export { ScatterChartComponent };
//# sourceMappingURL=scatter-chart.component.js.map