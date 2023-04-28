import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  uservalue : any;
  constructor(private userdata:UserdataService){
    console.warn("uerdata",userdata.users())
    this.uservalue = userdata.users();
  }
}
