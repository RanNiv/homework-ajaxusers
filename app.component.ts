import { Component } from '@angular/core';
import { DataService } from './Shared/Services/Services.Data';
import { IUser } from './Model/IUser';
import { DataObject } from './Model/DataObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usersData :DataObject={data: []};
  constructor(private data:DataService) {

 this.usersData=this.data.dataInfo; 
 console.log(this.usersData.data);


  }
}
