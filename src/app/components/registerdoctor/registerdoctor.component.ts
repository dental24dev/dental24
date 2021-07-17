import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DentistInterface } from '../../models/dentist-interface';
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { AuthService } from '../../services/auth.service';



import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerdoctor',
  templateUrl: './registerdoctor.component.html',
  styleUrls: ['./registerdoctor.component.css']
})
export class RegisterdoctorComponent implements OnInit {

  constructor(
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    private location: Location,
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }
   loadAPI = null;  

  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/js/script.js";
 public isError = false;
  submitted = false;

     public msgError = '';

  ngFormNewDentist: FormGroup;
  dentistSubmitted = false;
    public dentist : DentistInterface ={
    email:"",
    name:"",
    usertype:"",
    password:""
  };

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
 public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }


     onRegister(): void {
    if (this.ngFormNewDentist.valid){
      this.dentist.usertype='dentist';
      this.authService
        .registerUser(this.dentist.name, this.dentist.email, this.dentist.password, this.dentist.usertype)
        .subscribe(dentist => {
          this.authService.setUser(dentist);
          const token = dentist.id;
          this._uw.userd=token;
          this.authService.setToken(token);
          this._uw.dentist=dentist;
          this._uw.dentist.userd=dentist.id;
         this.router.navigate(['/registerform']);
          //location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
    } else {
      this.onIsError();
    }

  }

  public ok(){
      this.dentistSubmitted = true;
        if (this.ngFormNewDentist.invalid) {
          this._uw.errorFormSendDentist=true;
        return;
            } 
  
          this._uw.dentistSubmitted=true;
          this.dentist = this.ngFormNewDentist.value;
          this.dentist.status="new";
          this.dentist.dentistIdPre=this.aleatorio(10000,99999);
          let dentistIdString = this.dentist.dentistIdPre.toString();
          this.dentist.dentistId=dentistIdString;
          this._uw.dentist.dentistId=this.dentist.dentistId;
          this._uw.dentist.name=this.dentist.name;
          this._uw.dentist.email=this.dentist.email;
          this._uw.dentist.password=this.dentist.address;

        // this._uw.dentist.subject="You have a new appointment request";
         // this._uw.dentist.subjectA2U="The result of your appointment is";
          this._uw.dentist.dentistId=this.dentist.dentistId;
          //this._uw.dentist.adminName="Jessica",
         // this._uw.dentist.clientEmail=this._uw.dentist.email,

          // ACTIVAR EN PRODUCCION
         // this._uw.dentist.email="penguinscleaningservice@gmail.com",
        
          // DESACTIVAR EN PRODUCCION
          // this._uw.dentist.email="frutmeteam@protonmail.com",
          this.router.navigate(['/registerform']);
      

      this._uw.errorFormSendDentist=false;
      
     
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
        this.ngFormNewDentist = this.formBuilder.group({
      name: ['', [Validators.required]] ,
      email:['',[Validators.required]], 
      password:['',[Validators.required]]
         });
  }
   onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  get fval2() {
    return this.ngFormNewDentist.controls;
  }
}
