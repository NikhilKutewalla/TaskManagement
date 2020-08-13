import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Color} from 'ng2-charts/ng2-charts';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AnalyticsComponent implements OnInit {

  txtTitle = "";
  txtDesc = "";
  txtUser = "";
  locationWeatherData: any;
  MultipleObservableRequests: any=[];

  ngOnInit() {
    // this.getDataUsingPromise();
    // this.getDataUsingObservableSingle().subscribe(response => {console.log(response)});
    this.getDataUsingObservableMultiple([44418, 2487956]);
    forkJoin(this.MultipleObservableRequests).subscribe(result => {
      console.log(result);
    });
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
  getDataUsingPromise(){
    const data = new Promise((success, error) => {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/`)
      .then((obj) => {
          success(obj.json());
      });
    });
    data
    .then(result =>  {
      this.locationWeatherData = result;
      console.log(this.locationWeatherData);
    })
    .catch(error => {console.log(error);});
  };

  /***
   * Observables Example
   */
  //single
  getDataUsingObservableSingle(locationid): Observable<Object> {
    let apiURL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationid}/`;
    return this.http.get(apiURL);
  }

  //multiple
  getDataUsingObservableMultiple(locationid): any {
    for(let id of locationid){
      let apiURL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`;
      this.MultipleObservableRequests.push(this.http.get(apiURL));
    }
    return this.MultipleObservableRequests;
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

  constructor(private modalService: NgbModal, public iziToast: Ng2IzitoastService, public http: HttpClient) {


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
