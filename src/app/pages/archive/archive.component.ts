/**
 * Created by hevan on 2018/6/4.
 */
/**
 * Created by hevan on 2018/6/4.
 */
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Keys   }    from '../../shared/common/keys';

import {ArchiveService} from "../../shared/services/cms/archive.service";

@Component({
    selector: 'app-cms-archiveview',
    templateUrl: './archive.component.html',
})
export class ArchiveViewComponent implements OnInit {

    public archiveData:any;

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private archiveService: ArchiveService) {

    }

    //页面初始化
    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params['code']) {
          this.loadData(params['code']);
        }
      });

    }

    loadData(curCode){
        if(curCode){

            let requestParam = new HttpParams().set('code', curCode);
            this.archiveService.findByCode(requestParam).subscribe(res=>{
                if(res.code == 0){

                    this.archiveData = res.data;
                }

            });
        }
    }


}
