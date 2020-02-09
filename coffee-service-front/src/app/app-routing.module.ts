import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DetailsComponent} from './components/details/details.component';
import {AdminComponent} from './components/admin/admin.component';
import {NotFoundExceptionComponent} from './components/not-found-exception/not-found-exception.component';
import {UnauthorizedComponent} from './components/unauthorized/unauthorized.component';
import {AuthGuard} from './guards/auth.guard';
import {Role} from './model/role';
import {AddComponent} from './components/add/add.component';
import {UpdateComponent} from './components/update/update.component';
import {EditComponent} from './components/edit/edit.component';
import {EditPasswordComponent} from './components/edit-password/edit-password.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER]}
  },

  {path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN]}
  },

  {path: 'edit-password',
    component: EditPasswordComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER]}
  },

  {path: 'details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  {path: 'update/:username',
    component: UpdateComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  {path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  {path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  // Error routes
  {path: '404', component: NotFoundExceptionComponent},
  {path: '401', component: UnauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // For unknown pages
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
