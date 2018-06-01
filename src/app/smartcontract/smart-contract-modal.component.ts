import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector    : 'app-smart-contract-modal',
	templateUrl : './smart-contract-modal.component.html'
})

export class SmartContractComponent  {
	
	constructor(
		public dialogRef : MatDialogRef<SmartContractComponent>,
		@Inject(MAT_DIALOG_DATA) public data : any
	) { }
	
	onNoClick() : void {
		this.dialogRef.close();
	}
}
