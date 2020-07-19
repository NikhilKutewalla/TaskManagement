import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RadarChartComponent = /** @class */ (function () {
    function RadarChartComponent() {
        // Radar
        this.radarChartOptions = {
            responsive: true,
        };
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
    }
    RadarChartComponent.prototype.ngOnInit = function () {
    };
    // events
    RadarChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    RadarChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    RadarChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-radar-chart',
            templateUrl: './radar-chart.component.html',
            styleUrls: ['./radar-chart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RadarChartComponent);
    return RadarChartComponent;
}());
export { RadarChartComponent };
//# sourceMappingURL=radar-chart.component.js.map