import fs from 'fs';

const envContent = fs.readFileSync('.env', 'utf8');
const apiKeyMatch = envContent.match(/BITESHIP_API_KEY=(.*)/);
if (apiKeyMatch) {
  const key = apiKeyMatch[1].trim();
  console.log('API Key starts with:', key.substring(0, 15));
} else {
  console.log('No API key found in .env');
}
