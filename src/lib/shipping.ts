/**
 * Shipping API Integration Scaffolding (Simulation Layer)
 * 
 * Production Guide:
 * Replace the simulation logic inside these functions with real API calls to:
 * - RajaOngkir: https://rajaongkir.com/dokumentasi
 * - Biteship: https://biteship.com/docs/api/v1
 * - Komerce: https://komerce.id
 */

export interface Destination {
  id: string; // ID used by API (e.g., Biteship area ID or RajaOngkir subdistrict ID)
  province: string;
  city: string;
  district: string;
  postalCode: string;
}

export interface CourierRate {
  courier: string;
  service: string;
  cost: number;
  etd: string; // Estimated Time of Delivery (e.g. "2-3 Days")
}

// Comprehensive mock dataset representing all 38 Indonesian provinces (modular, API-ready)
export const MOCK_DESTINATIONS: Destination[] = [
  { id: "dest-1", province: "Aceh", city: "Kota Banda Aceh", district: "Syiah Kuala", postalCode: "23111" },
  { id: "dest-2", province: "Aceh", city: "Kota Banda Aceh", district: "Baiturrahman", postalCode: "23242" },
  { id: "dest-3", province: "Sumatera Utara", city: "Kota Medan", district: "Medan Baru", postalCode: "20152" },
  { id: "dest-4", province: "Sumatera Utara", city: "Kota Medan", district: "Medan Area", postalCode: "20211" },
  { id: "dest-5", province: "Sumatera Barat", city: "Kota Padang", district: "Padang Barat", postalCode: "25111" },
  { id: "dest-6", province: "Riau", city: "Kota Pekanbaru", district: "Tampan", postalCode: "28291" },
  { id: "dest-7", province: "Kepulauan Riau", city: "Kota Batam", district: "Lubuk Baja", postalCode: "29432" },
  { id: "dest-8", province: "Jambi", city: "Kota Jambi", district: "Telanaipura", postalCode: "36122" },
  { id: "dest-9", province: "Sumatera Selatan", city: "Kota Palembang", district: "Ilir Timur I", postalCode: "30114" },
  { id: "dest-10", province: "Kepulauan Bangka Belitung", city: "Kota Pangkal Pinang", district: "Gerunggang", postalCode: "33121" },
  { id: "dest-11", province: "Bengkulu", city: "Kota Bengkulu", district: "Ratu Agung", postalCode: "38223" },
  { id: "dest-12", province: "Lampung", city: "Kota Bandar Lampung", district: "Tanjung Karang Pusat", postalCode: "35111" },
  { id: "dest-13", province: "DKI Jakarta", city: "Kota Jakarta Selatan", district: "Kebayoran Baru", postalCode: "12110" },
  { id: "dest-14", province: "DKI Jakarta", city: "Kota Jakarta Pusat", district: "Tanah Abang", postalCode: "10210" },
  { id: "dest-15", province: "Jawa Barat", city: "Kota Bandung", district: "Coblong", postalCode: "40135" },
  { id: "dest-16", province: "Jawa Barat", city: "Kota Bogor", district: "Bogor Timur", postalCode: "16143" },
  { id: "dest-17", province: "Jawa Barat", city: "Kota Depok", district: "Beji", postalCode: "16421" },
  { id: "dest-18", province: "Jawa Barat", city: "Kota Depok", district: "Pancoran Mas", postalCode: "16436" },
  { id: "dest-19", province: "Banten", city: "Kota Tangerang", district: "Serpong", postalCode: "15310" },
  { id: "dest-20", province: "Banten", city: "Kota Tangerang", district: "Ciputat", postalCode: "15411" },
  { id: "dest-21", province: "Jawa Tengah", city: "Kota Semarang", district: "Semarang Tengah", postalCode: "50131" },
  { id: "dest-22", province: "DI Yogyakarta", city: "Kota Yogyakarta", district: "Danurejan", postalCode: "55211" },
  { id: "dest-23", province: "Jawa Timur", city: "Kota Surabaya", district: "Tegalsari", postalCode: "60262" },
  { id: "dest-24", province: "Bali", city: "Kab. Badung", district: "Kuta", postalCode: "80361" },
  { id: "dest-25", province: "Nusa Tenggara Barat", city: "Kota Mataram", district: "Ampenan", postalCode: "83111" },
  { id: "dest-26", province: "Nusa Tenggara Timur", city: "Kota Kupang", district: "Oebobo", postalCode: "85111" },
  { id: "dest-27", province: "Kalimantan Barat", city: "Kota Pontianak", district: "Pontianak Kota", postalCode: "78111" },
  { id: "dest-28", province: "Kalimantan Tengah", city: "Kota Palangkaraya", district: "Pahandut", postalCode: "73111" },
  { id: "dest-29", province: "Kalimantan Selatan", city: "Kota Banjarmasin", district: "Banjarmasin Tengah", postalCode: "70111" },
  { id: "dest-30", province: "Kalimantan Timur", city: "Kota Samarinda", district: "Samarinda Kota", postalCode: "75111" },
  { id: "dest-31", province: "Kalimantan Utara", city: "Kota Tarakan", district: "Tarakan Barat", postalCode: "77111" },
  { id: "dest-32", province: "Sulawesi Utara", city: "Kota Manado", district: "Wenang", postalCode: "95111" },
  { id: "dest-33", province: "Gorontalo", city: "Kota Gorontalo", district: "Kota Selatan", postalCode: "96111" },
  { id: "dest-34", province: "Sulawesi Tengah", city: "Kota Palu", district: "Palu Timur", postalCode: "94111" },
  { id: "dest-35", province: "Sulawesi Barat", city: "Kota Mamuju", district: "Mamuju", postalCode: "91511" },
  { id: "dest-36", province: "Sulawesi Selatan", city: "Kota Makassar", district: "Ujung Pandang", postalCode: "90111" },
  { id: "dest-37", province: "Sulawesi Tenggara", city: "Kota Kendari", district: "Kadia", postalCode: "93117" },
  { id: "dest-38", province: "Maluku", city: "Kota Ambon", district: "Sirimau", postalCode: "97128" },
  { id: "dest-39", province: "Maluku Utara", city: "Kota Ternate", district: "Ternate Tengah", postalCode: "97711" },
  { id: "dest-40", province: "Papua Barat", city: "Kota Sorong", district: "Sorong Kota", postalCode: "98411" },
  { id: "dest-41", province: "Papua", city: "Kota Jayapura", district: "Jayapura Utara", postalCode: "99111" },
  { id: "dest-42", province: "Papua Selatan", city: "Kab. Merauke", district: "Merauke", postalCode: "99611" },
  { id: "dest-43", province: "Papua Tengah", city: "Kab. Mimika", district: "Mimika Baru", postalCode: "99910" },
  { id: "dest-44", province: "Papua Pegunungan", city: "Kab. Jayawijaya", district: "Wamena", postalCode: "99511" },
  { id: "dest-45", province: "Papua Barat Daya", city: "Kab. Raja Ampat", district: "Kota Waisai", postalCode: "98481" }
];

