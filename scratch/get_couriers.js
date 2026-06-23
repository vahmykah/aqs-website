import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

async function getCouriers() {
  const apiKey = process.env.BITESHIP_API_KEY;
  const res = await fetch('https://api.biteship.com/v1/couriers', {
    headers: { 'Authorization': apiKey }
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

getCouriers();
