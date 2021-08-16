import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { MessageInterface } from '../../models/message-interface'; 
import { PatientInterface } from '../../models/patient-interface';
import { DentistInterface } from '../../models/dentist-interface';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
  private formBuilder: FormBuilder,
    public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    public dataApi: DataApiService,
    public router: Router,
    private authService: AuthService,
    private location: Location
  	) { }
	bandera= "";  
	selected= false;
	conversationImage= "";  
	conversationUsername= "";  
	messageIni= "";  
	bandera2= "";  
	indices= 0;  
	k= 0;  
	public message:MessageInterface;
	public dentist:DentistInterface;
	public dentists:DentistInterface;	
	public patient:PatientInterface;
	public patients:PatientInterface;
//	public messages:MessageInterface;
	public orderedMessages:any[]=[];
	public conversations:any[]=[];
	public conversation:any[]=[];
	public idArray:any[]=[];
	public conversationDetail:any[]=[];
	public conversationArray:any[]=[];
 loadAPI = null;
  url = "assets/assetsdental/js/jquery.min.js";
  url1 = "assets/assetsdental/js/popper.min.js";
  url2= "assets/assetsdental/js/slick.js";
  url3 = "assets/assetsdental/plugins/swiper/js/swiper.min.js";
  url4 = "assets/assetsdental/js/script.js";
  url5 = "assets/assetsdental/js/script.js";
public messages:any[]=[];

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
  getPatientMessages(id: string){
	this.dataApi.getPatientMessages(id).subscribe((res:any) => {
		if (res[0] === undefined){
	    	console.log("messages no found");
	   		}
	   	else{
	    	this.messages=res;  

	     	this._uw.totalMessages	 = res.length;    
	    	for(let i =0;i<this._uw.totalMessages;i++){

	    	console.log("original:" +this.messages[i].message);
	    	}
	     		this.sorter();      
	    }
	 }); 
  }
  getDentistMessages(id: string){
	this.dataApi.getDentistMessages(id).subscribe((res:any) => {
		if (res[0] === undefined){
	    	console.log("hey");
	   		}
	   	else{
	    	this.messages=res;  
	     	this._uw.totalMessages = res.length; 
	     		this.sorter2();         
	    }
	 });  
  }
getAllDentists(){
        this.dataApi.getAllDentistsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        //console.log("hey");
       }else{
        this.dentists=res;  
           this._uw.totalWriters = res.length;          
        }
     });  
    }
    getAllPatients(){
        this.dataApi.getAllPatientsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.patients=res;  
           this._uw.totalWriters = res.length;          
        }
     });  
    }
