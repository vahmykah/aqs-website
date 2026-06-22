export { renderers } from '../../../renderers.mjs';

const prerender = false;
async function resolveDestinationAreaId(province, city, district, postalCode, apiKey, biteshipApiUrl) {
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanProvince = normalize(province);
  const cleanCity = normalize(city.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ""));
  const cleanDistrict = normalize(district || "");
  if (district) {
    try {
      const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(district + " " + city)}`;
      const res = await fetch(searchUrl, {
        headers: { "Authorization": apiKey }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.areas && data.areas.length > 0) {
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ""));
            const areaDist = normalize(area.administrative_division_level_3_name);
            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) && (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              if (areaDist.includes(cleanDistrict) || cleanDistrict.includes(areaDist)) {
                return area.id;
              }
            }
          }
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ""));
            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) && (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              return area.id;
            }
          }
          return data.areas[0].id;
        }
      }
    } catch (e) {
      console.warn("[Biteship Area Search by District/City Failed]:", e);
    }
  }
  if (postalCode && /^\d{5}$/.test(postalCode)) {
    try {
      const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(postalCode)}`;
      const res = await fetch(searchUrl, {
        headers: { "Authorization": apiKey }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.areas && data.areas.length > 0) {
          for (const area of data.areas) {
            const areaProv = normalize(area.administrative_division_level_1_name);
            const areaCity = normalize(area.administrative_division_level_2_name.replace(/^(kabupaten|kab|kota administrasi|kota)\s+/i, ""));
            if ((areaProv.includes(cleanProvince) || cleanProvince.includes(areaProv)) && (areaCity.includes(cleanCity) || cleanCity.includes(areaCity))) {
              return area.id;
            }
          }
          return data.areas[0].id;
        }
      }
    } catch (e) {
      console.warn("[Biteship Area Search by Postal Code Failed]:", e);
    }
  }
  try {
    const searchUrl = `${biteshipApiUrl}/v1/maps/areas?countries=ID&input=${encodeURIComponent(city)}`;
    const res = await fetch(searchUrl, {
      headers: { "Authorization": apiKey }
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
    console.warn("[Biteship Area Search by City Failed]:", e);
  }
  return null;
}
const POST = async ({ request }) => {
  try {
    const payload = await request.json();
    const { province, city, district, postalCode, items = [] } = payload;
    if (!province || !city) {
      return new Response(
        JSON.stringify({ error: "Missing required location fields: province, city" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const apiKey = process.env.BITESHIP_API_KEY || "biteship_live.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQVFTIFdlYnNpdGUgUHJvZHVjdGlvbiIsInVzZXJJZCI6IjZhMzgyOTc5MTI1ODE5NTAwNDFjODAyMCIsImlhdCI6MTc4MjEyNTk5MH0.xsQT6h42cbeT-4ug0KSkIi8k68odFjb6_CRwKW1pih4";
    const useBiteship = (process.env.USE_BITESHIP || "true") === "true";
    const originAreaId = process.env.BITESHIP_ORIGIN_AREA_ID || "IDNP9IDNC111IDND262IDZ16421";
    const defaultWeightVal = process.env.BITESHIP_DEFAULT_WEIGHT || "700";
    const defaultWeight = parseInt(defaultWeightVal, 10) || 700;
    const biteshipApiUrl = process.env.BITESHIP_API_URL || "https://api.biteship.com";
    let totalItemsWeight = 0;
    const biteshipItems = items.map((item) => {
      const quantity = parseInt(item.quantity, 10) || 1;
      const weight = defaultWeight;
      totalItemsWeight += weight * quantity;
      return {
        name: item.name || "SOE Bag",
        description: "Premium Carrying System",
        value: parseInt(item.price, 10) || 305e3,
        length: 10,
        width: 10,
        height: 10,
        weight,
        quantity
      };
    });
    if (biteshipItems.length === 0) {
      biteshipItems.push({
        name: "SOE Bag 1",
        description: "Premium Carrying System",
        value: 305e3,
        length: 10,
        width: 10,
        height: 10,
        weight: defaultWeight,
        quantity: 1
      });
      totalItemsWeight = defaultWeight;
    }
    const totalWeightKg = Math.ceil(totalItemsWeight / 1e3) || 1;
    let baseCost = 15e3;
    let javaEtd = "2–4 Business Days";
    let outerEtd = "3–7 Business Days";
    if (province === "DKI Jakarta") {
      baseCost = 1e4;
      javaEtd = "1–2 Business Days";
    } else if (province === "Jawa Barat" || province === "Jawa Tengah" || province === "Jawa Timur" || province === "Banten" || province === "DI Yogyakarta") {
      baseCost = 18e3;
      javaEtd = "2–4 Business Days";
    } else if (province === "Bali" || province === "Nusa Tenggara Barat" || province === "Nusa Tenggara Timur") {
      baseCost = 28e3;
      outerEtd = "3–5 Business Days";
    } else {
      baseCost = 38e3;
      outerEtd = "4–7 Business Days";
    }
    const baselineEtd = province.includes("Jakarta") || province.includes("Jawa") || province.includes("Banten") || province.includes("Yogyakarta") ? province === "DKI Jakarta" ? "1–2 Business Days" : javaEtd : outerEtd;
    const baselineRates = {
      "JNE Regular": { cost: baseCost * totalWeightKg, etd: baselineEtd },
      "J&T Regular": { cost: (baseCost + 3e3) * totalWeightKg, etd: baselineEtd },
      "SiCepat Regular": { cost: (baseCost + 2e3) * totalWeightKg, etd: baselineEtd },
      metadata: {
        destinationAreaId: null
      }
    };
    if (!useBiteship || !apiKey || apiKey === "your_biteship_api_key_here") {
      console.log("[Rates Endpoint] Biteship disabled or API key missing, returning mock rates.");
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const destinationAreaId = await resolveDestinationAreaId(province, city, district, postalCode, apiKey, biteshipApiUrl);
    if (!destinationAreaId) {
      console.warn("[Rates Endpoint] Failed to resolve Biteship destination Area ID. Using mock fallback.");
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ratesRes = await fetch(`${biteshipApiUrl}/v1/rates/couriers`, {
      method: "POST",
      headers: {
        "Authorization": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        origin_area_id: originAreaId,
        destination_area_id: destinationAreaId,
        couriers: "jne,j&t,sicepat",
        items: biteshipItems
      })
    });
    if (!ratesRes.ok) {
      const errText = await ratesRes.text();
      console.warn("[Rates Endpoint] Biteship API returned error status:", ratesRes.status, errText);
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const ratesData = await ratesRes.json();
    if (!ratesData.success || !ratesData.pricing) {
      console.warn("[Rates Endpoint] Biteship API response unsuccessful, returning mock rates:", ratesData);
      return new Response(JSON.stringify(baselineRates), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const mapped = {};
    for (const price of ratesData.pricing) {
      const code = price.courier_code.toLowerCase();
      const service = price.courier_service_code.toLowerCase();
      const cost = price.price;
      const etd = price.duration + " " + (price.shipment_duration_unit || "Days");
      if (code === "jne" && (service === "reg" || service === "regular")) {
        mapped["JNE Regular"] = { cost, etd };
      } else if ((code === "j&t" || code === "jnt") && (service === "ez" || service === "reg" || service === "regular")) {
        mapped["J&T Regular"] = { cost, etd };
      } else if (code === "sicepat" && (service === "siuntuk" || service === "reg" || service === "regular" || service === "sieu")) {
        mapped["SiCepat Regular"] = { cost, etd };
      }
    }
    const finalRates = {
      "JNE Regular": mapped["JNE Regular"] || baselineRates["JNE Regular"],
      "J&T Regular": mapped["J&T Regular"] || baselineRates["J&T Regular"],
      "SiCepat Regular": mapped["SiCepat Regular"] || baselineRates["SiCepat Regular"],
      metadata: {
        destinationAreaId
      }
    };
    return new Response(JSON.stringify(finalRates), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[Rates Endpoint Error]:", error);
    return new Response(JSON.stringify({
      error: error.message,
      note: "Critical exception caught, fallback active."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
