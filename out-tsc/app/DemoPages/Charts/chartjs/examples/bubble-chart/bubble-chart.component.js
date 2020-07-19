import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent() {
        this.bubbleChartOptions = {
            responsive: true,
            scales: {
                xAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 30,
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 30,
                        }
                    }
                ]
            }
        };
        this.bubbleChartType = 'bubble';
        this.bubbleChartLegend = true;
        this.bubbleChartData = [
            {
                data: [
                    { x: 10, y: 10, r: 10 },
                    { x: 15, y: 5, r: 15 },
                    { x: 26, y: 12, r: 23 },
                    { x: 7, y: 8, r: 8 },
                ],
                label: 'Series A',
                backgroundColor: 'green',
                borderColor: 'blue',
                hoverBackgroundColor: 'purple',
                hoverBorderColor: 'red',
            },
        ];
        this.bubbleChartColors = [
            {
                backgroundColor: [
                    'red',
                    'green',
                    'blue',
                    'purple',
                    'yellow',
                    'brown',
                    'magenta',
                    'cyan',
                    'orange',
                    'pink'
                ]
            }
        ];
    }
    BubbleChartComponent.prototype.ngOnInit = function () {
    };
    // events
    BubbleChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BubbleChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BubbleChartComponent.prototype.rand = function (max) {
        return Math.trunc(Math.random() * max);
    };
    BubbleChartComponent.prototype.randomPoint = function (maxCoordinate) {
        var x = this.rand(maxCoordinate);
        var y = this.rand(maxCoordinate);
        var r = this.rand(30) + 5;
        return { x: x, y: y, r: r };
    };
    BubbleChartComponent.prototype.randomize = function () {
        var _this = this;
        var numberOfPoints = this.rand(5) + 5;
        var data = Array.apply(null, { length: numberOfPoints }).map(function (r) { return _this.randomPoint(30); });
        this.bubbleChartData[0].data = data;
    };
    BubbleChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bubble-chart',
            templateUrl: './bubble-chart.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BubbleChartComponent);
    return BubbleChartComponent;
}());
export { BubbleChartComponent };
//# sourceMappingURL=bubble-chart.component.js.map