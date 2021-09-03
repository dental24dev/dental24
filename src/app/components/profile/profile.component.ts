import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { DentistInterface } from '../../models/dentist-interface'; 
import { PatientInterface } from '../../models/patient-interface';
import { MessageInterface } from '../../models/message-interface';
import { UserInterface } from '../../models/user-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public user : UserInterface ={
        name:"",
        message:"",
        email:"",
        usertype:"",
        password:"",
        status:"",
      };
       public patientSubmit : PatientInterface ={
    name:"",
    username:"",
    address:"",
    surname:"",
    images:[],
    userd:"",
    phone:""
  }; 
    ngFormSignup: FormGroup;
    submitted = false;
    public isError = false;
    public waiting = false;
    public msgError = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService

    ) { }
//public message:MessageInterface;

  public message:any={};
  public dentist:any={};
  //public dentist:DentistInterface;
public dentists:DentistInterface;
   loadAPI = null;  

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
  goNewAppointment(dentist){
    this._uw.dentistToApp=this.dentist;
    this.router.navigate(['/newappointment'])
  }
  onRegister(){
    if (this.ngFormSignup.valid){
      this.waiting=true;
      this.user.usertype='patient';
      this.user.status='new';
      this.patientSubmit.name=this.user.name;
      this.patientSubmit.username=this.user.email;
      this.message.message=this.user.message;
      this.message.iddentist=this.dentist.userd;
      this.patientSubmit.images[0]="https://db.masterdent24.org/dental24ImgApi/server/local-storage/tixsImages/profile.png";
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password, this.user.usertype, this.user.status)
        .subscribe(user => {
          this._uw.patient=user;
          this.authService.setUser(user);
          const token = user.id;
          this.patientSubmit.userd='p'+token;
          this.message.idpatient='p'+token;
          this._uw.userd=token;  
          this._uw.userW.id=user.id;
          this._uw.usertype="patient";
          this._uw.isLogged=true;
          this.message.dir="pd";
          this.authService.setToken(token);
          //this.router.navigate(['/dashboard']);
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
      this.patientSubmit.usertype='patient';
      this.patientSubmit.status='new';
      setTimeout(() => {
          this.isError = false;
          this.savePatient(this.patientSubmit);
            this.saveMessage(this.message);
        }, 5000);
          
           // this.router.navigate(['/message']);
        } 
    else {
      this.onIsError();
    }
  }
  public savePatient(patient){
     return this.dataApi.savePatient(this.patientSubmit)
        .subscribe(
             
          //   patientSubmit => this.router.navigate(['/message'])
        );

        this.waiting=false;
  }  
  public saveMessage(message){
      console.log(message);
     return this.dataApi.saveMessage(message)
        .subscribe(
           message => this.router.navigate(['/message'])
        );

        this.waiting=false;
  }

  public sendingMessage(){
    this._uw.sendingMessage=true;
  }


  ngOnInit() {
    this.dentist={};
    this.dentist.images=[];
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
      this.getProfile(this.route.snapshot.paramMap.get('id'));
      this.ngFormSignup = this.formBuilder.group({
      message: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    });
  }

    getProfile(id: string){
    this.dataApi.getProfileById(id).subscribe(dentist => (this.dentist = dentist));

   
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
