import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DentistInterface } from '../../models/dentist-interface'

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
  
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( 
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
     private formBuilder: FormBuilder,
    public router: Router,
    ) { }
 loadAPI = null;  
   ngFormNewDentistData: FormGroup;
     dentistSubmitted = false;
 public dentistSubmit : DentistInterface ={
    about:"",
    name:"",
    username:"",
    password:"",
    address:"",
    surname:"",
    userd:"",
    phone:"",
    clinicName:"",
    specialty:""
  };
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
  public ok(){}

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

  getDentistByUserd(id: string){
    this.dataApi.getDentistByUserd2(id).subscribe(dentistSubmit => (this.dentistSubmit = dentistSubmit));
    console.log("consultado"+this.dentistSubmit.name);
   
  }
  
      get fval() {
  return this.ngFormNewDentistData.controls;
  }

  ngOnInit() {

    if(this._uw.usertype=='dentist'){
        this.dataApi.getDentistByUserd2(this._uw.userW.id).subscribe((res:any) => {    
        this.dentistSubmit=(res[0]);        
        });
      this.ngFormNewDentistData = this.formBuilder.group({
      username: ['', [Validators.required]] ,
      name: ['', [Validators.required]] ,
      specialty:['',[Validators.required]], 
      clinicName:['',[Validators.required]], 
      address:['',[Validators.required]], 
      phone:['',[Validators.required]], 
      surname:['',[Validators.required]], 
      about:['',[Validators.required]]
         });

    }
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
    this._uw.loaded=true;
  }
}
