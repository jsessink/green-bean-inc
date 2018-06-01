import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes : Routes = [
	{
		path      : '',
		component : DashboardComponent
	} // ,
	// {
	// 	path      : '**',
	// 	component : PageNotFoundComponent
	// }   
];

@NgModule({
	imports      : [RouterModule.forRoot(appRoutes)],
	exports      : [RouterModule],
	declarations : []
})

export class AppRoutingModule { }
