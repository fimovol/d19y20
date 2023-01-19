import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from '../models/reto19';
import { User, Users,Userounde } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  apiUser = environment.apiURL + "users/"
  apireto19 = environment.apireto19
  getUsersAll():Observable<Users>{
    return this.http.get<Users>(this.apiUser)
  }
  getreto19(){
    return this.http.get<Root>(this.apireto19)
  }
  getUserId(userid:string):Observable<User>{
    const url = this.apiUser + userid
    return this.http.get<User>(url)
  }
  //post
  postUser(usuario: Userounde):Observable<User>{
    return this.http.post<User>(this.apiUser,usuario)
  }
  //getpara interceptor
  getUserAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser,{observe:"response"})
  }
}
