const API_VERSION = 'v1';
const API_URL = `http://api.108labs.co.ua/${API_VERSION}/`;

const SETTINGS = Object.freeze({
  API: {
    LOGIN: API_URL + 'login',
    BUDGET: API_URL + 'budget',
    WALLET: API_URL + 'wallet',
    TRANSACTION: API_URL + 'transaction',
  },
  CURRENCIES: {
    UAH: 'UAH',
    USD: 'USD',
    EUR: 'EUR',
    DEFAULT: 'UAH',
  },
  ICONS: {
    PATH: 'assets/wallet-icons/',
    DEFAULT: 'u2523.png'
  }
});

export default SETTINGS;
