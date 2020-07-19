(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DemoPages/Dashboards/analytics/analytics.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/DemoPages/Dashboards/analytics/analytics.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-3 card\">\r\n  <div class=\"no-gutters row\">\r\n    <div class=\"col-sm-6 col-md-4 col-xl-4\">\r\n      <div class=\"card no-shadow rm-border bg-transparent widget-chart text-left\">\r\n        <div class=\"widget-chart-content\">\r\n          <div class=\"opacity-8 \">\r\n            <div class=\"d-inline pr-1\">\r\n              <i class=\"fa fa-star-o m-lg-2\"></i>\r\n              <div class=\"badge badge-secondary m-lg-2\"><i class=\"fa fa-user\"></i> 6 people</div>\r\n              <div class=\"badge badge-success \"><i class=\"fa fa-history\"></i> 2 people</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"divider m-0 d-md-none d-sm-block\"></div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n  <div class=\"col-xs-3 col-sm-2 col-md-3 col-lg-3\">\r\n    <div class=\"card-hover-shadow-2x mb-3\">\r\n      <div class=\"card-header-tab card-header border-0\" style=\"background-color: #8080802e;\">\r\n        <span style=\"margin-left: 75%;\"><b>...</b></span>\r\n        <div style=\"float: left;\"><h6><b>ToDo</b></h6></div>\r\n      </div>\r\n      <div style=\"background-color: #8080802e;\">\r\n        <!-- <perfect-scrollbar [autoPropagation]=\"true\"> -->\r\n          <!-- <ul class=\"todo-list-wrapper list-group list-group-flush\"> -->\r\n             <div class=\"taskLists min-height-150\"\r\n                [dndList]\r\n                [dndPlaceholder]=\"placeholder\"\r\n                [dndModel]=\"simpleList[0]\">\r\n                <div *ngFor=\"let item of simpleList[0]\"\r\n                  class=\"col-md-12 marg-btm-10\"\r\n                  [dndType]=\"'item'\"\r\n                  (dndMoved)=\"removeItem(item, simpleList[0])\"\r\n                  [dndDraggable]\r\n                  [dndObject]=\"item\">\r\n                  <div class=\"card todo-list-wrapper list-group list-group-flush\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"widget-content-wrapper\">\r\n                          <div class=\"widget-content-left\">\r\n                            <div class=\"widget-heading font-weight-bold\">Title: {{item.title}}\r\n                            </div>\r\n                            <div class=\"widget-heading\">Desc.: {{item.description}}</div>\r\n                            <div class=\"widget-subheading\"><i>User: {{item.username}}</i></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <!-- <li class=\"list-group-item\">\r\n              <div class=\"widget-content p-0\">\r\n                <div class=\"widget-content-wrapper\">\r\n                  <div class=\"widget-content-left\">\r\n                    <div class=\"widget-heading\">Wash the car\r\n                      <div class=\"badge badge-secondary \">Rejected</div>\r\n                    </div>\r\n                    <div class=\"widget-subheading\"><i>{{item.username}}</i></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <div class=\"todo-indicator bg-primary\"></div>\r\n              <div class=\"widget-content p-0\">\r\n                <div class=\"widget-content-wrapper\">\r\n                  <div class=\"widget-content-left flex2\">\r\n                    <div class=\"widget-heading\">Badge on the right task</div>\r\n                    <div class=\"widget-subheading\">This task has show on hover actions!</div>\r\n                  </div>\r\n                  <div class=\"widget-content-right ml-3\">\r\n                    <div class=\"badge badge-pill badge-success\">Latest Task</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <div class=\"todo-indicator bg-info\"></div>\r\n              <div class=\"widget-content p-0\">\r\n                <div class=\"widget-content-wrapper\">\r\n                  <div class=\"widget-content-left mr-3\">\r\n                    <div class=\"widget-content-left\">\r\n                      <img width=\"42\" class=\"rounded\" src=\"./assets/images/avatars/1.jpg\" alt=\"\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget-content-left\">\r\n                    <div class=\"widget-heading\">Go grocery shopping</div>\r\n                    <div class=\"widget-subheading\">A short description for this todo item</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li> -->\r\n          <!-- </ul> -->\r\n        <!-- </perfect-scrollbar> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n    <div class=\"card-hover-shadow-2x mb-3\">\r\n      <div class=\"card-header-tab card-header border-0\" style=\"background-color: #8080802e;\">\r\n        <i style=\"color: red;margin-left: 30%;\" class=\"fa fa-dot-circle-o font-weight-bold\"> REC</i>\r\n        <span style=\"margin-left: 10%;\">\r\n          <b>...</b></span>\r\n        <div style=\"float: left;\"><h6><b>In Progress</b></h6></div>\r\n      </div>\r\n      <div style=\"background-color: #8080802e;\">\r\n             <div class=\"taskLists min-height-150\"\r\n                [dndList]\r\n                [dndPlaceholder]=\"placeholder\"\r\n                [dndModel]=\"simpleList[1]\">\r\n                <div *ngFor=\"let item of simpleList[1]\"\r\n                  class=\"col-md-12 marg-btm-10\"\r\n                  [dndType]=\"'item'\"\r\n                  (dndMoved)=\"removeItem(item, simpleList[1])\"\r\n                  [dndDraggable]\r\n                  [dndObject]=\"item\">\r\n                  <div class=\"card todo-list-wrapper list-group list-group-flush\">\r\n                    <!-- <li class=\"list-group-item\"> -->\r\n                      <div class=\"card-body\">\r\n                        <div class=\"widget-content-wrapper\">\r\n                          <div class=\"widget-content-left\">\r\n                            <div class=\"widget-heading font-weight-bold\">Title: {{item.title}}\r\n                            </div>\r\n                            <div class=\"widget-heading\">Desc.: {{item.description}}</div>\r\n                            <div class=\"widget-subheading\"><i>User: {{item.username}}</i></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    <!-- </li> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n    <div class=\"card-hover-shadow-2x mb-3\">\r\n      <div class=\"card-header-tab card-header border-0\" style=\"background-color: #8080802e;\">\r\n        <span style=\"margin-left: 63%;\"><b>...</b></span>\r\n        <div style=\"float: left;\"><h6><b>In Review</b></h6></div>\r\n      </div>\r\n      <div style=\"background-color: #8080802e;\">\r\n             <div class=\"taskLists min-height-150\"\r\n                [dndList]\r\n                [dndPlaceholder]=\"placeholder\"\r\n                [dndModel]=\"simpleList[2]\">\r\n                <div *ngFor=\"let item of simpleList[2]\"\r\n                  class=\"col-md-12 marg-btm-10\"\r\n                  [dndType]=\"'item'\"\r\n                  (dndMoved)=\"removeItem(item, simpleList[2])\"\r\n                  [dndDraggable]\r\n                  [dndObject]=\"item\">\r\n                  <div class=\"card todo-list-wrapper list-group list-group-flush\">\r\n                    <!-- <li class=\"list-group-item\"> -->\r\n                      <div class=\"card-body\">\r\n                        <div class=\"widget-content-wrapper\">\r\n                          <div class=\"widget-content-left\">\r\n                            <div class=\"widget-heading font-weight-bold\">Title: {{item.title}}\r\n                            </div>\r\n                            <div class=\"widget-heading\">Desc.: {{item.description}}</div>\r\n                            <div class=\"widget-subheading\"><i>User: {{item.username}}</i></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    <!-- </li> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n    <div class=\"card-hover-shadow-2x mb-3\">\r\n      <div class=\"card-header-tab card-header border-0\" style=\"background-color: #8080802e;\">\r\n        <span style=\"margin-left: 64%;\"><b>...</b></span>\r\n        <div style=\"float: left;\"><h6><b>Done</b></h6></div>\r\n      </div>\r\n      <div style=\"background-color: #8080802e;\">\r\n             <div class=\"taskLists min-height-150\"\r\n                [dndList]\r\n                [dndPlaceholder]=\"placeholder\"\r\n                [dndModel]=\"simpleList[3]\">\r\n                <div *ngFor=\"let item of simpleList[3]\"\r\n                  class=\"col-md-12 marg-btm-10\"\r\n                  [dndType]=\"'item'\"\r\n                  (dndMoved)=\"removeItem(item, simpleList[3])\"\r\n                  [dndDraggable]\r\n                  [dndObject]=\"item\">\r\n                  <div class=\"card todo-list-wrapper list-group list-group-flush\">\r\n                    <!-- <li class=\"list-group-item\"> -->\r\n                      <div class=\"card-body\">\r\n                        <div class=\"widget-content-wrapper\">\r\n                          <div class=\"widget-content-left\">\r\n                            <div class=\"widget-heading font-weight-bold\">Title: {{item.title}}\r\n                            </div>\r\n                            <div class=\"widget-heading\">Desc.: {{item.description}}</div>\r\n                            <div class=\"widget-subheading\"><i>User: {{item.username}}</i></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    <!-- </li> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<!-- <a class=\"btn btn-sm btn-primary mr-2 fixed\" (click)=\"open(content)\">Homepage</a> -->\r\n<button type=\"button\" class=\"btn btn-primary btn-circle btn-sm fixed\" (click)=\"open(content)\">+</button>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h6 class=\"modal-title\">Add Data</h6>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <label for=\"exampleEmail\">Title*</label>\r\n    <input [(ngModel)]=\"txtTitle\" class=\"mb-2 form-control-sm form-control\" type=\"text\">\r\n    <label for=\"exampleEmail\">Description</label>\r\n    <input [(ngModel)]=\"txtDesc\" class=\"mb-2 form-control-sm form-control\" type=\"text\">\r\n    <label for=\"exampleEmail\">Username*</label>\r\n    <input [(ngModel)]=\"txtUser\" class=\"mb-2 form-control-sm form-control\" type=\"text\">\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save() && c('Close click')\">Save changes</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/DemoPages/Dashboards/analytics/analytics.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/DemoPages/Dashboards/analytics/analytics.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");




