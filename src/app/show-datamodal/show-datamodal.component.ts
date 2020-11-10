import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-show-datamodal',
  templateUrl: './show-datamodal.component.html',
  styleUrls: ['./show-datamodal.component.scss']
})
export class ShowDatamodalComponent implements OnInit {
  dialogData
  constructor(
    public dialogRef: MatDialogRef<ShowDatamodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogData = data.modaldata
  }
  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }


}
