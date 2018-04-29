import { Injectable } from "@angular/core";
import { IUser } from "../../Model/IUser";
import { HttpClient } from "@angular/common/http";
import { DataObject } from "../../Model/DataObject";

@Injectable()
export class DataService
 {
    dataInfo:DataObject = { data:[] };
    public Url:string="https://reqres.in/api/users";

    constructor(private http:HttpClient) {
console.log("test2");


     this.http.get(this.Url).subscribe((x:DataObject)=>{ 
         //console.log(x);
        this.dataInfo.data=x.data;console.log(this.dataInfo.data)
    

    });
}
        
}  
    

