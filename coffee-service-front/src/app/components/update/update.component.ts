import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  username: string;
  currentUser: User;
  userList: Array<User>;
  errorMessage: string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('userToUpdate'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('username')) {
        this.username = params.get('username');
      }
    });
  }

  updateUser() {
    this.adminService.updateUser(this.username, this.currentUser).subscribe(
      data => {
        this.router.navigate(['admin']);
      }, err => {
        this.errorMessage = 'Username already exists';
      });
  }

  findAllUsers() {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  onSubmit() {
    this.updateUser();
  }

}
