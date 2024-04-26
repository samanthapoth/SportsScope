import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.css']
})
export class AddTeamDialogComponent implements OnInit {
  teamForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    logo: ['', Validators.required],
    players: this.formBuilder.array([]), // Specify the type of controls this array should contain
    location: ['', Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<AddTeamDialogComponent>, // Define the type of MatDialogRef
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Initialization moved to the declaration
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    // Your onSubmit logic goes here
  }
}

