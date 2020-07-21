import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ConfigActions} from '../../ThemeOptions/store/config.actions';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  animations: [

    trigger('architectUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ]),
        query(':enter', [
          animate('600ms ease', style({opacity: 1, transform: 'translateY(0)'})),
        ]),

        query(':leave', [
          animate('600ms ease', style({opacity: 0, transform: 'translateY(-20px)'})),
         ], { optional: true })
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit {

  @select('config') public config$: Observable<any>;

  constructor(public globals: ThemeOptions, public configActions: ConfigActions, private loadingService: LoadingBarService) {
  }

  ngOnInit(){
    let self = this;
    this.loadingService.start();
    setTimeout(function(){
      self.loadingService.complete();
    }, 5000);
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
}



