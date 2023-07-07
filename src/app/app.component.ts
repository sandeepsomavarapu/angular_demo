import { Component } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = "Dell India";
  childData: string;
  userdata:User;
  constructor(private service:UsersService){

  }
  ngOnInit()
  {
   this.userdata= this.service.getUser();
    alert(this.userdata.username)
  }
  parentMethod(cdata) {
    this.childData = cdata
  }
}
