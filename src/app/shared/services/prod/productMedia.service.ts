/**
 * Created by hevan on 2018/5/21.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Keys } from '../../common/keys';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductMediaService {

  constructor(private http:HttpClient, private _authService:AuthService) {
  }

  public pageQuery(params:any):Observable<any> {
    return this.http.get(Keys.SERVER_URL + '/product/v2/secure/productMedia/pageQuery', {params: params, headers: this._authService.getRequestHeaders(Keys.HTTP_FORM,true)})
      .pipe(

      );
  }

  public find(id:any):Observable<any> {
    return this.http.get(Keys.SERVER_URL + '/product/v2/secure/productMedia/find/'+id, { headers: this._authService.getRequestHeaders(Keys.HTTP_FORM,true)})
      .pipe(

      );
  }

  public save(params:any):Observable<any> {
    return this.http.post(Keys.SERVER_URL + '/product/v2/secure/productMedia/add',  params, {headers: this._authService.getPostHeaders(Keys.HTTP_BODY,true)})
      .pipe(

      );
  }


  public delete(params:any):Observable<any> {
    return this.http.post(Keys.SERVER_URL + '/product/v2/secure/productMedia/delete/'+params,null, {headers: this._authService.getPostHeaders(Keys.HTTP_BODY,true)})
      .pipe(

      );
  }
}
