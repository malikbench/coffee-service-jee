import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'http://localhost:8081/coffee-service/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    // Authentication encrypted header : encrypts username & password
    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    return this.http.get<any> (API_URL + 'login', {headers}).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + 'logout', {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + 'registration', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  edit(user: any): Observable<any> {
    return this.http.put(API_URL + 'edit', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}}).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          if (response instanceof User) {
            this.currentUserSubject.next(response);
          }
        }
        return response;
      })
    );
  }

  editPassword(user: any): Observable<any> {
    return this.http.put(API_URL + 'edit-password', JSON.stringify(user),
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}}).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          if (response instanceof User) {
            this.currentUserSubject.next(response);
          }
        }
        return response;
      })
    );
  }



}
