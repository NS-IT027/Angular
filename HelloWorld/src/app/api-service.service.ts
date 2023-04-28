import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class ApiService{
private apiUrl = 'https://api.example.com/';
constructor(private http: HttpClient) { }
getData() {
return this.http.get(this.apiUrl);
}
// postData(data) {
// return this.http.post(this.apiUrl, data);
// }
}