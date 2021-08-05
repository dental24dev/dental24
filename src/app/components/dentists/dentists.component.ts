import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DentistInterface } from '../../models/dentist-interface'; 
import { SpecInterface } from '../../models/spec-interface'; 
@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.css']
})
export class DentistsComponent implements OnInit {

  constructor(   public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    ) { }
 loadAPI = null;  
 gender = "all";  
 genders:any={};
public dentist:DentistInterface;
public dentists:DentistInterface;
public dentistsf:DentistInterface;
public spec:SpecInterface;
public specs:SpecInterface;
  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js";
  url5 = "assets/assetsdental/js/script.js";

getAllDentists(){
        this.dataApi.getAllDentistsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.dentists=res;  
           this._uw.totalDentists = res.length;          
        }
     });  
    }

setSelectedAll(){
  this.dentistsf=this.dentists;
  for(let i=0; i < this._uw.totalSpecs ; i++ ){
    this.specs[i].filterStatus=true;
    this.specs[i].number=0;
    for(let j=0; j < this._uw.totalDentists ; j++ ){
     
          let dentistSpecsLength=this.dentists[j].specs.length;
          for (let k=0;k<dentistSpecsLength;k++ ){
            if(this.dentists[j].specs[k]==this.specs[i].idspec){
              this.specs[i].number=this.specs[i].number+1;
              this.dentistsf[j].visible=true;this.dentistsf[j].added=true;
            }
          }
       
      }
  }
   
}

setSelected(i){
this.specs[i].filterStatus=true;
this.filter(i,this.specs[i].filterStatus);

}
setGenderFemale(){
    this.genders.female=true;
    this.genders.male=false;
    this.gender="female";
}
setAmbos(){
  this.genders.female=false;
    this.genders.male=false;
    this.gender="all";
}
setGenderMale(){
  this.genders.female=false;
    this.genders.male=true;
    this.gender="male";
}
setUnselected(i){
 this._uw.idspec=this.specs[i].idspec;
this.specs[i].filterStatus=false;
this.filter(i,this.specs[i].filterStatus);

}
filter(index,bandera){ 
  this.dentistsf={};
  this.dentistsf=this.dentists;
  for(let j=0; j < this._uw.totalDentists ; j++ ){
    this.dentistsf[j].viewLevel=0;
    for(let k=0; k < this._uw.totalSpecs ; k++ ){
      if (this.specs[k].filterStatus==true){
        let dentistSpecsLength=this.dentists[j].specs.length;
        for(let l=0; l < dentistSpecsLength; l++ ){
          if(this.dentists[j].specs[l]== this.specs[k].idspec ){
            this.dentistsf[j].viewLevel=this.dentistsf[j].viewLevel+1;
            this.dentistsf[j].visible=true;
            }
          }
        }
      if (this.specs[k].filterStatus==false){
        let dentistSpecsLength=this.dentists[j].specs.length;
        for(let l=0; l < dentistSpecsLength ; l++ ){
          if(this.dentists[j].specs[l]== this.specs[k].idspec ){
            this.dentistsf[j].viewLevel=this.dentistsf[j].viewLevel-1;   
            }
          }
        }
      }
    }
  }


getAllSpecialties(){
        this.dataApi.getAllSpecialties().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.specs=res;  
        this._uw.specs=res;
           this._uw.totalSpecs = res.length;          
        console.log("specialties: " +this._uw.totalSpecs );
        }
       this.setSelectedAll();
     //  this.dentistsf=this._uw.dentistsf;
        console.log("dentists: " +this._uw.dentistsf.length );
     });  
     
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
  ngOnInit() {
    this.genders.male=false;
    this.genders.female=false;
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
      this.getAllDentists();
      this.getAllSpecialties();
       
    this._uw.loaded=true;
  }

}
