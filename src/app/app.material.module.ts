import { NgModule } from '@angular/core';

// Import Material Modules used across the application.
import {
	MatButtonModule,
	MatListModule,
	MatDialogModule
} from '@angular/material';

const materialModules = [
	MatButtonModule,
	MatListModule,
	MatDialogModule
];

@NgModule({
	imports: [
		...materialModules
	],
	exports: [
		...materialModules
	]
})

export class AppMaterialModule {
	constructor() { }
}
