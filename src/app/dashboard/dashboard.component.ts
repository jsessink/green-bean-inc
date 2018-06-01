import { Component, OnInit, HostListener } from '@angular/core';
import { Highcharts, StockChart } from 'angular-highcharts';

import { ChartService } from '../_services/chart.service';
import { OrderBookService } from '../_services/order-book.service';
import { FillService } from '../_services/fill.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SmartContractComponent } from '../smartcontract/smart-contract-modal.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details-modal.component';

@Component({
	selector    : 'app-dashboard',
	templateUrl : './dashboard.component.html',
	styleUrls   : ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
	public  smartContractComponentRef   : MatDialogRef<SmartContractComponent>;
	public  personalDetailsComponentRef : MatDialogRef<PersonalDetailsComponent>;
	public  chart              : StockChart;
	public  sellBookData       : any;
	public  buyBookData        : any;
	public  filledOrderData    : any;
	public  personalDetailInfo : any;
	private chartData          : any;
	private addedMockVolume    : boolean;

	private currMockIndex = 0;
	private mockBuy = [
		{
			volume: 10000,
			price: 243.00
		},
		{
			volume: 5000,
			price: 243.50
		},
		{
			volume: 15000,
			price: 245.99
		}
	];

	// Set random order book placement
	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event : KeyboardEvent) {
		if (event.key === 'p')
			this.addBuyOrder();

		if (event.key === 'q' && !this.addedMockVolume) {
			this.addSellOrder();
			this.addedMockVolume = true;
		}

		if (event.key === 's')
			this.showSmartContact();
	}

	constructor(
		private chartService     : ChartService,
		private orderBookService : OrderBookService,
		private fillService      : FillService,
		public  dialog           : MatDialog
	) { }

	public async ngOnInit() {
		// Set our chart theme
		Highcharts.setOptions(this.setTheme());

		// Set our initial data
		this.sellBookData       = await this.getSellBookData();
		this.buyBookData        = await this.getBuyBookData();
		this.chartData          = await this.getHistoricalData();
		this.filledOrderData    = await this.getHistoricalOrderData();
		this.personalDetailInfo = [];

		// Setup our charts
		this.setChart();
	}

	private setChart() {
		const ohlcVolume = this.setOhlcVolume();

		this.chart = new StockChart({
			rangeSelector: {
				selected: 1
			},
			title: {
				text: 'Kona Bean | Bean Factory'
			},
			tooltip : {
				split: true
			},
			series: [
				{
					type : 'candlestick',
					name : 'SD Paint Price',
					data : ohlcVolume.ohlc
				}, {
					type  : 'column',
					name  : 'Volume',
					data  : ohlcVolume.volume,
					yAxis : 1
				}
			],
			yAxis: [{
				labels : {
					align : 'right',
					x     : -3
				},
				title : {
					text : 'OHLC'
				},
				height    : '60%',
				lineWidth : 2,
				resize : {
					enabled: true
				}
			}, {
				labels : {
					align : 'right',
					x     : -3
				},
				title : {
					text : 'Volume'
				},
				top       : '65%',
				height    : '35%',
				offset    : 0,
				lineWidth : 2
			}],
		});
	}

	private setOhlcVolume() {
		// split the data set into ohlc and volume
		const ohlc = [],
			volume = [],
			dataLength = this.chartData.length

		let i = 0;

		for (i; i < dataLength; i += 1) {
			ohlc.push([
				this.chartData[i][0], // the date
				this.chartData[i][1], // open
				this.chartData[i][2], // high
				this.chartData[i][3], // low
				this.chartData[i][4] // close
			]);

			volume.push([
				this.chartData[i][0], // the date
				this.chartData[i][5] // the volume
			]);
		}

		return { ohlc : ohlc, volume : volume };
	}

	private setTheme() {
		return {
			colors: ['#2b908f', '#37444c', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
				'#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
			chart: {
				backgroundColor: '#1d2b35',
				style: {
					fontFamily: '\'Unica One\', sans-serif'
				},
				plotBorderColor: '#606063'
			},
			title: {
				style: {
					color: '#E0E0E3',
					textTransform: 'uppercase',
					fontSize: '20px'
				}
			},
			subtitle: {
				style: {
					color: '#E0E0E3',
					textTransform: 'uppercase'
				}
			},
			xAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: '#E0E0E3'
					}
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				title: {
					style: {
						color: '#A0A0A3'

					}
				}
			},
			yAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: '#E0E0E3'
					}
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				tickWidth: 1,
				title: {
					style: {
						color: '#A0A0A3'
					}
				}
			},
			tooltip: {
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				style: {
					color: '#F0F0F0'
				}
			},
			plotOptions: {
				series: {
					dataLabels: {
						color: '#B0B0B3'
					},
					marker: {
						lineColor: '#333'
					}
				},
				boxplot: {
					fillColor: '#505053'
				},
				candlestick: {
					lineColor: 'white'
				},
				errorbar: {
					color: 'white'
				}
			},
			legend: {
				itemStyle: {
					color: '#E0E0E3'
				},
				itemHoverStyle: {
					color: '#FFF'
				},
				itemHiddenStyle: {
					color: '#606063'
				}
			},
			credits: {
				style: {
					color: '#666'
				}
			},
			labels: {
				style: {
					color: '#707073'
				}
			},

			drilldown: {
				activeAxisLabelStyle: {
					color: '#F0F0F3'
				},
				activeDataLabelStyle: {
					color: '#F0F0F3'
				}
			},

			navigation: {
				buttonOptions: {
					symbolStroke: '#DDDDDD',
					theme: {
						fill: '#505053'
					}
				}
			},

			// scroll charts
			rangeSelector: {
				buttonTheme: {
					fill: '#505053',
					stroke: '#000000',
					style: {
						color: '#CCC'
					},
					states: {
						hover: {
							fill: '#707073',
							stroke: '#000000',
							style: {
								color: 'white'
							}
						},
						select: {
							fill: '#000003',
							stroke: '#000000',
							style: {
								color: 'white'
							}
						}
					}
				},
				inputBoxBorderColor: '#505053',
				inputStyle: {
					backgroundColor: '#333',
					color: 'silver'
				},
				labelStyle: {
					color: 'silver'
				}
			},

			navigator: {
				handles: {
					backgroundColor: '#666',
					borderColor: '#AAA'
				},
				outlineColor: '#CCC',
				maskFill: 'rgba(255,255,255,0.1)',
				series: {
					color: '#7798BF',
					lineColor: '#A6C7ED'
				},
				xAxis: {
					gridLineColor: '#505053'
				}
			},

			scrollbar: {
				barBackgroundColor: '#808083',
				barBorderColor: '#808083',
				buttonArrowColor: '#CCC',
				buttonBackgroundColor: '#606063',
				buttonBorderColor: '#606063',
				rifleColor: '#FFF',
				trackBackgroundColor: '#404043',
				trackBorderColor: '#404043'
			},

			legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
			background2: '#505053',
			dataLabelsColor: '#B0B0B3',
			textColor: '#C0C0C0',
			contrastTextColor: '#F0F0F3',
			maskColor: 'rgba(255,255,255,0.3)'
		};
	}

	private getHistoricalData() {
		return new Promise(resolve => {
			this.chartService.getHistoricalProductData()
				.subscribe(data => resolve(data));
		});
	}

	private getSellBookData() {
		return new Promise(resolve => {
			this.orderBookService.getHistoricalSellBookData()
				.subscribe(data => resolve(data));
		});
	}

	private getBuyBookData() {
		return new Promise(resolve => {
			this.orderBookService.getHistoricalBuyBookData()
				.subscribe(data => resolve(data));
		});
	}

	private getHistoricalOrderData() {
		return new Promise(resolve => {
			this.fillService.getHistoricalOrderData()
				.subscribe(data => resolve(data));
		});
	}

	private addNewRandomData() {
		this.chartData.push(
			[Date.now(), 666.85, 669.90, 656.00, 669.79, 25436356]
		);

		const ohlcVolume = this.setOhlcVolume();

		this.chart.ref.update({
			series : [
				{
					type : 'candlestick',
					name : 'SD Paint Price',
					data : ohlcVolume.ohlc
				}, {
					type  : 'column',
					name  : 'Volume',
					data  : ohlcVolume.volume,
					yAxis : 1
				}
			]
		});
	}

	private addBuyOrder() {
		if (this.currMockIndex >= this.mockBuy.length)
			return;

		this.buyBookData.unshift({
			volume : this.mockBuy[this.currMockIndex].volume,
			price  : this.mockBuy[this.currMockIndex].price
		});

		if (this.mockBuy[this.currMockIndex].price >= this.sellBookData[this.sellBookData.length - 1].price)
			this.fillOrder();

		this.currMockIndex += 1;
	}

	private addSellOrder() {
		this.sellBookData.push({
			volume : 2900000,
			price  : 198.55
		});
	}

	private addPersonalData(price, volume) {
		this.personalDetailInfo.push({
			date   : new Date(),
			price  : price,
			volume : volume
		});
	}

	private fillOrder() {
		this.filledOrderData.unshift({
			price       : this.mockBuy[this.currMockIndex].price,
			totalVolume : this.filledOrderData[0].totalVolume - this.filledOrderData[0].volume,
			volume      : this.mockBuy[this.currMockIndex].volume
		});

		this.buyBookData.shift();

		this.sellBookData.push({
			volume : this.filledOrderData[0].totalVolume - this.mockBuy[this.currMockIndex].volume,
			price  : 246.25
		});

		this.addPersonalData(this.mockBuy[this.currMockIndex].price, this.mockBuy[this.currMockIndex].volume);
	}

	private showSmartContact() {
		this.smartContractComponentRef = this.dialog.open(SmartContractComponent, {
			width: '800px'
		});
	}

	private openPersonalDetails() {
		this.personalDetailsComponentRef = this.dialog.open(PersonalDetailsComponent, {
			width: '1400px'
		});
	}
}
