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
	RegisterdoctorComponent
	// FruitbannerboxComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	// {path:'fruitbannerbox',component:FruitbannerboxComponent},
	{path:'header',component:HeaderComponent},
	{path:'footer',component:FooterComponent},
	{path:'register',component:RegisterComponent},
	{path:'registerform',component:RegisterformComponent},
	{path:'login',component:LoginComponent},
	{path:'lateralmenu',component:LateralmenuComponent},
	{path:'account',component:AccountComponent, canActivate:[AuthGuard]},
	{path:'dentists',component:DentistsComponent},
	{path:'patients',component:PatientsComponent},
	{path:'registerdoctor',component:RegisterdoctorComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

