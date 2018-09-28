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

import {BlogService} from "../../shared/services/cms/blog.service";

@Component({
    selector: 'app-cms-blogview',
    templateUrl: './blog.component.html',
})
export class BlogViewComponent implements OnInit {

    public blogData:any;

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private blogService: BlogService) {

    }

    //页面初始化
    ngOnInit() {

      this.route.params.subscribe(params => {
        console.log(params);
        if (params['id']) {
          this.loadData(params['id']);
        }
      });

    }

    loadData(curId){
           this.blogService.find(curId).subscribe(res=>{
                if(res.code == 0){

                    this.blogData = res.data;

                  console.log(this.blogData);
                }

            });

    }
}
