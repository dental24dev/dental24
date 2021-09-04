import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DentistInterface } from '../../models/dentist-interface'; 
import { AppointmentInterface } from '../../models/appointment-interface'; 
import { RequestInterface } from '../../models/request-interface'; 
import { SpecInterface } from '../../models/spec-interface'; 

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(
public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    private location: Location,
  	) { }
  public appointmentsf:any[]=[]; 
   public appointments:any[]=[];

getPatientAppointments(id:string){
        this.dataApi.getPatientAppointments(id).subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.appointments=res;  
           this._uw.totalAppointments = res.length;          
        }
     });  
    }
getDentistAppointments(id:string){
        this.dataApi.getDentistAppointments(id).subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.appointments=res;  
           this._uw.totalAppointments = res.length;          
        }
     });  
    }
  ngOnInit() {
  	if(this._uw.usertype=="patient"){
  		this.getPatientAppointments(this._uw.userActiveId);
  	}
  	if(this._uw.usertype=="dentist"){
  		this.getDentistAppointments(this._uw.userActiveId);
  	}
  }

}
