import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ErrorHandler } from '../_handlers/error.handler';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class OrderBookService {

	constructor(
		private http : Http,
		private errorHandler : ErrorHandler
	) { }

	/**
	 * Gets mock historical sell book data.
	 */
	public getHistoricalSellBookData() {
		return this.http.get('/_mocks/sell-book.json')
			.pipe(
				map(res => {
					const _resp = res.json();
					return _resp.reverse();
				}),
				catchError(this.handleError.bind(this))
			)
	}


	/**
	 * Gets mock historical buy book data.
	 */
	public getHistoricalBuyBookData() {
		return this.http.get('/_mocks/buy-book.json')
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
