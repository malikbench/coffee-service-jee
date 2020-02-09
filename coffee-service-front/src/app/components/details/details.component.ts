import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userId: string;
  currentUser: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('detailUser'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.userId = params.get('id');
      }
    });
  }

}
