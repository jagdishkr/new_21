import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class Dataservice {
 api = environment.url + '/get';
    constructor(private http: HttpClient){}

  public  getAPI() {
     return   this.http.get(this.api);  

    }
}