var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(modalService, iziToast) {
        this.modalService = modalService;
        this.iziToast = iziToast;
        this.heading = 'Analytics Dashboard';
        this.subheading = 'This is an example dashboard created using build-in elements and components.';
        this.icon = 'pe-7s-plane icon-gradient bg-tempting-azure';
        this.txtTitle = "";
        this.txtDesc = "";
        this.txtUser = "";
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
        this.simpleList = [
            [
                { 'title': '1Prepare moodboard for website branding', 'description': 'Oct 13', 'username': 'test' },
                { 'title': '1Create an announcement about product launch', 'description': '', 'username': 'test' },
                { 'title': '1Prepare moodboard for LP', 'description': 'Oct 13', 'username': 'test' },
            ],
            [
                { 'title': '2Prepare moodboard for website branding', 'description': 'Oct 13', 'username': 'test' },
                { 'title': '2Create an announcement about product launch', 'description': '', 'username': 'test' },
                { 'title': '2Prepare moodboard for LP', 'description': 'Oct 13', 'username': 'test' },
            ],
            [
                { 'title': '3Prepare moodboard for website branding', 'description': 'Oct 13', 'username': 'test' },
                { 'title': '3Create an announcement about product launch', 'description': '', 'username': 'test' },
                { 'title': '3Prepare moodboard for LP', 'description': 'Oct 13', 'username': 'test' },
            ],
            [
                { 'title': '4Prepare moodboard for website branding', 'description': 'Oct 13', 'username': 'test' },
                { 'title': '4Create an announcement about product launch', 'description': '', 'username': 'test' },
                { 'title': '4Prepare moodboard for LP', 'description': 'Oct 13', 'username': 'test' },
            ]
        ];
        this.nestedList = {
            selected: null,
            templates: [
                { type: "item", id: 2 },
                { type: "container", id: 1, columns: [[], []] }
            ],
            dropzones: [[
                    {
                        "type": "container",
                        "id": 1,
                        "columns": [
                            [
                                {
                                    "type": "item",
                                    "id": "1"
                                },
                                {
                                    "type": "item",
                                    "id": "2"
                                }
                            ],
                            [
                                {
                                    "type": "item",
                                    "id": "3"
                                }
                            ]
                        ]
                    },
                    {
                        "type": "item",
                        "id": "4"
                    },
                    {
                        "type": "item",
                        "id": "5"
                    },
                    {
                        "type": "item",
                        "id": "6"
                    }
                ],
                [
                    {
                        "type": "item",
                        "id": 7
                    },
                    {
                        "type": "item",
                        "id": "8"
                    },
                    {
                        "type": "container",
                        "id": "2",
                        "columns": [
                            [
                                {
                                    "type": "item",
                                    "id": "9"
                                },
                                {
                                    "type": "item",
                                    "id": "10"
                                },
                                {
                                    "type": "item",
                                    "id": "11"
                                }
                            ],
                            [
                                {
                                    "type": "item",
                                    "id": "12"
                                },
                                {
                                    "type": "container",
                                    "id": "3",
                                    "columns": [
                                        [
                                            {
                                                "type": "item",
                                                "id": "13"
                                            }
                                        ],
                                        [
                                            {
                                                "type": "item",
                                                "id": "14"
                                            }
                                        ]
                                    ]
                                },
                                {
                                    "type": "item",
                                    "id": "15"
                                },
                                {
                                    "type": "item",
                                    "id": "16"
                                }
                            ]
                        ]
                    },
                    {
                        "type": "item",
                        "id": 16
                    }
                ]]
        };
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent.prototype.removeItem = function (item, list) {
        list.splice(list.indexOf(item), 1);
    };
    AnalyticsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.txtTitle = "";
            _this.txtDesc = "";
            _this.txtUser = "";
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    AnalyticsComponent.prototype.save = function () {
        if (this.txtTitle != "" && this.txtUser != "") {
            this.simpleList[0].push({ 'title': this.txtTitle, 'description': this.txtDesc, 'username': this.txtUser });
            this.iziToast.success({
                message: "Successfully saved."
            });
            this.modalService.dismissAll();
        }
        else {
            this.iziToast.success({
                message: "Title/Username cannot be empty."
            });
            this.modalService.dismissAll();
            return false;
        }
        ;
    };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/DemoPages/Dashboards/analytics/analytics.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__["Ng2IzitoastService"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Layout/Components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'app-header ' + (config$ | async).headerTheme\">\r\n  <!-- <div class=\"logo-src\"></div> -->\r\n  <div class=\"fa fa-instagram fa-3x\"></div>\r\n  <div class=\"app-header__content\">\r\n    <div class=\"app-header-left\">\r\n      <i class=\"fa fa-long-arrow-left\">All Projects</i>\r\n    </div>\r\n    <div class=\"app-header-right w-50\">\r\n    <form><select class=\"border-0 font-weight-bold form-control form-control-sm\">\r\n      <option>Supermassive black hole</option>\r\n    </select></form>\r\n  </div>\r\n    <div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"header-btn-lg pr-0\">\r\n          <div class=\"widget-content p-0\">\r\n            <div class=\"widget-content-wrapper\">\r\n              <div class=\"widget-content-left\">\r\n                <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\">\r\n                  <button type=\"button\" class=\"btn p-0 mr-2\" ngbDropdownToggle>\r\n                    <span>\r\n                      <div class=\"icon-wrapper icon-wrapper-alt rounded-square\">\r\n                        <div class=\"bell-notification\">1</div>\r\n                        <i class=\"fa fa-bell-o\"></i>\r\n                      </div>\r\n                    </span>\r\n                  </button>\r\n                  <div ngbDropdownMenu>\r\n                    <button class=\"dropdown-item\">Test Notification</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\">\r\n                  <button type=\"button\" class=\"btn btn-link p-0 mr-2\" ngbDropdownToggle>\r\n                    <span>\r\n                      <div class=\"icon-wrapper icon-wrapper-alt rounded-square\">\r\n                        <img width=\"42\" src=\"./assets/images/avatars/1.jpg\" alt=\"\" class=\"rounded-square\">\r\n                      </div>\r\n                    </span>\r\n                  </button>\r\n                  <div ngbDropdownMenu>\r\n                    <button class=\"dropdown-item\">Logout</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-header__mobile-menu\">\r\n    <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\"\r\n            [ngClass]=\"{'is-active' : globals.toggleSidebarMobile}\" (click)=\"toggleSidebarMobile()\">\r\n        <span class=\"hamburger-box\">\r\n            <span class=\"hamburger-inner\"></span>\r\n        </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-header__menu\">\r\n    <span>\r\n        <button class=\"btn-icon btn-icon-only btn btn-primary\" [ngClass]=\"{'is-active' : globals.toggleHeaderMobile}\"\r\n                (click)=\"toggleHeaderMobile()\">\r\n            <div class=\"btn-icon-wrapper\">\r\n                <fa name=\"ellipsis-v\"></fa>\r\n            </div>\r\n        </button>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Layout/Components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme-options */ "./src/app/theme-options.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(globals) {
        this.globals = globals;
    }
    Object.defineProperty(HeaderComponent.prototype, "isActiveAsGetter", {
        get: function () {
            return this.isActive;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    HeaderComponent.prototype.toggleHeaderMobile = function () {
        this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.isActive'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent.prototype, "isActiveAsGetter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeaderComponent.prototype, "config$", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Layout/Components/header/header.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_4__["ThemeOptions"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'app-sidebar sidebar-shadow ' + (config$ | async).sidebarTheme\" (mouseover)=\"toggleSidebar() && sidebarHover()\"\r\n     (mouseout)=\"toggleSidebar() && sidebarHover()\">\r\n  <div class=\"app-header__logo\">\r\n    <div class=\"fa fa-instagram fa-3x\"></div>\r\n    <div class=\"header__pane ml-auto\">\r\n      <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\"\r\n              [ngClass]=\"{'is-active' : globals.toggleSidebar}\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"hamburger-box\">\r\n            <span class=\"hamburger-inner\"></span>\r\n        </span> -->\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-sidebar-content\">\r\n    <div class=\"app-sidebar-scroll\">\r\n      <perfect-scrollbar [autoPropagation]=\"true\">\r\n        <div class=\"v-sidebar-menu vsm-default\">\r\n          <div class=\"vsm-list\">\r\n            <ngb-accordion [destroyOnHide]=\"false\" [closeOthers]=\"true\" [activeIds]=\"extraParameter\">\r\n              <!-- <ngb-panel>\r\n                <ng-template ngbPanelHeader>\r\n                  <div class=\"vsm-header\">Main Navigation</div>\r\n                </ng-template>\r\n              </ngb-panel> -->\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon pe-7s-home\"></i>\r\n                    <span class=\"vsm-title\">Home</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"active-item\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon fa fa-tachometer\"></i>\r\n                    <span class=\"vsm-title\">DashBoard</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon fa fa-calendar\"></i>\r\n                    <span class=\"vsm-title\">Calendar</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon fa fa-weixin\"></i>\r\n                    <span class=\"vsm-title\">Chat</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon fa fa-history\"></i>\r\n                    <span class=\"vsm-title\">History</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel id=\"dashboardsMenu\">\r\n                <ng-template ngbPanelHeader>\r\n                  <button ngbPanelToggle class=\"vsm-link\" routerLink=\"\" routerLinkActive=\"\"\r\n                  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <i class=\"vsm-icon fa fa-android\"></i>\r\n                    <span class=\"vsm-title\">Profile</span>\r\n                  </button>\r\n                </ng-template>\r\n              </ngb-panel>\r\n\r\n\r\n\r\n            </ngb-accordion>\r\n          </div>\r\n        </div>\r\n      </perfect-scrollbar>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Layout/Components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Layout/Components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme-options */ "./src/app/theme-options.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(globals, activatedRoute) {
        this.globals = globals;
        this.activatedRoute = activatedRoute;
        this.activeId = 'dashboardsMenu';
    }
    SidebarComponent.prototype.toggleSidebar = function () {
        this.globals.toggleSidebar = !this.globals.toggleSidebar;
    };
    SidebarComponent.prototype.sidebarHover = function () {
        this.globals.sidebarHover = !this.globals.sidebarHover;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.innerWidth = window.innerWidth;
            if (_this.innerWidth < 1200) {
                _this.globals.toggleSidebar = true;
            }
        });
        this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
    };
    SidebarComponent.prototype.onResize = function (event) {
        this.newInnerWidth = event.target.innerWidth;
        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        }
        else {
            this.globals.toggleSidebar = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SidebarComponent.prototype, "config$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarComponent.prototype, "onResize", null);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Layout/Components/sidebar/sidebar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_2__["ThemeOptions"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/Layout/base-layout/base-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Layout/base-layout/base-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar></ngx-loading-bar>\r\n<div [ngClass]=\"{\r\n'closed-sidebar' : globals.toggleSidebar,\r\n'closed-sidebar-md' : globals.toggleSidebarMobile,\r\n'closed-sidebar-open': globals.sidebarHover || globals.toggleSidebarMobile,\r\n'header-menu-open' : globals.toggleHeaderMobile,\r\n'fixed-footer' : globals.toggleFixedFooter\r\n}\" [class]=\"'app-container app-theme-white'\">\r\n  <app-header></app-header>\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"app-main__outer\">\r\n    <!-- <div class=\"app-main__inner\"> -->\r\n      <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n        <router-outlet #o=\"outlet\"></router-outlet>\r\n      </div>\r\n    <!-- </div> -->\r\n    <!-- <app-footer></app-footer> -->\r\n  </div>\r\n  <div class=\"sidebar-menu-overlay\" (click)=\"toggleSidebarMobile()\"></div>\r\n</div>\r\n<ngx-loading-bar [color]=\"'var(--primary)'\"></ngx-loading-bar>\r\n"

/***/ }),

/***/ "./src/app/Layout/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Layout/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ThemeOptions/store/config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");
/* harmony import */ var _theme_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme-options */ "./src/app/theme-options.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");








