import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { SaleInterface } from '../models/sale-interface';
import { DentistInterface } from '../models/dentist-interface';
import { OrderInterface } from '../models/order-interface';
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
	dentist: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization: this.authService.getToken()
  		});
  	updateTix(tix :TixInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.masterdent24.org:3032/api/tixes/${id}`;
		return this.http
		.put<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	getAllTixs(){
		const url_api = 'https://db.masterdent24.org:3032/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
 		getTamano(){
		const url_api = 'https://db.masterdent24.org:3032/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getTamanoIni(){
		const url_api = 'https://db.masterdent24.org:3032/api/tixes?filter[where][initload]=activated';
		return (this.tixs = this.http.get(url_api));
	}
 	

	getAllTixsInitload(){
		const url_api = 'https://db.masterdent24.org:3032/api/tixes?filter[where][initload]=activated';
		return this.http.get(url_api);
	}
	getInfo(){
		const url_api=`https://db.masterdent24.org:3032/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	saveSale(sale :SaleInterface){
		const url_api='https://db.masterdent24.org:3032/api/sale';
		return this.http
		.post<SaleInterface>(url_api, sale)
		.pipe(map(data => data));
	}	
	saveDentist(dentist :DentistInterface){
		const url_api='https://db.masterdent24.org:3032/api/dentist';
		return this.http
		.post<DentistInterface>(url_api, dentist)
		.pipe(map(data => data));
	}
	saveOrder(order :OrderInterface){
		const url_api='https://db.masterdent24.org:3032/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
sendMailNewBookAppToAdmin(book){
		const url_api='https://email.penguinscleaning.ca:3005/newBookAppToAdmin';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}
	
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.masterdent24.org:3032/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	getOrderByNpedido(npedido: string){
		const url_api = `https://db.masterdent24.org:3032/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
	getDentistByUserd(userd: string){
		const url_api = `https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=${userd}`;
		this.dentist = this.http.get(url_api);
		return (this.dentist);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}

	// 	getDentistByUserd2(userd:string){
	// 	let indice = userd;
	// 	const url_api = "https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=d"+indice;
	// 	return this.http.get(url_api);
	// }

getDentistByUserd2(userd: string){
		let indice = userd;
		const url_api =  "https://db.masterdent24.org:3032/api/dentist?filter[where][userd]=d"+indice;
		this.dentist = this.http.get(url_api);
		return (this.dentist);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}
		// let indice = id;
		// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}