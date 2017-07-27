import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import {LoginService} from '../../services/login/login.service'


@Injectable()
export class FetchAdService {

    constructor(private _http: Http) { }

    fetchAllAd(categoryName:string)
    {
        let headers = new Headers();
        let url = "http://192.168.3.144:9000/posts/search?category="+categoryName;
        console.log(categoryName);
        //let url ="http://www.mocky.io/v2/5978b5c51300007a06c10060";
        console.log(LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());         
    }

    fetchFilteredAd(searchCriteria:any)
    {
        let headers = new Headers();
        let url = "http://192.168.3.144:9000/posts/search?searchText="+searchCriteria.searchText+"&category="+searchCriteria.searchCategory;
        console.log(searchCriteria);
        //let url ="http://www.mocky.io/v2/5978b5c51300007a06c10060";
        console.log(LoginService.auth_token);
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());         
    }

    fetchUserAds(){
        let headers = new Headers();
        let url = "http://192.168.3.144:9000/posts";
        headers.append('auth-token',LoginService.auth_token);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url,options).map((response: Response)=>response.json());  
    }

}