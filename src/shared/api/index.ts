import axios from 'axios';

export const API = {
	async getCrypto(url: string) {
		const crypto = await axios.get(`${url}/blockchain/list`, {
			headers: {
				authorization: 'Apikey b180c293c4268e85395f7cde4c396178b7cc4755fd3227614755fa676106a8d2'
			}
		});
		return crypto.data.Data;
	},
	async getCostBySymbol(url: string, symbol: string) {
		const costCoin = await axios.get(`${url}/price?fsym=${symbol}&tsyms=USD`, {
			headers: {
				authorization: 'Apikey b180c293c4268e85395f7cde4c396178b7cc4755fd3227614755fa676106a8d2'
			}
		});
		return costCoin.data;
	}
};

export const URL = 'https://min-api.cryptocompare.com/data';
