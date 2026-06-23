import type { APIRoute } from 'astro';
import { MOCK_DESTINATIONS } from '../../../lib/shipping';

export const prerender = false;

// Robust area matching function
async function resolveDestinationAreaId(
  province: string,
  city: string,
  district: string,
  postalCode: string,
  apiKey: string,
  biteshipApiUrl: string
): Promise<string | null> {
  const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const cleanProvince = normalize(province);
  const cleanCity = normalize(city.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ''));
  const cleanDistrict = normalize(district || '');

  // 1. Try searching with district + city
  if (district) {
    try {
      const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(district + ' ' + city)}`;
      const res = await fetch(searchUrl, {
        headers: { 'Authorization': apiKey }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.areas && data.areas.length > 0) {
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ''));
            const areaDist = normalize(area.administrative_division_level_3_name);

            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) &&
                (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              if (areaDist.includes(cleanDistrict) || cleanDistrict.includes(areaDist)) {
                return area.id;
              }
            }
          }
          // Fallback to first one in matching city/province
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ''));
            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) &&
                (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              return area.id;
            }
          }
          return data.areas[0].id;
        }
      }
    } catch (e) {
      console.warn('[Biteship Area Search by District/City Failed]:', e);
    }
  }

  // 2. Try searching by postal code
  if (postalCode && /^\d{5}$/.test(postalCode)) {
    try {
      const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(postalCode)}`;
      const res = await fetch(searchUrl, {
        headers: { 'Authorization': apiKey }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.areas && data.areas.length > 0) {
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ''));
            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) &&
                (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              return area.id;
            }
          }
          return data.areas[0].id;
        }
      }
    } catch (e) {
      console.warn('[Biteship Area Search by Postal Code Failed]:', e);
    }
  }

  // 3. Try searching by city name
  try {
    const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(city)}`;
    const res = await fetch(searchUrl, {
      headers: { 'Authorization': apiKey }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.areas && data.areas.length > 0) {
        for (const area of data.areas) {
          const areaProv = normalize(area.administrative_division_level_1_name);
          if (areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) {
            return area.id;
          }
        }
        return data.areas[0].id;
      }
    }
  } catch (e) {
    console.warn('[Biteship Area Search by City Failed]:', e);
  }

  return null;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { province, city, district, postalCode, items = [] } = payload;

    if (!province || !city) {
      return new Response(
        JSON.stringify({ error: 'Missing required location fields: province, city' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Load environment variables dynamically
    const apiKey = process.env.BITESHIP_API_KEY || import.meta.env.BITESHIP_API_KEY;
    const useBiteship = (process.env.USE_BITESHIP || import.meta.env.USE_BITESHIP) === 'true';
    const originAreaId = process.env.BITESHIP_ORIGIN_AREA_ID || import.meta.env.BITESHIP_ORIGIN_AREA_ID || 'IDNP6IDNC148IDND836IDZ12410';
    const defaultWeightVal = process.env.BITESHIP_DEFAULT_WEIGHT || import.meta.env.BITESHIP_DEFAULT_WEIGHT || '700';
    const defaultWeight = parseInt(defaultWeightVal, 10) || 700;
    const biteshipApiUrl = process.env.BITESHIP_API_URL || import.meta.env.BITESHIP_API_URL || 'https://api.biteship.com';

    // Calculate total items weight and build biteshipItems array
    let totalItemsWeight = 0;
    const biteshipItems = items.map((item: any) => {
      const quantity = parseInt(item.quantity, 10) || 1;
      const weight = defaultWeight;
      totalItemsWeight += weight * quantity;

      return {
        name: item.name || 'SOE Bag',
        description: 'Premium Carrying System',
        value: parseInt(item.price, 10) || 305000,
        length: 10,
        width: 10,
        height: 10,
        weight: weight,
        quantity: quantity
      };
    });

    if (biteshipItems.length === 0) {
      biteshipItems.push({
        name: 'SOE Bag 1',
        description: 'Premium Carrying System',
        value: 305000,
        length: 10,
        width: 10,
        height: 10,
        weight: defaultWeight,
        quantity: 1
      });
      totalItemsWeight = defaultWeight;
    }

    const totalWeightKg = Math.ceil(totalItemsWeight / 1000) || 1;

    // Baseline mock values for fallback
    let baseCost = 15000;
    let javaEtd = "2–4 Business Days";
    let outerEtd = "3–7 Business Days";

    if (province === "DKI Jakarta") {
      baseCost = 10000;
      javaEtd = "1–2 Business Days";
    } else if (province === "Jawa Barat" || province === "Jawa Tengah" || province === "Jawa Timur" || province === "Banten" || province === "DI Yogyakarta") {
      baseCost = 18000;
      javaEtd = "2–4 Business Days";
    } else if (province === "Bali" || province === "Nusa Tenggara Barat" || province === "Nusa Tenggara Timur") {
      baseCost = 28000;
      outerEtd = "3–5 Business Days";
    } else {
      baseCost = 38000;
      outerEtd = "4–7 Business Days";
    }

    const baselineEtd = (province.includes("Jakarta") || province.includes("Jawa") || province.includes("Banten") || province.includes("Yogyakarta")) ? (province === "DKI Jakarta" ? "1–2 Business Days" : javaEtd) : outerEtd;

    const baselineRates = {
      rates: [
        { name: 'JNE Regular', cost: baseCost * totalWeightKg, etd: baselineEtd },
        { name: 'Ninja Standard', cost: (baseCost + 2000) * totalWeightKg, etd: baselineEtd }
      ],
      metadata: {
        destinationAreaId: null as string | null
      }
    };

    // If Biteship is not enabled or no API key, instantly return the mock baseline
    if (!useBiteship || !apiKey || apiKey === 'your_biteship_api_key_here') {
      console.log('[Rates Endpoint] [FALLBACK TRIGGERED] Biteship disabled or API key missing.');
      console.log('[Rates Endpoint] useBiteship:', useBiteship, '| apiKey exists:', !!apiKey);
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. Resolve destination area ID
    const destinationAreaId = await resolveDestinationAreaId(province, city, district, postalCode, apiKey, biteshipApiUrl);
    if (!destinationAreaId) {
      console.warn('[Rates Endpoint] [FALLBACK TRIGGERED] Failed to resolve Biteship destination Area ID for:', province, city);
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Query Biteship Rates API
    const ratesPayload = {
      origin_area_id: originAreaId,
      destination_area_id: destinationAreaId,
      couriers: 'jne,ninja,anteraja',
      items: biteshipItems
    };

    console.log('[Rates Endpoint] [LIVE REQUEST] Sending payload to Biteship:', JSON.stringify(ratesPayload, null, 2));

    const ratesRes = await fetch(`${biteshipApiUrl}/v1/rates/couriers`, {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ratesPayload)
    });

    if (!ratesRes.ok) {
      const errText = await ratesRes.text();
      console.warn('\n--- [BITESHIP DEBUG LOG] ---');
      console.warn('1. Raw Biteship Response: HTTP', ratesRes.status, errText);
      console.warn('2. BaselineRates Fallback Used? YES');
      
      const fallbackRates = { ...baselineRates, metadata: { destinationAreaId } };
      console.warn('3. Final Rates Array Returned:', JSON.stringify(fallbackRates.rates, null, 2));
      console.warn('----------------------------\n');

      return new Response(JSON.stringify(fallbackRates), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ratesData = await ratesRes.json();
    if (!ratesData.success || !ratesData.pricing) {
      console.warn('\n--- [BITESHIP DEBUG LOG] ---');
      console.warn('1. Raw Biteship Response:', JSON.stringify(ratesData));
      console.warn('2. BaselineRates Fallback Used? YES');
      
      const fallbackRates = { ...baselineRates, metadata: { destinationAreaId } };
      console.warn('3. Final Rates Array Returned:', JSON.stringify(fallbackRates.rates, null, 2));
      console.warn('----------------------------\n');

      return new Response(JSON.stringify(fallbackRates), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Map Biteship pricing to dynamic sorted array
    const dynamicRates = [];

    for (const price of ratesData.pricing) {
      const name = `${price.courier_name} ${price.courier_service_name}`;
      const cost = price.price;
      const etd = price.duration + ' ' + (price.shipment_duration_unit || 'Days');
      dynamicRates.push({ id: price.id || name, name, cost, etd });
    }

    dynamicRates.sort((a, b) => a.cost - b.cost);
    
    console.log(`[Rates Endpoint] [LIVE SUCCESS] Live response count: ${dynamicRates.length}`);
    console.log(`[Rates Endpoint] Courier names returned:`, dynamicRates.map(r => r.name).join(', '));

    const finalRates = {
      rates: dynamicRates.length > 0 ? dynamicRates : baselineRates.rates,
      metadata: {
        destinationAreaId: destinationAreaId
      }
    };
    
    console.warn('\n--- [BITESHIP DEBUG LOG] ---');
    console.warn('1. Raw Biteship Response:', JSON.stringify(ratesData));
    if (dynamicRates.length === 0) {
      console.warn('2. BaselineRates Fallback Used? YES (Live pricing array was empty)');
    } else {
      console.warn('2. BaselineRates Fallback Used? NO');
    }
    console.warn('3. Final Rates Array Returned:', JSON.stringify(finalRates.rates, null, 2));
    console.warn('----------------------------\n');

    return new Response(JSON.stringify(finalRates), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('[Rates Endpoint Error]:', error);
    // Return baseline fallback rates in case of critical exceptions
    return new Response(JSON.stringify({
      error: error.message,
      note: 'Critical exception caught, fallback active.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
