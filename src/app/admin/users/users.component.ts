import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataUsers = [
    {
      firstname: 'hilmi',
      lastname: 'arizal'
    },
    {
      firstname: 'lisna',
      lastname: 'astriani'
    },
  ]

  edit = false;
  firstname: string='';
  lastname: string='';

  constructor(
    public dialog:MatDialog
  )
  {}

  onEditUser(data:any, idx:any): void {
      let dialog = this.dialog.open(EditComponent, {
        width: '400px',
        data: data
      });
      dialog.afterClosed().subscribe((res: any) => {
        if(res){
          if(idx == -1) this.dataUsers.push(res);
          else this.dataUsers[idx]=res;
        }
      })
  }

  ngOnInit(): void {
  }

  onAddUser(){
    let firstname = this.firstname;
    let lastname = this.lastname;
    let newDataUsers = {firstname, lastname};
    if(firstname && lastname){
      this.dataUsers.push(newDataUsers);
      this.firstname = '';
      this.lastname = '';
    }else{
      alert("Data empty!")
    }
  }

  onDeleteUser(i: any){
    this.dataUsers.splice(i, 1);
  }

}