import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
        this.heading = 'Analytics Dashboard';
        this.subheading = 'This is an example dashboard created using build-in elements and components.';
        this.icon = 'pe-7s-plane icon-gradient bg-tempting-azure';
        this.slideConfig6 = {
            className: 'center',
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            adaptiveHeight: true,
            dots: true,
        };
        this.datasets = [
            {
                label: 'My First dataset',
                data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
                datalabels: {
                    display: false,
                },
            }
        ];
        this.datasets2 = [
            {
                label: 'My First dataset',
                data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
                datalabels: {
                    display: false,
                },
            }
        ];
        this.datasets3 = [
            {
                label: 'My First dataset',
                data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
                datalabels: {
                    display: false,
                },
            }
        ];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(247, 185, 36, 0.2)',
                borderColor: '#f7b924',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 4,
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: '#f7b924',
                pointBackgroundColor: '#fff',
                pointHoverBorderWidth: 4,
                pointRadius: 6,
                pointBorderWidth: 5,
                pointHoverRadius: 8,
                pointHitRadius: 10,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#f7b924',
            },
        ];
        this.lineChartColors2 = [
            {
                backgroundColor: 'rgba(48, 177, 255, 0.2)',
                borderColor: '#30b1ff',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 4,
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: '#30b1ff',
                pointBackgroundColor: '#ffffff',
                pointHoverBorderWidth: 4,
                pointRadius: 6,
                pointBorderWidth: 5,
                pointHoverRadius: 8,
                pointHitRadius: 10,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#30b1ff',
            },
        ];
        this.lineChartColors3 = [
            {
                backgroundColor: 'rgba(86, 196, 121, 0.2)',
                borderColor: '#56c479',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 4,
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: '#56c479',
                pointBackgroundColor: '#fff',
                pointHoverBorderWidth: 4,
                pointRadius: 6,
                pointBorderWidth: 5,
                pointHoverRadius: 8,
                pointHitRadius: 10,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#56c479',
            },
        ];
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
        this.options = {
            layout: {
                padding: {
                    left: 0,
                    right: 8,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                xAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }]
            },
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false
        };
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-analytics',
            templateUrl: './analytics.component.html',
        })
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
export { AnalyticsComponent };
//# sourceMappingURL=analytics.component.js.map