/**
 * Autocomplete Query search
 * In production:
 * return fetch(`/api/shipping/autocomplete?q=${encodeURIComponent(query)}`).then(res => res.json());
 */
export async function searchDestinations(query: string): Promise<Destination[]> {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return [];

  // Filter mock database by district, city, or province
  return MOCK_DESTINATIONS.filter(d => 
    d.district.toLowerCase().includes(normalized) ||
    d.city.toLowerCase().includes(normalized) ||
    d.province.toLowerCase().includes(normalized)
  );
}

/**
 * Calculates Courier rates based on destination ID (API standard)
 * In production:
 * return fetch('/api/shipping/rates', {
 *   method: 'POST',
 *   body: JSON.stringify({ destinationId, items })
 * }).then(res => res.json());
 */
export async function calculateShippingRates(destinationId: string): Promise<CourierRate[]> {
  const dest = MOCK_DESTINATIONS.find(d => d.id === destinationId);
  if (!dest) {
    throw new Error("Invalid destination ID");
  }

  // Zone rates simulation
  let baseCost = 15000;
  let javaEtd = "2–4 Business Days";
  let outerEtd = "3–7 Business Days";

  if (dest.province === "DKI Jakarta") {
    baseCost = 10000;
    javaEtd = "1–2 Business Days";
  } else if (dest.province === "Jawa Barat" || dest.province === "Jawa Tengah" || dest.province === "Jawa Timur") {
    baseCost = 18000;
    javaEtd = "2–4 Business Days";
  } else if (dest.province === "Bali") {
    baseCost = 28000;
    outerEtd = "3–5 Business Days";
  } else {
    // Sumatera Utara, etc.
    baseCost = 38000;
    outerEtd = "4–7 Business Days";
  }

  return [
    {
      courier: "JNE Regular",
      service: "REG",
      cost: baseCost,
      etd: dest.province.includes("Jakarta") || dest.province.includes("Jawa") ? javaEtd : outerEtd
    },
    {
      courier: "J&T Regular",
      service: "EZ",
      cost: baseCost + 3000,
      etd: dest.province.includes("Jakarta") || dest.province.includes("Jawa") ? javaEtd : outerEtd
    },
    {
      courier: "SiCepat Regular",
      service: "SIUNTUK",
      cost: baseCost + 2000,
      etd: dest.province.includes("Jakarta") || dest.province.includes("Jawa") ? javaEtd : outerEtd
    }
  ];
}
