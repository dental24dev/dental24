import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	HeaderComponent,
	FooterComponent,
	RegisterComponent,
	RegisterformComponent,
	LoginComponent,
	LateralmenuComponent,
	AccountComponent,
	DentistsComponent,
	PatientsComponent,
	ProfileComponent,
	DashboardComponent,
	SuccessregisterComponent,
	SuccesspatientregisterComponent,
	SuccessappointmentComponent,
	RegisterdoctorComponent,
	NewappointmentComponent,
	AppointmentsComponent,
	MessageComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'header',component:HeaderComponent},
	{path:'footer',component:FooterComponent},
	{path:'register',component:RegisterComponent},
	{path:'registerform',component:RegisterformComponent},
	{path:'login',component:LoginComponent},
	{path:'lateralmenu',component:LateralmenuComponent},
	{path:'account',component:AccountComponent, canActivate:[AuthGuard]},
	{path:'dentists',component:DentistsComponent},
	{path:'patients',component:PatientsComponent},
	{path:'message',component:MessageComponent},
	{path:'profile/:id',component:ProfileComponent},
	{path:'dashboard',component:DashboardComponent},
	{path:'newappointment',component:NewappointmentComponent},
	{path:'appointments',component:AppointmentsComponent},
	{path:'successregister',component:SuccessregisterComponent},
	{path:'successappointment',component:SuccessappointmentComponent},
	{path:'successpatientregister',component:SuccesspatientregisterComponent},
	{path:'registerdoctor',component:RegisterdoctorComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

