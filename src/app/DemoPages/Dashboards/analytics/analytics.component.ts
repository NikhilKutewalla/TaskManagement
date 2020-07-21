import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Color} from 'ng2-charts/ng2-charts';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AnalyticsComponent implements OnInit {

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';
  txtTitle = "";
  txtDesc = "";
  txtUser = "";

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public lineChartColors: Color[] = [
    { // dark grey
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

  public lineChartColors2: Color[] = [
    { // dark grey
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

  public lineChartColors3: Color[] = [
    { // dark grey
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

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
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

  ngOnInit() {
  }

  simpleList = [
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

  public nestedList = {
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

  constructor(private modalService: NgbModal, public iziToast: Ng2IzitoastService) {

  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.txtTitle = "";
      this.txtDesc = "";
      this.txtUser = "";
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  save(){
    if(this.txtTitle != "" && this.txtUser != ""){
      this.simpleList[0].push( { 'title': this.txtTitle, 'description': this.txtDesc, 'username': this.txtUser } );
      this.iziToast.success({
        message: "Successfully saved."
      });
      this.modalService.dismissAll();
    }else{
      this.iziToast.success({
        message: "Title/Username cannot be empty."
      });
      this.modalService.dismissAll();
      return false;
    };
  }

}
