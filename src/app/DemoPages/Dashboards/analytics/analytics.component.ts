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

  txtTitle = "";
  txtDesc = "";
  txtUser = "";
  data: any;

  ngOnInit() {
    this.getData();
  }

  /***
   * IIFE
   */
  // data = (() => {
  //   return "Iife called";
  // })();

  

  /***
   * Promise Example
   */
  getData(){
    const data = new Promise((success, error) => {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/`)
      .then((obj) => {
          success(obj.json());
      });
    });
    data
    .then(result =>  {
      this.data = result;
      console.log(this.data);
    })
    .catch(error => {console.log(error);});
  };

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

  constructor(private modalService: NgbModal, public iziToast: Ng2IzitoastService) {


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
