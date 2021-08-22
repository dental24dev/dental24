import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
	admin:boolean;
	adminName:string;
	affiliate:boolean;
	allLoaded:boolean=false;
	assBook:any={};
	assValidation:any={};
	bandera:string;
	book:any={};
	bookToCancel:any={};
	botas:boolean=false;
	buttonDisabled:boolean=false;
	appointment:any={};
	car:any[]=[];
	dentistsf:any[]=[];
	card:any={};
	cardsResult:any[]=[];
	currency:number=1;
		comision:number=1;
		paypal:boolean=false;
		zelle:boolean=false;
		sendingMessage:boolean=false;
	categorySelected:string;	
	dentist:any={};
	dentistSubmitted:boolean=false;
	editingTrek:boolean=false;
	errorFormAffiliate:boolean;
	errorFormAddtixs:boolean;
	errorFormPartner:boolean;
	errorFormSendSale:boolean;
	errorFormSendOrder:boolean;
	errorFormSendDentist:boolean;
	errorFormUpdateDentist:boolean;
	errorFormUpdatePatient:boolean;
	errorFormPago:boolean;
	feet:number=0;
	file:any[]=[];st
	filter:boolean=false;
	foredit:any={};
	globalCategory:boolean=true;
	idCard:string;
	idspec:string;
	imagePreviewProduct:string;
	images:any[]=[];
	info:any={};
	isLogged:boolean=false;
	loaded:boolean=false;
	method:string;
	moccs:boolean=false;
	name:string;
	numProd:number=0;
	order:any={};
	orderPro:any={};
	pagoImage:any[]=[];
	pedido:any={};
	partner:boolean;
	queue:any[]=[];
	recargo:boolean=false;
	selectorA:boolean;
	selectorB:boolean;
	showAll:boolean=false;
	subTotal:number=0;
	tixs:any[]=[];
	specs:any={};
	tixPreview:any={};
	newdentistrequest:any={};
	tixsOrigin:any[]=[];
	tixsDiscount:any={};
	tixsNew:any={};
	total:number=0;
	totalBooks:number;	
	totalSpecs:number;
	totalMessages:number;
	totalDentists:number;
	totalDiscount:number=0;
	totalWriters:number=0;
	totalNew:number=0;
	totalProducts:number=0;
	totalTixs:number;
	type:string;
	dentistIdMessage:string;
	usertype:string;
	typeGlobal:boolean=false;
	typeSize:boolean=false;
	user:any={};
	userActiveId:string;
	userd:string;
	usersPending:boolean;
	userW:any={};
	validation:any={};
	validationEmail:any={};
	validationToDelete:any={};
	zapatos:boolean=false;
	patient:any={};
	// book:any[]=[];
  constructor() { }
}