var BaseLayoutComponent = /** @class */ (function () {
    function BaseLayoutComponent(globals, configActions, loadingService) {
        this.globals = globals;
        this.configActions = configActions;
        this.loadingService = loadingService;
    }
    BaseLayoutComponent.prototype.ngOnInit = function () {
        var self = this;
        this.loadingService.start();
        setTimeout(function () {
            self.loadingService.complete();
        }, 5000);
    };
    BaseLayoutComponent.prototype.toggleSidebarMobile = function () {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])('config'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BaseLayoutComponent.prototype, "config$", void 0);
    BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-layout',
            template: __webpack_require__(/*! ./base-layout.component.html */ "./src/app/Layout/base-layout/base-layout.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('architectUIAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                transform: 'translateY(-20px)',
                                flexDirection: 'column'
                            }),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(-20px)' })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_options__WEBPACK_IMPORTED_MODULE_5__["ThemeOptions"], _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_4__["ConfigActions"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__["LoadingBarService"]])
    ], BaseLayoutComponent);
    return BaseLayoutComponent;
}());



/***/ }),

/***/ "./src/app/Layout/pages-layout/pages-layout.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Layout/pages-layout/pages-layout.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n<ngx-loading-bar [color]=\"'var(--primary)'\"></ngx-loading-bar> -->\r\n"

