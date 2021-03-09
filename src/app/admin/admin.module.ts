import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router'; 
import { MaterialDesign } from '../material-ui/material';
import { UsersComponent } from './users/users.component';
import { ManageComponent } from './manage/manage.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './users/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'manage',
        component: ManageComponent
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, DashboardComponent, UsersComponent, ManageComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
