import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandler } from '../_handlers/error.handler';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ExchangeService {

	public fee = .01; // one cent
	public productTickers = [
		{symbol: 'DLX/USD', name: 'Dowlex™'},
		{symbol: 'MTH/USD', name: 'Methocel™'},
		{symbol: 'ACO/USD', name: 'ACOUSTICRYL™ Acrylic Emulsion'},
	]


	constructor(
		private http : Http,
		private errorHandler : ErrorHandler
	) { 

	}

}
