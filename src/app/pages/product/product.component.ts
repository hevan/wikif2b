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

import {ProductService} from "../../shared/services/prod/product.service";

@Component({
    selector: 'app-cms-productview',
    templateUrl: './product.component.html',
})
export class ProductViewComponent implements OnInit {


    public curId;//当前数据ID
    public productData:any;

    //构造
    constructor(private location: Location, private route: ActivatedRoute,private router: Router,private productService: ProductService) {

    }

    //页面初始化
    ngOnInit() {
        this.curId = this.route.snapshot.paramMap.get('id');

        this.loadData();
    }

    loadData(){
        if(this.curId){
            this.productService.find(this.curId).subscribe(res=>{
                if(res.code == 0){

                    this.productData = res.data;
                }

            });
        }
    }
}
