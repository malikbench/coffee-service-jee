import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  currentUser: User;
  newPassword = '';
  public errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
  }

  edit() {
    this.currentUser.password = this.newPassword;
    this.userService.editPassword(this.currentUser).subscribe(
      data => {
        this.router.navigate(['profile']);
      }, err => {
        this.errorMessage = 'Username already exists';
      });
  }

  onSubmit() {
    this.edit();
  }
}
