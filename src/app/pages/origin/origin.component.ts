/**
 * Created by hevan on 2018/6/4.
 */
/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';

import { Keys   }    from '../../shared/common/keys';
import { HttpParams } from '@angular/common/http';

import {OriginCodeService} from "../../shared/services/origin/originCode.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-cms-originview',
    templateUrl: './origin.component.html',
    styleUrls:['./origin.component.css'],
    providers: [NgbCarouselConfig]
})
export class OriginViewComponent implements OnInit {

    public curCode;
    public productOrigin:any;

    public batchCode:any;

    public listOriginTrans:any;

  showNavigationArrows = false;
  showNavigationIndicators = false;

    //构造
    constructor(config: NgbCarouselConfig, private location: Location, private route: ActivatedRoute,private router: Router,private originCodeService: OriginCodeService) {
      config.interval = 2000;
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;

    }

    //页面初始化
    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params['code']) {
          this.curCode = params['code'];
          this.loadData(params['code']);
        }
      });

    }

    loadData(curCode){
      let requestParam = new HttpParams().set('code', curCode);
        this.originCodeService.findByCode(requestParam).subscribe(res=>{
            if(res.code == 0){

                this.productOrigin = res.data;

              console.log(this.productOrigin);

                this.loadContent();
                 this.loadTrans()
            }

        });

    }

    loadContent(){

      if(this.productOrigin){
        let requestParam = new HttpParams().set('commodityCode', this.productOrigin.originCode.commodityCode).set('batchCode',this.productOrigin.originCode.batchCode);

        this.originCodeService.findByBatchCode(requestParam).subscribe(res=>{
          if(res.code == 0){

            this.batchCode = res.data;


          }

        });

      }

    }

    loadTrans(){
      if(this.productOrigin){
        let requestParam = new HttpParams().set('code', this.curCode);
        this.originCodeService.findOriginTrans(requestParam).subscribe(res=>{
          if(res.code == 0){

            this.listOriginTrans = res.data;


          }

        });
      }
    }
}