/***/ }),

/***/ "./src/app/Layout/pages-layout/pages-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Layout/pages-layout/pages-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: PagesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesLayoutComponent", function() { return PagesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var PagesLayoutComponent = /** @class */ (function () {
    function PagesLayoutComponent() {
    }
    PagesLayoutComponent.prototype.ngOnInit = function () {
    };
    PagesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-layout',
            template: __webpack_require__(/*! ./pages-layout.component.html */ "./src/app/Layout/pages-layout/pages-layout.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('architectUIAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column'
                            }),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        ], { optional: true })
                    ]),
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesLayoutComponent);
    return PagesLayoutComponent;
}());



/***/ }),

/***/ "./src/app/ThemeOptions/store/config.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/ThemeOptions/store/config.actions.ts ***!
  \******************************************************/
/*! exports provided: ConfigActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigActions", function() { return ConfigActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);



var ConfigActions = /** @class */ (function () {
    function ConfigActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ConfigActions_1 = ConfigActions;
    ConfigActions.prototype.getConfig = function () {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_GET,
        });
    };
    ConfigActions.prototype.updateConfig = function (config) {
        this.ngRedux.dispatch({
            type: ConfigActions_1.CONFIG_UPDATE,
            payload: config
        });
    };
    var ConfigActions_1;
    ConfigActions.CONFIG_GET = 'CONFIG_GET';
    ConfigActions.CONFIG_UPDATE = 'CONFIG_UPDATE';
    ConfigActions = ConfigActions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], ConfigActions);
    return ConfigActions;
}());



