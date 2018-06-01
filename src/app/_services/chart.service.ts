import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ErrorHandler } from '../_handlers/error.handler';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ChartService {

	constructor(
		private http : Http,
		private errorHandler : ErrorHandler
	) { }

	/**
	 * Gets mock historicals for candle and volume charts.
	 */
	public getHistoricalProductData() {
		return this.http.get('/_mocks/historical-product-ohlcv.json')
			.pipe(
				map(res => res.json()),
				catchError(this.handleError.bind(this))
			)
	}


	/**
	 * Handles service errors
	 * @param {Response | any} error The service's response error
	 */
	private handleError(error : Response | any, rejectPromise? : boolean) {
		const errNotification = this.errorHandler.getFriendlyError(error);

		console.error(errNotification);
		if (!rejectPromise)
			return Promise.reject(errNotification.message);
		else
			return Promise.resolve(errNotification);
	}
}
