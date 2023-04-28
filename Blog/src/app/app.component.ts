import { Component } from '@angular/core';
import { NgForm, FormControl , FormGroup, Validator, Validators } from '@angular/forms';
import { isThisTypeNode } from 'typescript';
import { UserdataService } from './services/userdata.service'
//import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [FormControl,FormGroup],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = '15';
  data = 'Code Step by Step';
  var1 = 100;
  displayVal : string = ' ';
  count =0;

  title2 = "If-else Condition : "
  // show = true; 
  // show = false; 
  show = 'YES';
  
  title3 = "Multiple else if Condition : "
  color1 = 'orange';
  color2 = 'cyan';
  color3 = 'green';
  
  title4 = "Switch Case : ";
  // color = 'red';
  color = 'orange';


  title5 = "For Loop : ";
  // users = ['Monica','Ross','Joey','Chandler','Rechal','Pheeby'];
  userDetails = [
    {username:'Monica' , lastname:'Galler', gender:'Female' , email: 'mg@friends.com'},
    {username:'Ross' , lastname:'Galler', gender:'Male' , email: ' rg@friends.com'},
    {username:'Rechal' , lastname:'Green', gender:'Female' , email: ' rg@friends.com'},
    {username:'Chandler' , lastname:'Bing', gender:'Male' , email: ' cb@friends.com'},
    {username:'Pheeby' , lastname:'Buffey', gender:'Female' , email: ' pb@friends.com'},
    {username:'Joey' , lastname:'Tribiani', gender:'Male' , email: ' tb@friends.com'},
  ];


  title6 = "Nested Loop : ";
  persons = [
    {username:'Monica' , lastname:'Galler' , socialAcc : ['FaceBook','Twitter','Insta'] },
    {username:'Ross' , lastname:'Galler' , socialAcc : ['FaceBook','WhatsApp','Yahoo'] },
    {username:'Rechal' , lastname:'Green' , socialAcc : ['YouTube','Twitter', 'Telegram'] },
    {username:'Chandler' , lastname:'Bing' , socialAcc : ['LinkedIn','Twitter','Insta'] },
    {username:'Pheeby' , lastname:'Buffey', socialAcc : ['FaceBook','Sanp','Insta'] },
    {username:'Joey' , lastname:'Tribiani', socialAcc : ['FaceBook','Twitter','Tinder'] },
  ];

  title7 = "Style Binding : ";
  colorBind = "blue";
  bgColor = "yellow"

  title8 = "Header Angular !";

  title9 = "This is Forms";
  userData:any = {};

  title10 = "Toggle element";
  display = false;

  title11 = "Bootstrap !!!"

  title12 = "To Do List !!!"
  list:any [] = [];
  
  title13="Parent Child component !!";
  data2 = 20;
  

  
  getValue( val :string ){
    // alert("Get function data");
    console.warn(val);
    this.displayVal = val; 
  }
  getName() { alert("Function Called!"); }
  getName2(name : any){ alert(name); }
  getData(val : string){
    // console.warn("Function Called!");
    console.warn(val);
  }
  counter(val : string){ val=='add' ? this.count++ :  this.count--; }
  updateColor() { this.colorBind = "yellow", this.bgColor = "blue" }
  getData2(data:NgForm){
    console.log(data);
    this.userData = data;
  }
  toggle(){ this.display = !this.display; }
  
  addTask(item:String){
    this.list.push({ id:this.list.length, name:item});
    console.warn(this.list);
  }
  removeTask(id : number){
    console.warn(id);
    this.list = this.list.filter(item=>item.id!==id);
  }
  updateChild(){ this.data2 = Math.floor(Math.random()*100); }
  
  
  title14 = "Reusable component ";
  title15="send data child to parent componnent";
  updateData(item :string){
    console.warn(item)
  } 
  
  title16 = "Two way Binding";
  name:any;

  title17 = "Taplate refference variable";   
  getVal(item  : any){
    console.warn(item);    
  }

  title18 = "Pipes";
  today = Date();

  title19 = "Pipes Advanced";
  user = {
    name: 'nishit',
    age: 21
  }

  title20 = "Custom Pipes";
  title21 = "Template driven Forms";
  title22 = "Reactive Forms";
  userLogin(item:any) { console.log(item); }

  title23 = "Reactive Forms with validation";  
  LoginForm = new FormGroup({
    // name : new FormControl('', [Validators.required, Validators.email ),
    name : new FormControl('', [Validators.required,  Validators.pattern('[a-zA-Z]+$')] ),
    pwd : new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  loginUser(){  console.log(this.LoginForm); }
  get userName(){
    return this.LoginForm.get('name')
  }
  get pwd(){
    return this.LoginForm.get('pwd')
  }

  title24 = "Custom Directives :";  

  title25 = "Services in Angular : ";
  memberData = [
    {username:'Monica' , lastname:'Galler', gender:'Female' , email: 'mg@friends.com'},
    {username:'Ross' , lastname:'Galler', gender:'Male' , email: ' rg@friends.com'},
    {username:'Rechal' , lastname:'Green', gender:'Female' , email: ' rg@friends.com'},
    {username:'Chandler' , lastname:'Bing', gender:'Male' , email: ' cb@friends.com'},
    {username:'Pheeby' , lastname:'Buffey', gender:'Female' , email: ' pb@friends.com'},
    {username:'Joey' , lastname:'Tribiani', gender:'Male' , email: ' tb@friends.com'},
  ]


  title26 = "This is API CRUD :" 
  // uservalue : [] = [];
  uservalue : any;
  users : any;
  constructor(private userdata:UserdataService){
    // console.warn("uerdata",userdata.users())
    // this.uservalue = userdata.users();
    userdata.users().subscribe((data) => { 
      console.warn("data",data);
      this.users = data
     });
    //console.warn(this.users);
  }

  
  
  
}

export class NgbdAlertBasic {}
