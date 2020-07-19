import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{}],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        gridLines: {
                            color: 'rgba(255,0,0,0.3)',
                        },
                        ticks: {
                            fontColor: 'red',
                        }
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [pluginAnnotations];
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent.prototype.randomize = function () {
        for (var i = 0; i < this.lineChartData.length; i++) {
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                this.lineChartData[i].data[j] = this.generateNumber(i);
            }
        }
        this.chart.update();
    };
    LineChartComponent.prototype.generateNumber = function (i) {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };
    // events
    LineChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    LineChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    LineChartComponent.prototype.hideOne = function () {
        var isHidden = this.chart.isDatasetHidden(1);
        this.chart.hideDataset(1, !isHidden);
    };
    LineChartComponent.prototype.pushOne = function () {
        var _this = this;
        this.lineChartData.forEach(function (x, i) {
            var num = _this.generateNumber(i);
            var data = x.data;
            data.push(num);
        });
        this.lineChartLabels.push("Label " + this.lineChartLabels.length);
    };
    LineChartComponent.prototype.changeColor = function () {
        this.lineChartColors[2].borderColor = 'green';
        this.lineChartColors[2].backgroundColor = "rgba(0, 255, 0, 0.3)";
    };
    LineChartComponent.prototype.changeLabel = function () {
        this.lineChartLabels[2] = ['1st Line', '2nd Line'];
        // this.chart.update();
    };
    tslib_1.__decorate([
        ViewChild(BaseChartDirective),
        tslib_1.__metadata("design:type", BaseChartDirective)
    ], LineChartComponent.prototype, "chart", void 0);
    LineChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-line-chart',
            templateUrl: './line-chart.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());
export { LineChartComponent };
//# sourceMappingURL=line-chart.component.js.map