import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandler } from '../_handlers/error.handler';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DexSmarContractService {

	isRegulated = false;
	canBuy = 'public';
	deal = false; // 20% discount etc...
	canRead = 'nobody'; // US Gov't , Company2 etc..

	constructor(
		private http : Http,
		private errorHandler : ErrorHandler
	) { 
		
	}

}
