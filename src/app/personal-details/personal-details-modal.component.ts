import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SmartContractComponent } from '../smartcontract/smart-contract-modal.component';

@Component({
	selector    : 'app-smart-contract-modal',
	templateUrl : './personal-details-modal.component.html'
})

export class PersonalDetailsComponent  {
	public smartContractComponentRef : MatDialogRef<SmartContractComponent>;

	constructor(
		public dialogRef : MatDialogRef<PersonalDetailsComponent>,
		public dialog    : MatDialog,
		@Inject(MAT_DIALOG_DATA) public data : any
	) { }
	
	onNoClick() : void {
		this.dialogRef.close();
	}

	public openSmartContract() {
		this.smartContractComponentRef = this.dialog.open(SmartContractComponent, {
			width: '800px'
		});
	}
}
