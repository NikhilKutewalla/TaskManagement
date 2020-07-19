import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                }
            }
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [pluginDataLabels];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    BarChartComponent.prototype.ngOnInit = function () {
    };
    // events
    BarChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarChartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        this.barChartData[0].data = data;
    };
    BarChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bar-chart',
            templateUrl: './bar-chart.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());
export { BarChartComponent };
//# sourceMappingURL=bar-chart.component.js.map