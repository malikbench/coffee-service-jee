import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

const API_URL = 'http://localhost:8081/coffee-service/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      'Content-Type' : 'application/json; charset=UTF-8'
    });
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'all', {headers: this.headers});
  }


  getUser(id: number) {
    return this.http.get(API_URL + 'user/' + id, {headers: this.headers});
  }

  // change to Id
  deleteUser(id: number): Observable<any> {
    return this.http.delete(API_URL + 'delete/' + id, {headers: this.headers});
  }

  updateUser(username: string, user: any): Observable<any> {
    return this.http.put(API_URL + 'update/' + username, JSON.stringify(user), {headers: this.headers});
  }

  addUser(user: any): Observable<any> {
    return this.http.post(API_URL + 'add', JSON.stringify(user), {headers: this.headers} );
  }

}
