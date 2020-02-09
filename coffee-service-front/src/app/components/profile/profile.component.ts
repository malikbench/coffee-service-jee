import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Role} from '../../model/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  /*
  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

   */

  editUser() {
    // localStorage.setItem('userToEdit', JSON.stringify(this.currentUser));
    this.router.navigate(['/edit']);
  }

  editPassword() {
    this.router.navigate(['/edit-password']);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

}
