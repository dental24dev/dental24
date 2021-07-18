import { Component, OnInit,ViewChild } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DentistInterface } from '../../models/dentist-interface'
import { PatientInterface } from '../../models/patient-interface'

import { HttpClient } from  '@angular/common/http';

import { DemoFilePickerAdapter } from  '../../file-picker.adapter';
import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';



import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
  
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
   adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor( 
      private  http: HttpClient,
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
     private formBuilder: FormBuilder,
    public router: Router,
    ) { }
 loadAPI = null;  
   ngFormNewDentistData: FormGroup;
   ngFormNewPatientData: FormGroup;
     dentistSubmitted = false;
     patientSubmitted = false;
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
  public patientSubmit : PatientInterface ={
    name:"",
    username:"",
    address:"",
    surname:"",
    phone:""
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
  getPatientByUserd(id: string){
    this.dataApi.getPatientByUserd2(id).subscribe(patientSubmit => (this.patientSubmit = patientSubmit));
    console.log("consultado"+this.patientSubmit.name);
   
  }
 
  
      get fval() {
  return this.ngFormNewDentistData.controls;
  }
      get fval2() {
  return this.ngFormNewPatientData.controls;
  }

  ngOnInit() {
    if(!this._uw.isLogged){
      this.router.navigate(['/login']);
    }

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
    if(this._uw.usertype=='patient'){
        this.dataApi.getPatientByUserd2(this._uw.userW.id).subscribe((res:any) => {    
        this.patientSubmit=(res[0]);        
        });
      this.ngFormNewPatientData = this.formBuilder.group({
      username: ['', [Validators.required]] ,
      name: ['', [Validators.required]] ,
      address:['',[Validators.required]], 
      phone:['',[Validators.required]], 
      surname:['',[Validators.required]]
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

    reset():void{
    // this._uw.selectorA=true;
    // this.router.navigate(['/addtixs']);
  }
   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
  //this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {  
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
     this.myFiles.push(file);
  }


  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }


}

