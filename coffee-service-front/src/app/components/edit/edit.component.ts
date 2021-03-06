import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: User;
  public errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    /*if (!this.currentUser) {
      this.router.navigate(['/login']);
    }*/
  }

  edit() {
    this.userService.edit(this.currentUser).subscribe(
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
