import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Array<User>;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.findAllUsers();
  }

  findAllUsers() {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  detail(user: User) {
    localStorage.setItem('detailUser', JSON.stringify(user));
    this.router.navigate(['/details', user.id]);
  }

  deleteUser(user: User) {
    this.adminService.deleteUser(user.id)
      .subscribe(
        data => this.findAllUsers()
      );
      location.reload();
  }

  addUser() {
    this.router.navigate((['/add']));
  }

  updateUser(user: User) {
    localStorage.setItem('userToUpdate', JSON.stringify(user));
    this.router.navigate(['/update', user.username]);
  }
}