/***/ }),

/***/ "./src/app/ThemeOptions/store/config.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/ThemeOptions/store/config.reducer.ts ***!
  \******************************************************/
/*! exports provided: ConfigReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigReducer", function() { return ConfigReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");


var INITIAL_STATE = {
    headerTheme: '',
    sidebarTheme: '',
};
function ConfigReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _config_actions__WEBPACK_IMPORTED_MODULE_1__["ConfigActions"].CONFIG_GET:
            return Object.assign({}, state);
        case _config_actions__WEBPACK_IMPORTED_MODULE_1__["ConfigActions"].CONFIG_UPDATE:
            return Object.assign({}, state, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.payload));
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/ThemeOptions/store/index.ts":
/*!*********************************************!*\
  !*** ./src/app/ThemeOptions/store/index.ts ***!
  \*********************************************/
/*! exports provided: ArchitectUIState, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectUIState", function() { return ArchitectUIState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.reducer */ "./src/app/ThemeOptions/store/config.reducer.ts");


var ArchitectUIState = /** @class */ (function () {
    function ArchitectUIState() {
    }
    return ArchitectUIState;
}());

;
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    config: _config_reducer__WEBPACK_IMPORTED_MODULE_1__["ConfigReducer"],
});


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/base-layout/base-layout.component */ "./src/app/Layout/base-layout/base-layout.component.ts");
/* harmony import */ var _DemoPages_Dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DemoPages/Dashboards/analytics/analytics.component */ "./src/app/DemoPages/Dashboards/analytics/analytics.component.ts");