exam(){
  		var array = [
	{"id":3645,
	"date":"2018-07-05T13:13:37",
	"date_gmt":"2018-07-05T13:13:37",
	"guid":{"rendered":""},
	"modified":"2018-07-05T13:13:37",
	"modified_gmt":"2018-07-05T13:13:37",
	"slug":"vpwin",
	"status":"publish",
	"type":"matrix",
	"link":"",
	"title":{"rendered":"VPWIN"},
	"content":{"rendered":"",
	"protected":false},
	"featured_media":0,
	"parent":0,
	"template":"",
	"better_featured_image":null,
	"acf":{"domain":"SMB",
		"ds_rating":"3",
		"dt_rating":""},
	},
	{"id":3645,
	"date":"2018-07-05T13:13:37",
	"date_gmt":"2018-07-05T13:13:37",
	"guid":{"rendered":""},
	"modified":"2018-07-05T13:13:37",
	"modified_gmt":"2018-07-05T13:13:37",
	"slug":"vpwin",
	"status":"publish",
	"type":"matrix",
	"link":"",
	"title":{
		"rendered":"adfPWIN"
	},
	"content":{"rendered":"",
	"protected":false},
	"featured_media":0,
	"parent":0,
	"template":"",
	"better_featured_image":null,
	"acf":{
		"domain":"SMB",
		"ds_rating":"3",
		"dt_rating":""
	}
	},
	{"id":3645,
	"date":"2018-07-05T13:13:37",
	"date_gmt":"2018-07-05T13:13:37",
	"guid":{"rendered":""},
	"modified":"2018-07-05T13:13:37",
	"modified_gmt":"2018-07-05T13:13:37",
	"slug":"vpwin",
	"status":"publish",
	"type":"matrix",
	"link":"",
	"title":{"rendered":"bbfPWIN"},
	"content":{"rendered":"",
	"protected":false},
	"featured_media":0,
	"parent":0,
	"template":"",
	"better_featured_image":null,
	"acf":{"domain":"SMB",
		"ds_rating":"3",
		"dt_rating":""}
	}
		];
array.sort((a,b) => a.title.rendered.localeCompare(b.title.rendered));
 
 console.log(array);
}

	sorter(){
		this.idArray=[];
		this.conversationArray=[];
		this.idArray[0]=this.messages[0].iddentist;
		this.messages.sort((a,b) => a.iddentist.localeCompare(b.iddentist));
		for (let i =0;i<this._uw.totalMessages;i++){
			if (this.messages[i].iddentist!=this.bandera){
				this.indices=this.indices+1;
				let indice =this.messages[i].iddentist;
				this.idArray.push(indice);
				this.bandera=this.messages[i].iddentist;
			}
		}
		  	for(let i =0;i<this.idArray.length;i++){

	    	console.log("original:" +this.idArray);
	    	}
		this.bandera2=this.messages[0].iddentist;
		this.conversations=[];
		for(let i =0;i<this.indices;i++){
		 	let sizeM=this._uw.totalMessages;
		 	this.conversation=[];
			for(let j =0;j<sizeM ;j++){
				if(this.messages[j].iddentist==this.idArray[i+1]){
					this.conversation.push(this.messages[j]);
					console.log("se agrega en la conversacion ("+i +") :"+this.messages[j].message);
				}	
			}
			this.conversations[i]=this.conversation;
		}
		for (let i=0;i<this.conversations.length;i++){
			for (let j =0;j<this._uw.totalWriters;j++){
				if(this.dentists[j].userd==this.idArray[i+1]){
					this.conversationArray[i]=
						{
					dentist:this.dentists[j].username,
					message:this.messageIni,
					image:this.dentists[j].images[0]
					};
				}
			}
			console.log("mensajeconversacion ("+i +") :"+this.conversationArray[i]);

		}
	}
	sorter2(){
		this.idArray=[];
		this.conversationArray=[];
		this.idArray[0]=this.messages[0].idpatient;
		this.messages.sort((a,b) => a.idpatient.localeCompare(b.idpatient));
		console.log(this.idArray);
		for (let i =0;i<this._uw.totalMessages;i++){
			if (this.messages[i].idpatient!=this.bandera){
				this.indices=this.indices+1;
				let indice =this.messages[i].idpatient;
				this.idArray.push(indice);
				this.bandera=this.messages[i].idpatient;
			}
		}
		this.bandera2=this.messages[0].idpatient;
		this.conversations=[];
		for(let i =0;i<this.indices;i++){
		 	let sizeM=this._uw.totalMessages;
		 	this.conversation=[];
			for(let j =0;j<sizeM ;j++){
				if(this.messages[j].idpatient==this.idArray[i+1]){
					this.conversation.push(this.messages[j]);
				}	
			}
			this.conversations[i]=this.conversation;
		}
		for (let i=0;i<this.conversations.length;i++){
			for (let j =0;j<this._uw.totalWriters;j++){
				if(this.patients[j].userd==this.idArray[i+1]){
					this.conversationArray.push({patient:this.patients[j].username,message:this.messageIni,image:this.patients[j].images[0]});
				}
			}

		}
	}

  

  loadMessages(j){
  	this.selected=true;
  	this.conversationImage=this.conversationArray[j].image;
  	this.conversationUsername=this.conversationArray[j].dentist;
  	this.conversationDetail=this.conversations[j];
  
  }
  loadMessages2(j){
  	this.selected=true;
  	this.conversationImage=this.conversationArray[j].image;
  	this.conversationUsername=this.conversationArray[j].patient;
  	this.conversationDetail=this.conversations[j];
  
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
        });
      }
    this._uw.loaded=true;
  //	console.log(this._uw.usertype);
  	this.getAllDentists();
  	this.getAllPatients();
  //	this._uw.usertype="patient";
  	//this._uw.userd="p610594136c80647aa840319e";
  	this.messages=[];
  //	this.exam();
  	if(this._uw.usertype=="patient"){
  		this.getPatientMessages(this._uw.userActiveId);
  	}
  	if(this._uw.usertype=="dentist"){
  	//	console.log("activeId"+this._uw.userActiveId)
  		this.getDentistMessages(this._uw.userActiveId);
  	}
  }

}
