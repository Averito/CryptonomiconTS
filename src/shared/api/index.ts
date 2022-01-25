import axios from 'axios';

export const API = {
	async getCrypto(url: string) {
		const crypto = await axios.get(`${url}/blockchain/list`, {
			headers: {
				authorization:
					'Apikey b180c293c4268e85395f7cde4c396178b7cc4755fd3227614755fa676106a8d2'
			}
		});
		return crypto.data.Data;
	}
};

export const URL = 'https://min-api.cryptocompare.com/data';