// DEMO PAGES
// Dashboards 

var routes = [
    {
        path: '',
        component: _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__["BaseLayoutComponent"],
        children: [
            // Dashboads
            { path: '', component: _DemoPages_Dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_4__["AnalyticsComponent"], data: { extraParameter: 'dashboardsMenu' } },
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ArchitectUI - Angular 7 Bootstrap 4 & Material Design Admin Dashboard Template';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ThemeOptions_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeOptions/store */ "./src/app/ThemeOptions/store/index.ts");
/* harmony import */ var _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeOptions/store/config.actions */ "./src/app/ThemeOptions/store/config.actions.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-drag-and-drop-lists */ "./node_modules/ngx-drag-and-drop-lists/index.js");
/* harmony import */ var _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layout/base-layout/base-layout.component */ "./src/app/Layout/base-layout/base-layout.component.ts");
/* harmony import */ var _Layout_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layout/pages-layout/pages-layout.component */ "./src/app/Layout/pages-layout/pages-layout.component.ts");
/* harmony import */ var _Layout_Components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layout/Components/header/header.component */ "./src/app/Layout/Components/header/header.component.ts");
/* harmony import */ var _Layout_Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Layout/Components/sidebar/sidebar.component */ "./src/app/Layout/Components/sidebar/sidebar.component.ts");
/* harmony import */ var _DemoPages_Dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./DemoPages/Dashboards/analytics/analytics.component */ "./src/app/DemoPages/Dashboards/analytics/analytics.component.ts");














