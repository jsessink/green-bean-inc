import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartContractComponent  }  from './smartcontract/smart-contract-modal.component';
import { PersonalDetailsComponent } from './personal-details/personal-details-modal.component';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material imports
import { AppMaterialModule }       from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Local imports
import { ChartService }     from './_services/chart.service';
import { OrderBookService } from './_services/order-book.service';
import { FillService }      from './_services/fill.service';
import { ErrorHandler }     from './_handlers/error.handler';

// Charting imports
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import highstock from 'highcharts/modules/stock.src';
import exporting from 'highcharts/modules/exporting.src';


export function highChartsModules() {
	return [highstock, exporting];
}

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		SmartContractComponent,
		PersonalDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ChartModule,
		AppMaterialModule,
		FlexLayoutModule,
		HttpModule,
		BrowserAnimationsModule
	],
	providers : [
		ChartService,
		OrderBookService,
		FillService,
		ErrorHandler,
		{ provide : HIGHCHARTS_MODULES, useFactory : highChartsModules }
	],
	entryComponents: [
		SmartContractComponent,
		PersonalDetailsComponent
	],
	bootstrap : [AppComponent]
})
export class AppModule { }
