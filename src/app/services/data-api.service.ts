import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { SaleInterface } from '../models/sale-interface';
import { DentistInterface } from '../models/dentist-interface';
import { SpecInterface } from '../models/spec-interface';
import { PatientInterface } from '../models/patient-interface';
import { MessageInterface } from '../models/message-interface';
import { OrderInterface } from '../models/order-interface';
import { QuoteInterface } from '../models/quote-interface';
import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	info: Observable<any>;
	tixs: Observable<any>;
	tix: Observable<any>;
	sale: Observable<any>;
	order: Observable<any>;
	quote: Observable<any>;
	quotes: Observable<any>;
	dentist: Observable<any>;
	dentists: Observable<any>;	
	spec: Observable<any>;
	specs: Observable<any>;	
	message: Observable<any>;
	messages: Observable<any>;
	patient: Observable<any>;
	patients: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json"
  		});



	getPatientMessages(id: string){
		const url_api = ` https://db.masterdent24.org:3032/api/messages?filter[where][idpatient]=${id}`;
		// return this.http.get(url_api); https://db.masterdent24.org:3032/
		return (this.messages = this.http.get(url_api));
	}	
	getDentistMessages(id: string){
		const url_api = ` https://db.masterdent24.org:3032/api/messages?filter[where][iddentist]=${id}`;
		// return this.http.get(url_api);
		return (this.messages = this.http.get(url_api));
	}

  	updateTix(tix :TixInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=` https://db.masterdent24.org:3032/api/tixes/${id}`;
		return this.http
		.put<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}

	getAllDentistsReturn(){
		const url_api = ' https://db.masterdent24.org:3032/api/dentist?filter[where][status]=activated';
		return (this.dentists = this.http.get(url_api));
	}	
	getAllPatientsReturn(){
		const url_api = ' https://db.masterdent24.org:3032/api/patient?filter[where][status]=activated';
		return (this.patients = this.http.get(url_api));
	}
	getAllSpecialties(){
		const url_api = ' https://db.masterdent24.org:3032/api/specialties';
		return (this.specs = this.http.get(url_api));
	}
	getAllTixs(){
		const url_api = ' https://db.masterdent24.org:3032/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
 		getTamano(){
		const url_api = ' https://db.masterdent24.org:3032/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getTamanoIni(){
		const url_api = ' https://db.masterdent24.org:3032/api/tixes?filter[where][initload]=activated';
		return (this.tixs = this.http.get(url_api));
	}
 	

	getAllTixsInitload(){
		const url_api = ' https://db.masterdent24.org:3032/api/tixes?filter[where][initload]=activated';
		return this.http.get(url_api);
	}
	getInfo(){
		const url_api=` https://db.masterdent24.org:3032/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	saveSale(sale :SaleInterface){
		const url_api=' https://db.masterdent24.org:3032/api/sale';
		return this.http
		.post<SaleInterface>(url_api, sale)
		.pipe(map(data => data));
	}
	saveMessage(message :MessageInterface){
		const url_api=' https://db.masterdent24.org:3032/api/messages';
		return this.http
		.post<MessageInterface>(url_api, message)
		.pipe(map(data => data));
	}	
	savePatient(patient :PatientInterface){
		const url_api=' https://db.masterdent24.org:3032/api/patient';
		return this.http
		.post<PatientInterface>(url_api, patient)
		.pipe(map(data => data));
	}
	saveDentist(dentist :DentistInterface){
		const url_api=' https://db.masterdent24.org:3032/api/dentist';
		return this.http
		.post<DentistInterface>(url_api, dentist)
		.pipe(map(data => data));
	}
	saveOrder(order :OrderInterface){
		const url_api=' https://db.masterdent24.org:3032/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
newdentistrequest(request){
		const url_api='https://email.masterdent24.org:3029/newdentistrequest';
		return this.http
		.post(url_api, request,{headers: this.headers})
		.pipe(map(data => data));
	}
	
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=` https://db.masterdent24.org:3032/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	updateDentist(dentist :DentistInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=` https://db.masterdent24.org:3032/api/dentist/${id}`;
		return this.http
		.put<DentistInterface>(url_api, dentist)
		.pipe(map(data => data));
	}
	updatePatient(patient :PatientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=` https://db.masterdent24.org:3032/api/patient/${id}`;
		return this.http
		.put<PatientInterface>(url_api, patient)
		.pipe(map(data => data));
	}
	getOrderByNpedido(npedido: string){
		const url_api = ` https://db.masterdent24.org:3032/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
	getDentistByUserd(userd: string){
		const url_api = ` https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=${userd}`;
		this.dentist = this.http.get(url_api);
		return (this.dentist);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}

	// 	getDentistByUserd2(userd:string){
	// 	let indice = userd;
	// 	const url_api = " https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=d"+indice;
	// 	return this.http.get(url_api);
	// }

getDentistByUserd2(userd: string){
		let indice = userd;
		const url_api =  " https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=d"+indice;
		this.dentist = this.http.get(url_api);
		return (this.dentist);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
getPatientByUserd2(userd: string){
		let indice = userd;
		const url_api =  " https://db.masterdent24.org:3032/api/patient?filter[where][userd]=p"+indice;
		this.patient = this.http.get(url_api);
		return (this.patient);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
		getProfileById(id:string){
		let indice = id;
		const url_api=` https://db.masterdent24.org:3032/api/dentist/${indice}`;
		this.dentist = this.http.get(url_api);
		return (this.dentist);
	}
	
		// let indice = id;
		// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}