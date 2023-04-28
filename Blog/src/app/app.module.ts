import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserAuth2Module } from './user-auth2/user-auth2.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { UsdTOinrPipe } from './pipes/usd-toinr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElementDirective } from './red-element.directive';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'


//import { ParentComponent } from './parent/parent.component';
//import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserList2Component,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ParentComponent,
    UsdTOinrPipe,
    RedElementDirective,
    FooterComponent,

       
    //ParentComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    UserAuth2Module,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgbAlertModule
    //NgbPaginationModule, 
    //NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
