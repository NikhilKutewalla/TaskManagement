import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        // Pie
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            plugins: {
                datalabels: {
                    formatter: function (value, ctx) {
                        var label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [pluginDataLabels];
        this.pieChartColors = [
            {
                backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
            },
        ];
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    // events
    PieChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PieChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PieChartComponent.prototype.changeLabels = function () {
        var words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
            'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
            'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
            'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
            'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
        var randomWord = function () { return words[Math.trunc(Math.random() * words.length)]; };
        this.pieChartLabels = Array.apply(null, { length: 3 }).map(function (_) { return randomWord(); });
    };
    PieChartComponent.prototype.addSlice = function () {
        this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
        this.pieChartData.push(400);
        this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    };
    PieChartComponent.prototype.removeSlice = function () {
        this.pieChartLabels.pop();
        this.pieChartData.pop();
        this.pieChartColors[0].backgroundColor.pop();
    };
    PieChartComponent.prototype.changeLegendPosition = function () {
        this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
    };
    PieChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pie-chart',
            templateUrl: './pie-chart.component.html',
            styleUrls: ['./pie-chart.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());
export { PieChartComponent };
//# sourceMappingURL=pie-chart.component.js.map