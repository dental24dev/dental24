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
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SpecInterface } from '../../models/spec-interface'; 
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
  loaded = false;
  dentistSubmitted = false;
  uploading = false;
  buttonDisabled = false;
  patientSubmitted = false;
  selectedItems = [];
  dropdownList = [];
  dropdownSettings = {};
  ngFormUpdateDentistData: FormGroup;
  ngFormUpdatePatientData: FormGroup;
  public spec:SpecInterface;
  public specs:SpecInterface;
  public images:any[]=[];
  public specStatus:any[]=[];
  public dentistSubmit : DentistInterface ={
    about:"",
    name:"",
    username:"",
    password:"",
    address:"",
    images:[],
    surname:"",
    userd:"",
    phone:"",
    clinicName:"",
    specs:[]
  };   
  public patientSubmit : PatientInterface ={
    name:"",
    username:"",
    address:"",
    images:[],
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
  
  public getAllSpecs(){
    this.dataApi.getAllSpecialties().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.specs=res;  
        this._uw.totalSpecs=res.length;          
        }
    });  
    setTimeout(() => {
      for (let i=0;i<this._uw.totalSpecs;i++){
          this.specStatus.push({filterStatus:false});
          this.dropdownList = this.dropdownList.  concat({
          id: i + 1,
          item_id: i + 1,
          item_text: this.specs[i].name,
          idspec: this.specs[i].idspec
        });
      }
      for (let i=0;i<this.dentistSubmit.specs.length; i++){
        for (let j=0;j<this._uw.totalSpecs;j++){
          if(this.dentistSubmit.specs[i]==this.specs[j].idspec){
            this.specStatus[j].filterStatus=true;
            this.selectedItems = this.selectedItems.concat({
              id: j + 1,
              item_id: j + 1,
              item_text: this.specs[j].name,
              idspec: this.specs[j].idspec
            });
          }
        }
      }
      this.loaded=true;
    }, 10000);
  }

  public upload(){
    this.uploading=true;
    this._uw.buttonDisabled=true;
  }


  getDentistByUserd(id: string){
    this.dataApi.getDentistByUserd2(id).subscribe(dentistSubmit => (this.dentistSubmit = dentistSubmit));
  }
  getPatientByUserd(id: string){
    this.dataApi.getPatientByUserd2(id).subscribe(patientSubmit => (this.patientSubmit = patientSubmit));
  }
  get fval() {
    return this.ngFormUpdateDentistData.controls;
  }
  get fval2() {
    return this.ngFormUpdatePatientData.controls;
  }
  onItemSelect(item: any) {
    let dato = 0;
    dato = this.specs[item.item_id-1].idspec;
    this.specStatus[item.item_id-1].filterStatus=true; 
  }
  onItemDeSelect(item: any) {
    let dato = 0;
    dato = this.specs[item.item_id-1].idspec;
    this.specStatus[item.item_id-1].filterStatus=false;
  }
  onSelectAll(items: any) {
  }
  onDeselectAll(items: any) {
  }

  okUpdateDentist(dentist){
    if (this.ngFormUpdateDentistData.invalid) {
      this._uw.errorFormUpdateDentist=true;
      return;
    } 
    this._uw.errorFormUpdateDentist=false;
    this.dentistSubmit=dentist;
    this.dentistSubmit.images=this._uw.images;
    this.dentistSubmit.specs=[];
    for(let i =0; i<this._uw.totalSpecs;i++){
      if(this.specStatus[i].filterStatus==true){
        this.dentistSubmit.specs.push(this.specs[i].idspec);
      }
    }
    let id = dentist.id;
    this.dataApi.updateDentist(this.dentistSubmit, id)
      .subscribe(
         dentist => this.router.navigate(['/dashboard'])
    );
  }

  okUpdatePatient(patient){
    if (this.ngFormUpdatePatientData.invalid) {
      this._uw.errorFormUpdatePatient=true;
      return;
    } 
    this._uw.errorFormUpdatePatient=false;
    this.patientSubmit=patient;
    this.patientSubmit.images=this._uw.images;
    let id = patient.id;
    this.dataApi.updatePatient(this.patientSubmit, id)
      .subscribe(
         patient => this.router.navigate(['/dashboard'])
    );
  }

  reset():void{
  }
  onValidationError(e: ValidationError) {

  }
  onUploadSuccess(e: FilePreviewModel) {

  }
  onRemoveSuccess(e: FilePreviewModel) {  

  }
  onFileAdded(file: FilePreviewModel) {
     this.myFiles.push(file);
  }
  removeFile() {
    this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }
  ngOnInit() {

    this.dropdownList = []; 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todas',
      unSelectAllText: 'Deseleccionar todas',
      itemsShowLimit: 7,
      allowSearchFilter: false
    };
 
    if(this._uw.usertype=='dentist'){
        this.dataApi.getDentistByUserd2(this._uw.userW.id).subscribe((res:any) => {    
        this.dentistSubmit=(res[0]); 
        this._uw.images=this.dentistSubmit.images;  
        this.getAllSpecs();        
      });
      this.ngFormUpdateDentistData = this.formBuilder.group({
          username: ['', [Validators.required]] ,
          name: ['', [Validators.required]] , 
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
      this.ngFormUpdatePatientData = this.formBuilder.group({
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
        });
      }
    this._uw.loaded=true;
  }
}

