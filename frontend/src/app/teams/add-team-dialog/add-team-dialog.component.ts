import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.css']
})
export class AddTeamDialogComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddTeamDialogComponent>) {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      logo: ['', Validators.required],
      location: ['', Validators.required],
      playersFile: [null, Validators.required] // This will be updated with a File object
    });
  }

  onFileSelected(event: Event): void {
    const eventTarget = event.target as HTMLInputElement;
    const file = eventTarget.files ? eventTarget.files[0] : null;
    if (file) {
      // Check if the file is a CSV
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        this.teamForm.patchValue({ playersFile: file });
        // Clear any existing errors if the file is valid
        this.teamForm.controls['playersFile'].setErrors(null);
      } else {
        // Set an error on the form control if the file is not valid
        this.teamForm.controls['playersFile'].setErrors({ notCsv: true });
      }
    }
  }

  submitForm(): void {
    if (this.teamForm.valid) {
      // Emit the form value to the parent component, which is TeamsComponent
      this.dialogRef.close(this.teamForm.value);
    }
  }
}
