import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://binance43.p.rapidapi.com/ticker/24hr',
  headers: {
    'x-rapidapi-key': 'bbe53b8be3msh36fe641fd2bce6ep18f39bjsne3eca22963e1',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
