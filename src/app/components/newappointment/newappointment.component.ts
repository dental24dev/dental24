import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
import { XunkCalendarModule } from '../../../xunk-calendar/xunk-calendar.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SpecInterface } from '../../models/spec-interface'; 
@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements  AfterViewInit {
	@ViewChild('cardInfo', {static: false}) 
	cardInfo:ElementRef;
	card:any;
	cardError:string;
	ccInfo:boolean=false;
	sent:boolean=false;
	succeeded:boolean=false;
	hourSeted:boolean=false;
	msg:string="";
  public specs:any[]=[];
  public selDate = { date:1, month:1, year:1 };
  constructor(

	private ngZone: NgZone,
	private dataApi: DataApiService,
	public _uw:UserWService,
	private location: Location,

    private router: Router
  	) { }
   serviceHours = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM'
    ];

getAllSpecialties(){
        this.dataApi.getAllSpecialties().subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.specs=res;  
        this._uw.specs=res;
           this._uw.totalSpecs = res.length;          
        }
     });  
    }

 
  ngOnInit() {
  	this.selDate = XunkCalendarModule.getToday();  
    if(this._uw.isLogged!=true){
           this.router.navigate(['/login']);
    }else{

      this.getAllSpecialties();
      }
    }
  
    ngAfterViewInit() {
  	   
    }
  
 onChange({error}){
if (error){
	this.ngZone.run(()=>this.cardError=error.message);
	
	}
	else {
	this.ngZone.run(()=>this.cardError=null);
	}
  }

setHour(parameter){
	this._uw.appointment.time=parameter;
	this.hourSeted=true;
	this.msg="Time: ";
}

}
