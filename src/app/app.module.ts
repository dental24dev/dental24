import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
//RUTAS
import { app_routing } from "./app.routes";       
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//SERVICES
import {TixsService} from './services/tixs.service';

import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';
import {IpbucketService} from './services/ipbucket.service';
//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { FilePickerModule } from  '../assets/file-picker/src/public_api';
//COMPONENTS
import { TestappComponent } from './components/testapp/testapp.component';
import { Component, Inject} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterdoctorComponent } from './components/registerdoctor/registerdoctor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LateralmenuComponent } from './components/lateralmenu/lateralmenu.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AccountComponent } from './components/account/account.component';
import { DentistsComponent } from './components/dentists/dentists.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuccessregisterComponent } from './components/successregister/successregister.component';
import { SuccesspatientregisterComponent } from './components/successpatientregister/successpatientregister.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MessageComponent } from './components/message/message.component';
import { NewappointmentComponent } from './components/newappointment/newappointment.component';
import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { SuccessappointmentComponent } from './components/successappointment/successappointment.component';
@NgModule({
  declarations: [
    AppComponent,
    TestappComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    RegisterdoctorComponent,
    LoginComponent,
    RegisterformComponent,
    LateralmenuComponent,
    WrapperComponent,
    AccountComponent,
    DentistsComponent,
    PatientsComponent,
    DashboardComponent,
    SuccessregisterComponent,
    SuccesspatientregisterComponent,
    ProfileComponent,
    MessageComponent,
    NewappointmentComponent,
    AppointmentsComponent,
    SuccessappointmentComponent,
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    FilePickerModule,
    XunkCalendarModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  entryComponents:[ ],
  providers: [
    TixsService,

    DataApiService,
    ScrollTopService,
    UserWService,
    IpbucketService,
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
