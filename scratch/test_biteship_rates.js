import fetch from 'node-fetch';
import fs from 'fs';

// Read API key from .env manually to avoid dotenv dependency issue
const envContent = fs.readFileSync('.env', 'utf8');
const apiKeyMatch = envContent.match(/BITESHIP_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : '';

async function testRates(originId, originName) {
  console.log(`\nTesting Origin: ${originName} (${originId}) -> Destination: Bali (IDNP9IDNC22IDND2071)`);
  const payload = {
    origin_area_id: originId,
    destination_area_id: "IDNP9IDNC22IDND2071",
    couriers: "jne,jnt,sicepat,ninja,anteraja",
    items: [
      {
        name: "SOE Bag",
        description: "Premium Carrying System",
        value: 305000,
        length: 10,
        width: 10,
        height: 10,
        weight: 700,
        quantity: 1
      }
    ]
  };

  const res = await fetch('https://api.biteship.com/v1/rates/couriers', {
    method: 'POST',
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  const data = await res.json();
  if (data.success) {
    console.log(`SUCCESS! Found ${data.pricing.length} couriers.`);
    data.pricing.forEach(p => console.log(`- ${p.courier_name} ${p.courier_service_name}: ${p.price}`));
  } else {
    console.log(`FAILED! Code: ${data.code}, Error: ${data.error}`);
  }
}

async function run() {
  if (!apiKey) {
    console.error("API Key not found in .env");
    return;
  }
  
  // Test Old Origin (Kebayoran Baru)
  await testRates('IDNP6IDNC148IDND836IDZ12410', "Old Origin: Kebayoran Baru, 12410");
  
  // Test City Level
  await testRates('IDNP9IDNC111', "City Level: Depok");
}

run();
