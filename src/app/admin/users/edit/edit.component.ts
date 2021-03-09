import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  
  )
  {}

  onSubmit(): void {
      this.data.firstname = this.firstname;
      this.data.lastname = this.lastname;
      this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
