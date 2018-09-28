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


    public curId;//当前数据ID
    public blogData:any;

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private blogService: BlogService) {

    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.loadData();
    }

    loadData(){
        if(this.curId){
            this.blogService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.blogData = res.data;
                }

            });
        }
    }
}
