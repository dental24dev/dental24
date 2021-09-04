import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { PatientInterface } from '../../models/patient-interface';
import { DataApiService } from '../../services/data-api.service';
import { ScrollTopService }  from '../../services/scroll-top.service';

import { AuthService } from '../../services/auth.service';

import { ActivatedRoute, Params} from '@angular/router';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successappointment',
  templateUrl: './successappointment.component.html',
  styleUrls: ['./successappointment.component.css']
})
export class SuccessappointmentComponent implements OnInit {

  constructor(
public scrollTopService:ScrollTopService,
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  }

}
