import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Confirm Action</h2>
    <mat-dialog-content>Are you sure you want to delete this hero?</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button class="btn btn-primary" style="margin-right: 10px;" (click)="onConfirm()">Yes</button>
      <button mat-button class="btn btn-danger " (click)="onDismiss()">No</button>
    </mat-dialog-actions>
  `,
})

export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  public onConfirm(): void {
    this.dialogRef.close(true);
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }
}
