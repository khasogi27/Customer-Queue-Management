import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/tools/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './route/input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './route/request-queue-number/request-queue-number.component';
import { MenuComponent } from './route/menu/menu.component';
import { VisitorListComponent } from './route/visitor-list/visitor-list.component';
import { TestcaseComponent } from './route/testcase/testcase.component';
import { CustomerRegisterComponent } from './route/input-visitor-details/customer-register/customer-register.component';

import { CustomerService } from './shared/services/customer.service';
import { UserService } from './shared/services/user.service';
import { VisitorService } from './shared/services/visitor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
    VisitorListComponent,
    TestcaseComponent,
    CustomerRegisterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxBarcodeModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    CustomerService,
    UserService,
    VisitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
