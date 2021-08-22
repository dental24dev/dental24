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
import { UserInterface } from '../../models/user-interface'; 
import { SpecInterface } from '../../models/spec-interface'; 
import { RequestInterface } from '../../models/request-interface'; 
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
   constructor(
    private authService: AuthService,
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    private location: Location,
    private http: HttpClient,
    private formBuilder: FormBuilder
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
  ngFormNewDentistData: FormGroup;
  dentistSubmitted = false;
  loaded = false;
  gender = "";
  submitted = false;
  public isError = false;
  public images:any[]=[];
  public specStatus:any[]=[];
  public msgError = '';
  public request:RequestInterface;
  public requests:RequestInterface;
  public spec:SpecInterface;
  public specs:SpecInterface;
  public dentistSubmit : DentistInterface ={
    address:"",
    collegeN:"",    
    username:"",
    clinicName:"",
    images:[],
    ta:0,
    name:"",
    gender:"",
    password:"",
    phone:"",
    status:"",
    specialty:"",
    specs:[],
    aca:[],
    lab:[],
    awa:[],
    workPlaces:[],
    surname:"",
    userd:""
  }; public dentist : DentistInterface ={
    address:"",
    collegeN:"",
    clinicName:"",
    ta:0,
    gender:"",
    images:[],
    name:"",
    password:"",
    phone:"",
    status:"",
    specialty:"",
    specs:[],
    surname:"",
    userd:"",
    username:"",
    usertype:""
  };
 
   setGender(gender):void{
        this.gender=gender;     
    }

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
  public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  public ok(){
      this.dentistSubmitted = true; 
      if (this.ngFormNewDentistData.invalid) {
        this._uw.errorFormSendDentist=true;
      return;
        } 
      this._uw.dentistSubmitted=true;
      this.dentist = this.ngFormNewDentistData.value;
      this.dentist.status="new";
      this.dentist.dentistIdPre=this.aleatorio(10000,99999);
      let dentistIdString = this.dentist.dentistIdPre.toString();
      this.dentist.dentistId=dentistIdString;
      this._uw.dentist.dentistId=this.dentist.dentistId;
      this._uw.dentist.name=this.dentist.name;
      this._uw.dentist.email=this.dentist.email;
      this._uw.dentist.dentistId=this.dentist.dentistId;
      this.dentistSubmit.name=this.dentist.name;
      this.dentistSubmit.surname=this.dentist.surname;
      this.dentistSubmit.usertype='dentist';
      this.dentistSubmit.status='new';
      this.dentistSubmit.gender=this.gender;
      this.dentistSubmit.images[0]="https://db.masterdent24.org/dental24ImgApi/server/local-storage/tixsImages/profile.png";
      this._uw.newdentistrequest.email="frutmeteam@protonmail.com";
      this._uw.newdentistrequest.subject="Nueva solicitud de registro para dentista";
      this._uw.newdentistrequest.name=this.dentist.name;
      this._uw.newdentistrequest.phone=this.dentist.phone;
      this.dentistSubmit.specialty=this.dentist.specialty;
      for(let i =0; i<this._uw.totalSpecs;i++){
        if(this.specStatus[i].filterStatus==true){
          this.dentistSubmit.specs.push(this.specs[i].idspec);
          }
        }
      this.dataApi.newdentistrequest(this._uw.newdentistrequest).subscribe();
      return this.dataApi.saveDentist(this.dentistSubmit).subscribe(entistSubmit => this.router.navigate(['/successregister']));
      this._uw.errorFormSendDentist=false;
    }
  public saveDentist(dentist){
    this.dataApi.saveDentist(dentist);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  ngOnInit() {
    this.getAllSpecs();
    this.dentistSubmit.name=this._uw.dentist.name;
    this.dentistSubmit.username=this._uw.dentist.email;
    this.dentistSubmit.userd="d"+this._uw.dentist.userd
    this.ngFormNewDentistData = this.formBuilder.group({
      username: ['', [Validators.required]] ,
      name: [+this._uw.dentist.name, [Validators.required]] ,
      clinicName:['',[Validators.required]], 
      address:['',[Validators.required]], 
      phone:['',[Validators.required]], 
      ta:['',[Validators.required]], 
      surname:['',[Validators.required]],
      collegeN:['',[Validators.required]]
         });
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
        });
      }
    this._uw.loaded=true;
    this.dropdownList = [];  
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar todas',
      unSelectAllText: 'Deseleccionar todas',
      itemsShowLimit: 7,
      allowSearchFilter: false
    };
  }
  getAllSpecs(){
        this.dataApi.getAllSpecialties().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
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
             
          this.loaded=true;
      }, 10000);
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
  get fval() {
  return this.ngFormNewDentistData.controls;
  }
  get fval2() {
    return this.ngFormNewDentistData.controls;
  }
 
}
