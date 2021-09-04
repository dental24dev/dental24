import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentInterface } from '../../models/appointment-interface'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    ) { }
 loadAPI = null;  
  public appointmentsf:any[]=[]; 
   public appointments:any[]=[];
  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js";
  url5 = "assets/assetsdental/js/script.js";


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

  getPatientAppointments(id:string){
        this.dataApi.getPatientAppointments(id).subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.appointments=res;  
           this._uw.totalAppointments = res.length;          
        }
     });  
    }
getDentistAppointments(id:string){
        this.dataApi.getDentistAppointments(id).subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.appointments=res;  
           this._uw.totalAppointments = res.length;          
        }
     });  
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
        // this.loadScript3();
        });
      }
    if(this._uw.usertype=="patient"){
      this.getPatientAppointments(this._uw.userActiveId);
    }
    if(this._uw.usertype=="dentist"){
    //  console.log("activeId"+this._uw.userActiveId)
      this.getDentistAppointments(this._uw.userActiveId);
    }
    this._uw.loaded=true;
  }

}