// BOOTSTRAP COMPONENTS






// LAYOUT





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTool) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngRedux.configureStore(_ThemeOptions_store__WEBPACK_IMPORTED_MODULE_6__["rootReducer"], {}, [], [devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _Layout_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_18__["BaseLayoutComponent"],
                _Layout_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_19__["PagesLayoutComponent"],
                _Layout_Components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _Layout_Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"],
                _DemoPages_Dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_22__["AnalyticsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgReduxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__["LoadingBarRouterModule"],
                // Angular Bootstrap Components
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_17__["DndListModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_16__["Ng2IziToastModule"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                },
                _ThemeOptions_store_config_actions__WEBPACK_IMPORTED_MODULE_7__["ConfigActions"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["DevToolsExtension"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/theme-options.ts":
/*!**********************************!*\
  !*** ./src/app/theme-options.ts ***!
  \**********************************/
/*! exports provided: ThemeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeOptions", function() { return ThemeOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeOptions = /** @class */ (function () {
    function ThemeOptions() {
        this.sidebarHover = false;
        this.toggleSidebar = true;
        this.toggleSidebarMobile = false;
        this.toggleHeaderMobile = false;
        this.toggleFixedFooter = false;
    }
    ThemeOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ThemeOptions);
    return ThemeOptions;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nikhil\Angular proj\design\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map