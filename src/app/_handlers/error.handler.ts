import { Response, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandler {
	/**
	 * This will parse json repsponses from the api and attempt to return a user friendly error.
	 */
	constructor() { }

	public getFriendlyError(error : Response | any) {
		let currentError : ErrorNotification;

		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			currentError = new ErrorNotification(error.status, error.statusText);
		} else if (error && error.data) {
			const response = (error.data[0] && error.data[0].response) || (error.data.response);
			currentError = new ErrorNotification(response.statusCode, response.statusText);
		} else {
			currentError = new ErrorNotification(500, 'Oh no, something went wrong! Please refresh or try again.');
		}
		return currentError;
	}
}

export class ErrorNotification {
	public message = 'Oh no, something went wrong! Please refresh or try again.';

	constructor(public statusCode : number, public statusText : string, public critical : boolean = false) {
		switch (statusCode) {
			case 400:
				this.message = 'Oh no! We had trouble saving your data. Please try again.';
				break;
			case 401:
				this.message = 'You don\'t have access to this. Please login or register.';
				break;
			case 500:
				this.message = 'Oh no, something went wrong! Please refresh or try again.';
				break;
			case 403:
			case 503:
			case 0:
				this.message = 'Oh no! Our service is temporarily unavailable. Please try again later.';
				this.critical = true;
				break;
			default:
				break;
		}
	}
}
