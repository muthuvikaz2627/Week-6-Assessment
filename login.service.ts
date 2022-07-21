import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private baseUrl = 'http://localhost:8080/api/';
  private baseUrl = 'http://localhost:8888/';  
  constructor(private http:HttpClient) { }
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getuser');  //will change ...As Per ordermanagement

  }
  //below this all the API will be there. We can have the multiple conect

  createUser(user: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'adduser', user);

  }



  deleteUser(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteuser/${id}`, { responseType: 'text' });

  }



  getUser(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/user/${id}`);

  }



  updateUser(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-user/${id}`, value);

  }

}