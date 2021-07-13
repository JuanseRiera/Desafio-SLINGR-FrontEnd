import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private snackBar: MatSnackBar) { }

  showError(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      panelClass: ['errorSnackbar']
    });
  }


}
