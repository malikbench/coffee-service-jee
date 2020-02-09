import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newUser: User = new User();
  public errorMessage: string;

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.newUser.role = Role.USER;
    this.adminService.addUser(this.newUser).subscribe(
      data => {
        this.router.navigate(['admin']);
      }, err => {
        this.errorMessage = 'Username already exists';
      });
  }

  onSubmit() {
    this.addUser();
  }

}
