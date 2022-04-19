import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              private  router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  exit() {
    this.router.navigate(['stock']);
    this.dialogRef.close(1);
  }

  exitCategories() {
    this.router.navigate(['categorias']);
    this.dialogRef.close(1);
  }

  tryAgain() {
    this.dialogRef.close(1);
  }

  save() {
    this.dialogRef.close('save');
  }

  delete() {
    this.dialogRef.close('delete');
  }

}


