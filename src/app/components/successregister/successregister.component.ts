import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DentistInterface } from '../../models/dentist-interface';
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';

import { AuthService } from '../../services/auth.service';

import { ActivatedRoute, Params} from '@angular/router';

import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-successregister',
  templateUrl: './successregister.component.html',
  styleUrls: ['./successregister.component.css']
})
export class SuccessregisterComponent implements OnInit {

  constructor(
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    private location: Location
    ) { }
     loadAPI = null;  


  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/plugins/select2/js/select2.min.js";

  url5 = "assets/assetsdental/js/moment.min.js";
  url6 = "assets/assetsdental/js/bootstrap-datetimepicker.min.js";
  url7 = "assets/assetsdental/js/script.js";
public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  public loadScript1() {
    let node = document.createElement("script");
    node.src = this.url1;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }   
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
   public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
   public loadScript4() {
    let node = document.createElement("script");
    node.src = this.url4;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
   public loadScript5() {
    let node = document.createElement("script");
    node.src = this.url5;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
   public loadScript6() {
    let node = document.createElement("script");
    node.src = this.url6;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
   public loadScript7() {
    let node = document.createElement("script");
    node.src = this.url7;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  ngOnInit() {
         if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript1();
        this.loadScript2();
        this.loadScript3();
        this.loadScript4();
        this.loadScript5();
        this.loadScript6();
        this.loadScript7();
        // this.loadScript3();
        });
      }
    this._uw.loaded=true;
  }

}
