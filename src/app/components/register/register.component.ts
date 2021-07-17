import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { PatientInterface } from '../../models/patient-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

//import { ScrollTopService }  from '../../services/scroll-top.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user : UserInterface ={
    name:"",
    email:"",
    usertype:"",
    password:""
  };
    ngFormSignup: FormGroup;
  submitted = false;
    public isError = false;
     public msgError = '';
  constructor(
 // public scrollTopService:ScrollTopService,
 private formBuilder: FormBuilder,
  public scrollTopService:ScrollTopService,
   public _uw:UserWService,
  private dataApi: DataApiService,
     public router: Router,
       private authService: AuthService,
    private location: Location
    ) { }
    public patientSubmit : PatientInterface ={
   
    name:"",
    username:"",
    address:"",
    surname:"",
    userd:"",
    phone:""
  }; 
   loadAPI = null;  

  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/js/script.js";

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

     onRegister(): void {
    if (this.ngFormSignup.valid){
      this.user.usertype='patient';
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password, this.user.usertype)
        .subscribe(user => {
          this.authService.setUser(user);
          const token = user.id;
          this._uw.userd=token;
         
          this.authService.setToken(token);
         this.router.navigate(['/dashboard']);
          //location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
         this.patientSubmit.usertype='patient';
          this.patientSubmit.status='new';
          this.patientSubmit.userd=this._uw.userd;
          return this.dataApi.savePatient(this.patientSubmit)
        .subscribe(
             patientSubmit => this.router.navigate(['/successpatientregister'])
        );
    } else {
      this.onIsError();
    }

  }
  public savePatient(patient){
  this.dataApi.savePatient(patient);
}


  ngOnInit() {
         if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript1();
        this.loadScript2();
        this.loadScript3();
        this.loadScript4();
        // this.loadScript3();
        });
      }
    this._uw.loaded=true;
        this.ngFormSignup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  get fval() {
  return this.ngFormSignup.controls;
  }
   onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
