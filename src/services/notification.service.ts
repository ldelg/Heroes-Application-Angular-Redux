import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public showNotification(message: string, classes: string[]): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: classes
    });
  }
}
