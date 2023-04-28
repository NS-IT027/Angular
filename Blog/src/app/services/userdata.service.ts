import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url1 = "https://localhost:44392/api/Emp";
  url2 = "https://api.publicapis.org/entries";
  url3 = "https://api.coindesk.com/v1/bpi/currentprice.json";
  url4 = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  constructor(private http : HttpClient) {}
  users(){
    // return [
    //   {username:'Monica' , lastname:'Galler', gender:'Female' , email: 'mg@friends.com'},
    //   {username:'Ross' , lastname:'Galler', gender:'Male' , email: ' rg@friends.com'},
    //   {username:'Rechal' , lastname:'Green', gender:'Female' , email: ' rg@friends.com'},
    //   {username:'Chandler' , lastname:'Bing', gender:'Male' , email: ' cb@friends.com'},
    //   {username:'Pheeby' , lastname:'Buffey', gender:'Female' , email: ' pb@friends.com'},
    //   {username:'Joey' , lastname:'Tribiani', gender:'Male' , email: ' tb@friends.com'},
    // ]

    // return this.http.get(this.url1);
    // return this.http.get(this.url2);
    // return this.http.get(this.url3);
    return this.http.get(this.url4);

  }





}
