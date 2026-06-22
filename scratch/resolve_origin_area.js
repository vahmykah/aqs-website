import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '..', '.env');

if (!fs.existsSync(envPath)) {
  console.error('Error: .env file not found. Checked path: ' + envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');

// Parse environment variables
const getEnvVar = (name) => {
  const match = envContent.match(new RegExp(`^${name}=(.*)$`, 'm'));
  return match ? match[1].trim() : null;
};

const apiKey = getEnvVar('BITESHIP_API_KEY');
const apiUrl = getEnvVar('BITESHIP_API_URL') || 'https://api.biteship.com';

if (!apiKey || apiKey.includes('your_biteship_api_key_here')) {
  console.log('\n========================================================================');
  console.log('NOTICE: Biteship API Key is currently set to placeholder in .env.');
  console.log('Please replace the BITESHIP_API_KEY value in your .env file with your');
  console.log('actual approved Biteship API key, then run this script again.');
  console.log('========================================================================\n');
  process.exit(0);
}

const query = 'Kukusan, Beji, Depok';
console.log(`Resolving Biteship Area ID for origin: "${query}"...`);

const performSearch = async () => {
  const searchUrl = `${apiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(query)}&type=single`;
  try {
    const res = await fetch(searchUrl, {
      headers: { 'Authorization': apiKey }
    });

    if (!res.ok) {
      console.error(`Biteship API error: HTTP ${res.status}`);
      const text = await res.text();
      console.error('Response:', text);
      process.exit(1);
    }

    const data = await res.json();
    if (!data.success || !data.areas || data.areas.length === 0) {
      console.error('Biteship search completed but returned no matching areas for ' + query);
      console.log('Response data:', JSON.stringify(data, null, 2));
      process.exit(1);
    }

    let bestMatch = null;
    for (const area of data.areas) {
      const prov = area.administrative_division_level_1_name.toLowerCase();
      const city = area.administrative_division_level_2_name.toLowerCase();
      const dist = area.administrative_division_level_3_name.toLowerCase();

      if (prov.includes('jawa barat') || prov.includes('west java')) {
        if (city.includes('depok')) {
          if (dist.includes('beji') || area.name.toLowerCase().includes('kukusan')) {
            bestMatch = area;
            break;
          }
        }
      }
    }

    if (!bestMatch) {
      bestMatch = data.areas[0];
    }

    console.log('\nMatch Found!');
    console.log(`- Resolved ID:   ${bestMatch.id}`);
    console.log(`- Resolved Name: ${bestMatch.name}`);
    console.log(`- Postal Code:   ${bestMatch.postal_code}`);

    // Update .env file
    const updatedContent = envContent.replace(
      /^BITESHIP_ORIGIN_AREA_ID=.*$/m,
      `BITESHIP_ORIGIN_AREA_ID=${bestMatch.id}`
    );

    fs.writeFileSync(envPath, updatedContent, 'utf8');
    console.log('\nSuccess: Updated BITESHIP_ORIGIN_AREA_ID in .env file!');

  } catch (error) {
    console.error('Error calling Biteship API:', error.message);
    process.exit(1);
  }
};

performSearch();
