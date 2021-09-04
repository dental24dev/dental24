import { Component, OnInit } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";
import { SwUpdate } from '@angular/service-worker';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor (
 	public _ps:TixsService, 
 	public _pi:ProductInfoService, 
 	public ipbucket:IpbucketService,
 	public _uw:UserWService, 
  private swUpdate:SwUpdate,
 	public dataApi:DataApiService){

 }
 loadAPI = null;  
    ngOnInit() {
      if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("Masterdent24 tiene nuevas mejoras. desea cargar esta nueva versión?")) {
                    window.location.reload();
                }
            });
        }    
  	 if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
          });
        }
        this._uw.loaded=true;
    }
 }