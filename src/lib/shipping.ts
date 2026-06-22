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
    {
      "id": "dest-1",
      "province": "Aceh",
      "city": "Kabupaten Aceh Selatan",
      "district": "Bakongan",
      "postalCode": "23111"
    },
    {
      "id": "dest-2",
      "province": "Aceh",
      "city": "Kabupaten Aceh Tenggara",
      "district": "Lawe Alas",
      "postalCode": "23111"
    },
    {
      "id": "dest-3",
      "province": "Aceh",
      "city": "Kabupaten Aceh Tengah",
      "district": "Linge",
      "postalCode": "23111"
    },
    {
      "id": "dest-4",
      "province": "Aceh",
      "city": "Kabupaten Pidie",
      "district": "Batee",
      "postalCode": "23111"
    },
    {
      "id": "dest-5",
      "province": "Aceh",
      "city": "Kabupaten Simeulue",
      "district": "Simeulue Tengah",
      "postalCode": "23111"
    },
    {
      "id": "dest-6",
      "province": "Aceh",
      "city": "Kabupaten Aceh Timur",
      "district": "Darul Aman",
      "postalCode": "23111"
    },
    {
      "id": "dest-7",
      "province": "Aceh",
      "city": "Kabupaten Aceh Besar",
      "district": "Lhoong",
      "postalCode": "23111"
    },
    {
      "id": "dest-8",
      "province": "Aceh",
      "city": "Kabupaten Aceh Utara",
      "district": "Baktiya",
      "postalCode": "23111"
    },
    {
      "id": "dest-9",
      "province": "Aceh",
      "city": "Kabupaten Aceh Singkil",
      "district": "Pulau Banyak",
      "postalCode": "23111"
    },
    {
      "id": "dest-10",
      "province": "Aceh",
      "city": "Kabupaten Aceh Barat",
      "district": "Johan Pahlawan",
      "postalCode": "23111"
    },
    {
      "id": "dest-11",
      "province": "Aceh",
      "city": "Kabupaten Bireuen",
      "district": "Samalanga",
      "postalCode": "23111"
    },
    {
      "id": "dest-12",
      "province": "Aceh",
      "city": "Kabupaten Aceh Barat Daya",
      "district": "Blangpidie",
      "postalCode": "23111"
    },
    {
      "id": "dest-13",
      "province": "Aceh",
      "city": "Kabupaten Nagan Raya",
      "district": "Kuala",
      "postalCode": "23111"
    },
    {
      "id": "dest-14",
      "province": "Aceh",
      "city": "Kabupaten Gayo Lues",
      "district": "Blangkejeren",
      "postalCode": "23111"
    },
    {
      "id": "dest-15",
      "province": "Aceh",
      "city": "Kabupaten Aceh Tamiang",
      "district": "Manyak Payed",
      "postalCode": "23111"
    },
    {
      "id": "dest-16",
      "province": "Aceh",
      "city": "Kabupaten Pidie Jaya",
      "district": "Meureudu",
      "postalCode": "23111"
    },
    {
      "id": "dest-17",
      "province": "Aceh",
      "city": "Kota Banda Aceh",
      "district": "Baiturrahman",
      "postalCode": "23111"
    },
    {
      "id": "dest-18",
      "province": "Aceh",
      "city": "Kota Sabang",
      "district": "Sukakarya",
      "postalCode": "23111"
    },
    {
      "id": "dest-19",
      "province": "Aceh",
      "city": "Kabupaten Bener Meriah",
      "district": "Pintu Rime Gayo",
      "postalCode": "23111"
    },
    {
      "id": "dest-20",
      "province": "Aceh",
      "city": "Kabupaten Aceh Jaya",
      "district": "Teunom",
      "postalCode": "23111"
    },
    {
      "id": "dest-21",
      "province": "Aceh",
      "city": "Kota Langsa",
      "district": "Langsa Timur",
      "postalCode": "23111"
    },
    {
      "id": "dest-22",
      "province": "Aceh",
      "city": "Kota Lhokseumawe",
      "district": "Muara Dua",
      "postalCode": "23111"
    },
    {
      "id": "dest-23",
      "province": "Aceh",
      "city": "Kota Subulussalam",
      "district": "Simpang Kiri",
      "postalCode": "23111"
    },
    {
      "id": "dest-24",
      "province": "Sumatera Utara",
      "city": "Kabupaten Tapanuli Utara",
      "district": "Tarutung",
      "postalCode": "20111"
    },
    {
      "id": "dest-25",
      "province": "Sumatera Utara",
      "city": "Kabupaten Nias",
      "district": "Hiliduho",
      "postalCode": "20111"
    },
    {
      "id": "dest-26",
      "province": "Sumatera Utara",
      "city": "Kabupaten Tapanuli Selatan",
      "district": "Angkola Barat",
      "postalCode": "20111"
    },
    {
      "id": "dest-27",
      "province": "Sumatera Utara",
      "city": "Kabupaten Simalungun",
      "district": "Siantar",
      "postalCode": "20111"
    },
    {
      "id": "dest-28",
      "province": "Sumatera Utara",
      "city": "Kabupaten Tapanuli Tengah",
      "district": "Barus",
      "postalCode": "20111"
    },
    {
      "id": "dest-29",
      "province": "Sumatera Utara",
      "city": "Kabupaten Labuhanbatu",
      "district": "Rantau Utara",
      "postalCode": "20111"
    },
    {
      "id": "dest-30",
      "province": "Sumatera Utara",
      "city": "Kabupaten Langkat",
      "district": "Bahorok",
      "postalCode": "20111"
    },
    {
      "id": "dest-31",
      "province": "Sumatera Utara",
      "city": "Kabupaten Karo",
      "district": "Kabanjahe",
      "postalCode": "20111"
    },
    {
      "id": "dest-32",
      "province": "Sumatera Utara",
      "city": "Kabupaten Deli Serdang",
      "district": "Gunung Meriah",
      "postalCode": "20111"
    },
    {
      "id": "dest-33",
      "province": "Sumatera Utara",
      "city": "Kabupaten Asahan",
      "district": "Meranti",
      "postalCode": "20111"
    },
    {
      "id": "dest-34",
      "province": "Sumatera Utara",
      "city": "Kabupaten Nias Selatan",
      "district": "Lolomatua",
      "postalCode": "20111"
    },
    {
      "id": "dest-35",
      "province": "Sumatera Utara",
      "city": "Kabupaten Toba",
      "district": "Balige",
      "postalCode": "20111"
    },
    {
      "id": "dest-36",
      "province": "Sumatera Utara",
      "city": "Kabupaten Mandailing Natal",
      "district": "Panyabungan",
      "postalCode": "20111"
    },
    {
      "id": "dest-37",
      "province": "Sumatera Utara",
      "city": "Kabupaten Dairi",
      "district": "Sidikalang",
      "postalCode": "20111"
    },
    {
      "id": "dest-38",
      "province": "Sumatera Utara",
      "city": "Kabupaten Humbang Hasundutan",
      "district": "Parlilitan",
      "postalCode": "20111"
    },
    {
      "id": "dest-39",
      "province": "Sumatera Utara",
      "city": "Kabupaten Samosir",
      "district": "Simanindo",
      "postalCode": "20111"
    },
    {
      "id": "dest-40",
      "province": "Sumatera Utara",
      "city": "Kabupaten Pakpak Bharat",
      "district": "Sitelu Tali Urang Jehe",
      "postalCode": "20111"
    },
    {
      "id": "dest-41",
      "province": "Sumatera Utara",
      "city": "Kabupaten Batu Bara",
      "district": "Medang Deras",
      "postalCode": "20111"
    },
    {
      "id": "dest-42",
      "province": "Sumatera Utara",
      "city": "Kabupaten Serdang Bedagai",
      "district": "Pantai Cermin",
      "postalCode": "20111"
    },
    {
      "id": "dest-43",
      "province": "Sumatera Utara",
      "city": "Kabupaten Padang Lawas Utara",
      "district": "Dolok Sigompulon",
      "postalCode": "20111"
    },
    {
      "id": "dest-44",
      "province": "Sumatera Utara",
      "city": "Kabupaten Nias Barat",
      "district": "Lahomi",
      "postalCode": "20111"
    },
    {
      "id": "dest-45",
      "province": "Sumatera Utara",
      "city": "Kota Tanjungbalai",
      "district": "Tanjungbalai Selatan",
      "postalCode": "20111"
    },
    {
      "id": "dest-46",
      "province": "Sumatera Utara",
      "city": "Kabupaten Labuhanbatu Utara",
      "district": "Kualuh Hulu",
      "postalCode": "20111"
    },
    {
      "id": "dest-47",
      "province": "Sumatera Utara",
      "city": "Kota Sibolga",
      "district": "Sibolga Utara",
      "postalCode": "20111"
    },
    {
      "id": "dest-48",
      "province": "Sumatera Utara",
      "city": "Kota Binjai",
      "district": "Binjai Utara",
      "postalCode": "20111"
    },
    {
      "id": "dest-49",
      "province": "Sumatera Utara",
      "city": "Kabupaten Labuhanbatu Selatan",
      "district": "Kotapinang",
      "postalCode": "20111"
    },
    {
      "id": "dest-50",
      "province": "Sumatera Utara",
      "city": "Kota Medan",
      "district": "Medan Kota",
      "postalCode": "20111"
    },
    {
      "id": "dest-51",
      "province": "Sumatera Utara",
      "city": "Kota Pematangsiantar",
      "district": "Siantar Timur",
      "postalCode": "20111"
    },
    {
      "id": "dest-52",
      "province": "Sumatera Utara",
      "city": "Kabupaten Nias Utara",
      "district": "Lotu",
      "postalCode": "20111"
    },
    {
      "id": "dest-53",
      "province": "Sumatera Utara",
      "city": "Kabupaten Padang Lawas",
      "district": "Sosopan",
      "postalCode": "20111"
    },
    {
      "id": "dest-54",
      "province": "Sumatera Utara",
      "city": "Kota Padangsidimpuan",
      "district": "Padangsidimpuan Utara",
      "postalCode": "20111"
    },
    {
      "id": "dest-55",
      "province": "Sumatera Utara",
      "city": "Kota Tebing Tinggi",
      "district": "Padang Hulu",
      "postalCode": "20111"
    },
    {
      "id": "dest-56",
      "province": "Sumatera Utara",
      "city": "Kota Gunungsitoli",
      "district": "Gunungsitoli",
      "postalCode": "20111"
    },
    {
      "id": "dest-57",
      "province": "Sumatera Barat",
      "city": "Kabupaten Solok",
      "district": "Pantai Cermin",
      "postalCode": "25111"
    },
    {
      "id": "dest-58",
      "province": "Sumatera Barat",
      "city": "Kabupaten Tanah Datar",
      "district": "X Koto",
      "postalCode": "25111"
    },
    {
      "id": "dest-59",
      "province": "Sumatera Barat",
      "city": "Kabupaten Agam",
      "district": "Tanjung Mutiara",
      "postalCode": "25111"
    },
    {
      "id": "dest-60",
      "province": "Sumatera Barat",
      "city": "Kabupaten Dharmasraya",
      "district": "Koto Baru",
      "postalCode": "25111"
    },
    {
      "id": "dest-61",
      "province": "Sumatera Barat",
      "city": "Kabupaten Sijunjung",
      "district": "Tanjung Gadang",
      "postalCode": "25111"
    },
    {
      "id": "dest-62",
      "province": "Sumatera Barat",
      "city": "Kabupaten Pesisir Selatan",
      "district": "Pancung Soal",
      "postalCode": "25111"
    },
    {
      "id": "dest-63",
      "province": "Sumatera Barat",
      "city": "Kabupaten Padang Pariaman",
      "district": "Lubuak Aluang",
      "postalCode": "25111"
    },
    {
      "id": "dest-64",
      "province": "Sumatera Barat",
      "city": "Kabupaten Kepulauan Mentawai",
      "district": "Pagai Utara",
      "postalCode": "25111"
    },
    {
      "id": "dest-65",
      "province": "Sumatera Barat",
      "city": "Kabupaten Pasaman",
      "district": "Bonjol",
      "postalCode": "25111"
    },
    {
      "id": "dest-66",
      "province": "Sumatera Barat",
      "city": "Kabupaten Lima Puluh Kota",
      "district": "Suliki",
      "postalCode": "25111"
    },
    {
      "id": "dest-67",
      "province": "Sumatera Barat",
      "city": "Kota Solok",
      "district": "Lubuk Sikarah",
      "postalCode": "25111"
    },
    {
      "id": "dest-68",
      "province": "Sumatera Barat",
      "city": "Kota Pariaman",
      "district": "Pariaman Tengah",
      "postalCode": "25111"
    },
    {
      "id": "dest-69",
      "province": "Sumatera Barat",
      "city": "Kota Payakumbuh",
      "district": "Payakumbuh Barat",
      "postalCode": "25111"
    },
    {
      "id": "dest-70",
      "province": "Sumatera Barat",
      "city": "Kota Padang",
      "district": "Padang Selatan",
      "postalCode": "25111"
    },
    {
      "id": "dest-71",
      "province": "Sumatera Barat",
      "city": "Kota Sawahlunto",
      "district": "Lembah Segar",
      "postalCode": "25111"
    },
    {
      "id": "dest-72",
      "province": "Sumatera Barat",
      "city": "Kota Bukittinggi",
      "district": "Guguak Panjang",
      "postalCode": "25111"
    },
    {
      "id": "dest-73",
      "province": "Sumatera Barat",
      "city": "Kabupaten Pasaman Barat",
      "district": "Sungai Beremas",
      "postalCode": "25111"
    },
    {
      "id": "dest-74",
      "province": "Sumatera Barat",
      "city": "Kabupaten Solok Selatan",
      "district": "Sangir",
      "postalCode": "25111"
    },
    {
      "id": "dest-75",
      "province": "Sumatera Barat",
      "city": "Kota Padang Panjang",
      "district": "Padang Panjang Timur",
      "postalCode": "25111"
    },
    {
      "id": "dest-76",
      "province": "Riau",
      "city": "Kabupaten Indragiri Hulu",
      "district": "Rengat",
      "postalCode": "28111"
    },
    {
      "id": "dest-77",
      "province": "Riau",
      "city": "Kabupaten Kampar",
      "district": "Bangkinang Kota",
      "postalCode": "28111"
    },
    {
      "id": "dest-78",
      "province": "Riau",
      "city": "Kabupaten Pelalawan",
      "district": "Ukui",
      "postalCode": "28111"
    },
    {
      "id": "dest-79",
      "province": "Riau",
      "city": "Kabupaten Indragiri Hilir",
      "district": "Reteh",
      "postalCode": "28111"
    },
    {
      "id": "dest-80",
      "province": "Riau",
      "city": "Kabupaten Rokan Hilir",
      "district": "Kubu",
      "postalCode": "28111"
    },
    {
      "id": "dest-81",
      "province": "Riau",
      "city": "Kabupaten Rokan Hulu",
      "district": "Ujung Batu",
      "postalCode": "28111"
    },
    {
      "id": "dest-82",
      "province": "Riau",
      "city": "Kabupaten Kepulauan Meranti",
      "district": "Tebing Tinggi",
      "postalCode": "28111"
    },
    {
      "id": "dest-83",
      "province": "Riau",
      "city": "Kabupaten Bengkalis",
      "district": "Bengkalis",
      "postalCode": "28111"
    },
    {
      "id": "dest-84",
      "province": "Riau",
      "city": "Kabupaten Siak",
      "district": "Siak",
      "postalCode": "28111"
    },
    {
      "id": "dest-85",
      "province": "Riau",
      "city": "Kabupaten Kuantan Singingi",
      "district": "Kuantan Mudik",
      "postalCode": "28111"
    },
    {
      "id": "dest-86",
      "province": "Riau",
      "city": "Kota Pekanbaru",
      "district": "Sukajadi",
      "postalCode": "28111"
    },
    {
      "id": "dest-87",
      "province": "Riau",
      "city": "Kota Dumai",
      "district": "Dumai Barat",
      "postalCode": "28111"
    },
    {
      "id": "dest-88",
      "province": "Jambi",
      "city": "Kabupaten Merangin",
      "district": "Jangkat",
      "postalCode": "36111"
    },
    {
      "id": "dest-89",
      "province": "Jambi",
      "city": "Kota Jambi",
      "district": "Telanaipura",
      "postalCode": "36111"
    },
    {
      "id": "dest-90",
      "province": "Jambi",
      "city": "Kabupaten Tebo",
      "district": "Tebo Tengah",
      "postalCode": "36111"
    },
    {
      "id": "dest-91",
      "province": "Jambi",
      "city": "Kabupaten Muaro Jambi",
      "district": "Jambi Luar Kota",
      "postalCode": "36111"
    },
    {
      "id": "dest-92",
      "province": "Jambi",
      "city": "Kabupaten Batanghari",
      "district": "Mersam",
      "postalCode": "36111"
    },
    {
      "id": "dest-93",
      "province": "Jambi",
      "city": "Kabupaten Sarolangun",
      "district": "Batang Asai",
      "postalCode": "36111"
    },
    {
      "id": "dest-94",
      "province": "Jambi",
      "city": "Kabupaten Tanjung Jabung Barat",
      "district": "Tungkal Ulu",
      "postalCode": "36111"
    },
    {
      "id": "dest-95",
      "province": "Jambi",
      "city": "Kabupaten Tanjung Jabung Timur",
      "district": "Muara Sabak Timur",
      "postalCode": "36111"
    },
    {
      "id": "dest-96",
      "province": "Jambi",
      "city": "Kabupaten Bungo",
      "district": "Tanah Tumbuh",
      "postalCode": "36111"
    },
    {
      "id": "dest-97",
      "province": "Jambi",
      "city": "Kabupaten Kerinci",
      "district": "Gunung Raya",
      "postalCode": "36111"
    },
    {
      "id": "dest-98",
      "province": "Jambi",
      "city": "Kota Sungai Penuh",
      "district": "Sungai Penuh",
      "postalCode": "36111"
    },
    {
      "id": "dest-99",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Musi Banyuasin",
      "district": "Sekayu",
      "postalCode": "30111"
    },
    {
      "id": "dest-100",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Muara Enim",
      "district": "Tanjung Agung",
      "postalCode": "30111"
    },
    {
      "id": "dest-101",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Musi Rawas",
      "district": "Tugumulyo",
      "postalCode": "30111"
    },
    {
      "id": "dest-102",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Lahat",
      "district": "Tanjungsakti Pumu",
      "postalCode": "30111"
    },
    {
      "id": "dest-103",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Ogan Komering Ulu Timu",
      "district": "Martapura",
      "postalCode": "30111"
    },
    {
      "id": "dest-104",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Banyuasin",
      "district": "Banyuasin I",
      "postalCode": "30111"
    },
    {
      "id": "dest-105",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Ogan Komering Ulu Sela",
      "district": "Muara Dua",
      "postalCode": "30111"
    },
    {
      "id": "dest-106",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Ogan Ilir",
      "district": "Muara Kuang",
      "postalCode": "30111"
    },
    {
      "id": "dest-107",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Ogan Komering Ulu",
      "district": "Sosoh Buay Rayap",
      "postalCode": "30111"
    },
    {
      "id": "dest-108",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Ogan Komering Ilir",
      "district": "Tanjung Lubuk",
      "postalCode": "30111"
    },
    {
      "id": "dest-109",
      "province": "Sumatera Selatan",
      "city": "Kota Pagar Alam",
      "district": "Pagar Alam Utara",
      "postalCode": "30111"
    },
    {
      "id": "dest-110",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Penukal Abab Lematang ",
      "district": "Talang Ubi",
      "postalCode": "30111"
    },
    {
      "id": "dest-111",
      "province": "Sumatera Selatan",
      "city": "Kota Prabumulih",
      "district": "Prabumulih Barat",
      "postalCode": "30111"
    },
    {
      "id": "dest-112",
      "province": "Sumatera Selatan",
      "city": "Kota Palembang",
      "district": "Ilir Barat Dua",
      "postalCode": "30111"
    },
    {
      "id": "dest-113",
      "province": "Sumatera Selatan",
      "city": "Kota Lubuk Linggau",
      "district": "Lubuk Linggau Timur I",
      "postalCode": "30111"
    },
    {
      "id": "dest-114",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Empat Lawang",
      "district": "Muara Pinang",
      "postalCode": "30111"
    },
    {
      "id": "dest-115",
      "province": "Sumatera Selatan",
      "city": "Kabupaten Musi Rawas Utara",
      "district": "Rupit",
      "postalCode": "30111"
    },
    {
      "id": "dest-116",
      "province": "Bengkulu",
      "city": "Kabupaten Lebong",
      "district": "Lebong Utara",
      "postalCode": "38111"
    },
    {
      "id": "dest-117",
      "province": "Bengkulu",
      "city": "Kabupaten Seluma",
      "district": "Sukaraja",
      "postalCode": "38111"
    },
    {
      "id": "dest-118",
      "province": "Bengkulu",
      "city": "Kabupaten Bengkulu Utara",
      "district": "Enggano",
      "postalCode": "38111"
    },
    {
      "id": "dest-119",
      "province": "Bengkulu",
      "city": "Kabupaten Rejang Lebong",
      "district": "Kota Padang",
      "postalCode": "38111"
    },
    {
      "id": "dest-120",
      "province": "Bengkulu",
      "city": "Kabupaten Mukomuko",
      "district": "Lubuk Pinang",
      "postalCode": "38111"
    },
    {
      "id": "dest-121",
      "province": "Bengkulu",
      "city": "Kabupaten Kaur",
      "district": "Kinal",
      "postalCode": "38111"
    },
    {
      "id": "dest-122",
      "province": "Bengkulu",
      "city": "Kota Bengkulu",
      "district": "Selebar",
      "postalCode": "38111"
    },
    {
      "id": "dest-123",
      "province": "Bengkulu",
      "city": "Kabupaten Bengkulu Tengah",
      "district": "Karang Tinggi",
      "postalCode": "38111"
    },
    {
      "id": "dest-124",
      "province": "Bengkulu",
      "city": "Kabupaten Bengkulu Selatan",
      "district": "Kedurang",
      "postalCode": "38111"
    },
    {
      "id": "dest-125",
      "province": "Bengkulu",
      "city": "Kabupaten Kepahiang",
      "district": "Bermani Ilir",
      "postalCode": "38111"
    },
    {
      "id": "dest-126",
      "province": "Lampung",
      "city": "Kabupaten Lampung Barat",
      "district": "Balik Bukit",
      "postalCode": "35111"
    },
    {
      "id": "dest-127",
      "province": "Lampung",
      "city": "Kabupaten Tulang Bawang",
      "district": "Menggala",
      "postalCode": "35111"
    },
    {
      "id": "dest-128",
      "province": "Lampung",
      "city": "Kabupaten Lampung Utara",
      "district": "Bukit Kemuning",
      "postalCode": "35111"
    },
    {
      "id": "dest-129",
      "province": "Lampung",
      "city": "Kabupaten Pesawaran",
      "district": "Gedong Tataan",
      "postalCode": "35111"
    },
    {
      "id": "dest-130",
      "province": "Lampung",
      "city": "Kabupaten Lampung Timur",
      "district": "Sukadana",
      "postalCode": "35111"
    },
    {
      "id": "dest-131",
      "province": "Lampung",
      "city": "Kabupaten Tanggamus",
      "district": "Kota Agung",
      "postalCode": "35111"
    },
    {
      "id": "dest-132",
      "province": "Lampung",
      "city": "Kabupaten Way Kanan",
      "district": "Blambangan Umpu",
      "postalCode": "35111"
    },
    {
      "id": "dest-133",
      "province": "Lampung",
      "city": "Kabupaten Lampung Tengah",
      "district": "Kalirejo",
      "postalCode": "35111"
    },
    {
      "id": "dest-134",
      "province": "Lampung",
      "city": "Kabupaten Pringsewu",
      "district": "Pringsewu",
      "postalCode": "35111"
    },
    {
      "id": "dest-135",
      "province": "Lampung",
      "city": "Kabupaten Lampung Selatan",
      "district": "Natar",
      "postalCode": "35111"
    },
    {
      "id": "dest-136",
      "province": "Lampung",
      "city": "Kabupaten Tulang Bawang Barat",
      "district": "Tulang Bawang Tengah",
      "postalCode": "35111"
    },
    {
      "id": "dest-137",
      "province": "Lampung",
      "city": "Kabupaten Pesisir Barat",
      "district": "Pesisir Tengah",
      "postalCode": "35111"
    },
    {
      "id": "dest-138",
      "province": "Lampung",
      "city": "Kabupaten Mesuji",
      "district": "Mesuji",
      "postalCode": "35111"
    },
    {
      "id": "dest-139",
      "province": "Lampung",
      "city": "Kota Metro",
      "district": "Metro Pusat",
      "postalCode": "35111"
    },
    {
      "id": "dest-140",
      "province": "Lampung",
      "city": "Kota Bandar Lampung",
      "district": "Kedaton",
      "postalCode": "35111"
    },
    {
      "id": "dest-141",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kota Pangkal Pinang",
      "district": "Bukit Intan",
      "postalCode": "33111"
    },
    {
      "id": "dest-142",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Bangka Selatan",
      "district": "Toboali",
      "postalCode": "33111"
    },
    {
      "id": "dest-143",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Belitung Timur",
      "district": "Manggar",
      "postalCode": "33111"
    },
    {
      "id": "dest-144",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Bangka Barat",
      "district": "Mentok",
      "postalCode": "33111"
    },
    {
      "id": "dest-145",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Bangka",
      "district": "Sungailiat",
      "postalCode": "33111"
    },
    {
      "id": "dest-146",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Belitung",
      "district": "Tanjungpandan",
      "postalCode": "33111"
    },
    {
      "id": "dest-147",
      "province": "Kepulauan Bangka Belitung",
      "city": "Kabupaten Bangka Tengah",
      "district": "Koba",
      "postalCode": "33111"
    },
    {
      "id": "dest-148",
      "province": "Kepulauan Riau",
      "city": "Kota Tanjung Pinang",
      "district": "Tanjung Pinang Barat",
      "postalCode": "29111"
    },
    {
      "id": "dest-149",
      "province": "Kepulauan Riau",
      "city": "Kabupaten Kepulauan Anambas",
      "district": "Siantan",
      "postalCode": "29111"
    },
    {
      "id": "dest-150",
      "province": "Kepulauan Riau",
      "city": "Kabupaten Lingga",
      "district": "Singkep",
      "postalCode": "29111"
    },
    {
      "id": "dest-151",
      "province": "Kepulauan Riau",
      "city": "Kabupaten Natuna",
      "district": "Midai",
      "postalCode": "29111"
    },
    {
      "id": "dest-152",
      "province": "Kepulauan Riau",
      "city": "Kabupaten Bintan",
      "district": "Gunung Kijang",
      "postalCode": "29111"
    },
    {
      "id": "dest-153",
      "province": "Kepulauan Riau",
      "city": "Kota Batam",
      "district": "Belakang Padang",
      "postalCode": "29111"
    },
    {
      "id": "dest-154",
      "province": "Kepulauan Riau",
      "city": "Kabupaten Karimun",
      "district": "Moro",
      "postalCode": "29111"
    },
    {
      "id": "dest-155",
      "province": "DKI Jakarta",
      "city": "Kota Administrasi Jakarta Barat",
      "district": "Cengkareng",
      "postalCode": "10210"
    },
    {
      "id": "dest-156",
      "province": "DKI Jakarta",
      "city": "Kota Administrasi Jakarta Selatan",
      "district": "Tebet",
      "postalCode": "12110"
    },
    {
      "id": "dest-157",
      "province": "DKI Jakarta",
      "city": "Kota Administrasi Jakarta Pusat",
      "district": "Gambir",
      "postalCode": "10210"
    },
    {
      "id": "dest-158",
      "province": "DKI Jakarta",
      "city": "Kabupaten Administrasi Kepulauan",
      "district": "Kepulauan Seribu Utara",
      "postalCode": "10210"
    },
    {
      "id": "dest-159",
      "province": "DKI Jakarta",
      "city": "Kota Administrasi Jakarta Utara ",
      "district": "Penjaringan",
      "postalCode": "10210"
    },
    {
      "id": "dest-160",
      "province": "DKI Jakarta",
      "city": "Kota Administrasi Jakarta Timur",
      "district": "Matraman",
      "postalCode": "10210"
    },
    {
      "id": "dest-161",
      "province": "Jawa Barat",
      "city": "Kabupaten Bandung",
      "district": "Cileunyi",
      "postalCode": "40135"
    },
    {
      "id": "dest-162",
      "province": "Jawa Barat",
      "city": "Kabupaten Cianjur",
      "district": "Cianjur",
      "postalCode": "43211"
    },
    {
      "id": "dest-163",
      "province": "Jawa Barat",
      "city": "Kabupaten Sukabumi",
      "district": "Palabuhanratu",
      "postalCode": "40211"
    },
    {
      "id": "dest-164",
      "province": "Jawa Barat",
      "city": "Kabupaten Bogor",
      "district": "Cibinong",
      "postalCode": "16143"
    },
    {
      "id": "dest-165",
      "province": "Jawa Barat",
      "city": "Kabupaten Ciamis",
      "district": "Ciamis",
      "postalCode": "46211"
    },
    {
      "id": "dest-166",
      "province": "Jawa Barat",
      "city": "Kabupaten Tasikmalaya",
      "district": "Cipatujah",
      "postalCode": "40611"
    },
    {
      "id": "dest-167",
      "province": "Jawa Barat",
      "city": "Kabupaten Majalengka",
      "district": "Lemahsugih",
      "postalCode": "41011"
    },
    {
      "id": "dest-168",
      "province": "Jawa Barat",
      "city": "Kabupaten Kuningan",
      "district": "Kadugede",
      "postalCode": "40811"
    },
    {
      "id": "dest-169",
      "province": "Jawa Barat",
      "city": "Kabupaten Garut",
      "district": "Garut Kota",
      "postalCode": "40511"
    },
    {
      "id": "dest-170",
      "province": "Jawa Barat",
      "city": "Kabupaten Cirebon",
      "district": "Waled",
      "postalCode": "45123"
    },
    {
      "id": "dest-171",
      "province": "Jawa Barat",
      "city": "Kota Sukabumi",
      "district": "Gunung Puyuh",
      "postalCode": "47211"
    },
    {
      "id": "dest-172",
      "province": "Jawa Barat",
      "city": "Kabupaten Bekasi",
      "district": "Tarumajaya",
      "postalCode": "41611"
    },
    {
      "id": "dest-173",
      "province": "Jawa Barat",
      "city": "Kabupaten Subang",
      "district": "Sagalaherang",
      "postalCode": "41311"
    },
    {
      "id": "dest-174",
      "province": "Jawa Barat",
      "city": "Kabupaten Purwakarta",
      "district": "Purwakarta",
      "postalCode": "41411"
    },
    {
      "id": "dest-175",
      "province": "Jawa Barat",
      "city": "Kabupaten Sumedang",
      "district": "Wado",
      "postalCode": "41111"
    },
    {
      "id": "dest-176",
      "province": "Jawa Barat",
      "city": "Kabupaten Karawang",
      "district": "Karawang Barat",
      "postalCode": "41511"
    },
    {
      "id": "dest-177",
      "province": "Jawa Barat",
      "city": "Kabupaten Pangandaran",
      "district": "Parigi",
      "postalCode": "41811"
    },
    {
      "id": "dest-178",
      "province": "Jawa Barat",
      "city": "Kabupaten Indramayu",
      "district": "Haurgeulis",
      "postalCode": "41211"
    },
    {
      "id": "dest-179",
      "province": "Jawa Barat",
      "city": "Kabupaten Bandung Barat",
      "district": "Lembang",
      "postalCode": "40135"
    },
    {
      "id": "dest-180",
      "province": "Jawa Barat",
      "city": "Kota Bogor",
      "district": "Bogor Selatan",
      "postalCode": "16143"
    },
    {
      "id": "dest-181",
      "province": "Jawa Barat",
      "city": "Kota Banjar",
      "district": "Banjar",
      "postalCode": "47911"
    },
    {
      "id": "dest-182",
      "province": "Jawa Barat",
      "city": "Kota Bandung",
      "district": "Sukasari",
      "postalCode": "40135"
    },
    {
      "id": "dest-183",
      "province": "Jawa Barat",
      "city": "Kota Depok",
      "district": "Pancoran Mas",
      "postalCode": "16421"
    },
    {
      "id": "dest-184",
      "province": "Jawa Barat",
      "city": "Kota Cirebon",
      "district": "Kejaksan",
      "postalCode": "45123"
    },
    {
      "id": "dest-185",
      "province": "Jawa Barat",
      "city": "Kota Tasikmalaya",
      "district": "Cihideung",
      "postalCode": "47811"
    },
    {
      "id": "dest-186",
      "province": "Jawa Barat",
      "city": "Kota Bekasi",
      "district": "Bekasi Timur",
      "postalCode": "47511"
    },
    {
      "id": "dest-187",
      "province": "Jawa Barat",
      "city": "Kota Cimahi",
      "district": "Cimahi Selatan",
      "postalCode": "40522"
    },
    {
      "id": "dest-188",
      "province": "Jawa Tengah",
      "city": "Kabupaten Banyumas",
      "district": "Lumbir",
      "postalCode": "50111"
    },
    {
      "id": "dest-189",
      "province": "Jawa Tengah",
      "city": "Kabupaten Boyolali",
      "district": "Selo",
      "postalCode": "50111"
    },
    {
      "id": "dest-190",
      "province": "Jawa Tengah",
      "city": "Kabupaten Cilacap",
      "district": "Kedungreja",
      "postalCode": "50111"
    },
    {
      "id": "dest-191",
      "province": "Jawa Tengah",
      "city": "Kabupaten Purworejo",
      "district": "Grabag",
      "postalCode": "50111"
    },
    {
      "id": "dest-192",
      "province": "Jawa Tengah",
      "city": "Kabupaten Klaten",
      "district": "Prambanan",
      "postalCode": "50111"
    },
    {
      "id": "dest-193",
      "province": "Jawa Tengah",
      "city": "Kabupaten Banjarnegara",
      "district": "Susukan",
      "postalCode": "50111"
    },
    {
      "id": "dest-194",
      "province": "Jawa Tengah",
      "city": "Kabupaten Wonosobo",
      "district": "Wadaslintang",
      "postalCode": "50111"
    },
    {
      "id": "dest-195",
      "province": "Jawa Tengah",
      "city": "Kabupaten Magelang",
      "district": "Salaman",
      "postalCode": "50111"
    },
    {
      "id": "dest-196",
      "province": "Jawa Tengah",
      "city": "Kabupaten Kebumen",
      "district": "Ayah",
      "postalCode": "50111"
    },
    {
      "id": "dest-197",
      "province": "Jawa Tengah",
      "city": "Kabupaten Purbalingga",
      "district": "Kemangkon",
      "postalCode": "50111"
    },
    {
      "id": "dest-198",
      "province": "Jawa Tengah",
      "city": "Kabupaten Sragen",
      "district": "Kalijambe",
      "postalCode": "50111"
    },
    {
      "id": "dest-199",
      "province": "Jawa Tengah",
      "city": "Kabupaten Karanganyar",
      "district": "Jatipuro",
      "postalCode": "50111"
    },
    {
      "id": "dest-200",
      "province": "Jawa Tengah",
      "city": "Kabupaten Pati",
      "district": "Sukolilo",
      "postalCode": "50111"
    },
    {
      "id": "dest-201",
      "province": "Jawa Tengah",
      "city": "Kabupaten Blora",
      "district": "Jati",
      "postalCode": "50111"
    },
    {
      "id": "dest-202",
      "province": "Jawa Tengah",
      "city": "Kabupaten Rembang",
      "district": "Sumber",
      "postalCode": "50111"
    },
    {
      "id": "dest-203",
      "province": "Jawa Tengah",
      "city": "Kabupaten Kudus",
      "district": "Kaliwungu",
      "postalCode": "50111"
    },
    {
      "id": "dest-204",
      "province": "Jawa Tengah",
      "city": "Kabupaten Grobogan",
      "district": "Kedungjati",
      "postalCode": "50111"
    },
    {
      "id": "dest-205",
      "province": "Jawa Tengah",
      "city": "Kabupaten Sukoharjo",
      "district": "Weru",
      "postalCode": "50111"
    },
    {
      "id": "dest-206",
      "province": "Jawa Tengah",
      "city": "Kabupaten Jepara",
      "district": "Kedung",
      "postalCode": "50111"
    },
    {
      "id": "dest-207",
      "province": "Jawa Tengah",
      "city": "Kabupaten Wonogiri",
      "district": "Pracimantoro",
      "postalCode": "50111"
    },
    {
      "id": "dest-208",
      "province": "Jawa Tengah",
      "city": "Kabupaten Demak",
      "district": "Mranggen",
      "postalCode": "50111"
    },
    {
      "id": "dest-209",
      "province": "Jawa Tengah",
      "city": "Kabupaten Batang",
      "district": "Wonotunggal",
      "postalCode": "50111"
    },
    {
      "id": "dest-210",
      "province": "Jawa Tengah",
      "city": "Kabupaten Brebes",
      "district": "Salem",
      "postalCode": "50111"
    },
    {
      "id": "dest-211",
      "province": "Jawa Tengah",
      "city": "Kabupaten Semarang",
      "district": "Getasan",
      "postalCode": "50111"
    },
    {
      "id": "dest-212",
      "province": "Jawa Tengah",
      "city": "Kabupaten Tegal",
      "district": "Margasari",
      "postalCode": "50111"
    },
    {
      "id": "dest-213",
      "province": "Jawa Tengah",
      "city": "Kabupaten Pemalang",
      "district": "Moga",
      "postalCode": "50111"
    },
    {
      "id": "dest-214",
      "province": "Jawa Tengah",
      "city": "Kabupaten Temanggung",
      "district": "Bulu",
      "postalCode": "50111"
    },
    {
      "id": "dest-215",
      "province": "Jawa Tengah",
      "city": "Kabupaten Pekalongan",
      "district": "Kandangserang",
      "postalCode": "50111"
    },
    {
      "id": "dest-216",
      "province": "Jawa Tengah",
      "city": "Kota Magelang",
      "district": "Magelang Selatan",
      "postalCode": "50111"
    },
    {
      "id": "dest-217",
      "province": "Jawa Tengah",
      "city": "Kabupaten Kendal",
      "district": "Plantungan",
      "postalCode": "50111"
    },
    {
      "id": "dest-218",
      "province": "Jawa Tengah",
      "city": "Kota Salatiga",
      "district": "Sidorejo",
      "postalCode": "50111"
    },
    {
      "id": "dest-219",
      "province": "Jawa Tengah",
      "city": "Kota Semarang",
      "district": "Semarang Tengah",
      "postalCode": "50111"
    },
    {
      "id": "dest-220",
      "province": "Jawa Tengah",
      "city": "Kota Pekalongan",
      "district": "Pekalongan Barat",
      "postalCode": "50111"
    },
    {
      "id": "dest-221",
      "province": "Jawa Tengah",
      "city": "Kota Surakarta",
      "district": "Laweyan",
      "postalCode": "50111"
    },
    {
      "id": "dest-222",
      "province": "Jawa Tengah",
      "city": "Kota Tegal",
      "district": "Tegal Barat",
      "postalCode": "50111"
    },
    {
      "id": "dest-223",
      "province": "DI Yogyakarta",
      "city": "Kabupaten Kulon Progo",
      "district": "Temon",
      "postalCode": "55111"
    },
    {
      "id": "dest-224",
      "province": "DI Yogyakarta",
      "city": "Kabupaten Sleman",
      "district": "Gamping",
      "postalCode": "55111"
    },
    {
      "id": "dest-225",
      "province": "DI Yogyakarta",
      "city": "Kabupaten Gunungkidul",
      "district": "Wonosari",
      "postalCode": "55111"
    },
    {
      "id": "dest-226",
      "province": "DI Yogyakarta",
      "city": "Kota Yogyakarta",
      "district": "Tegalrejo",
      "postalCode": "55111"
    },
    {
      "id": "dest-227",
      "province": "DI Yogyakarta",
      "city": "Kabupaten Bantul",
      "district": "Srandakan",
      "postalCode": "55111"
    },
    {
      "id": "dest-228",
      "province": "Jawa Timur",
      "city": "Kabupaten Pacitan",
      "district": "Donorojo",
      "postalCode": "60111"
    },
    {
      "id": "dest-229",
      "province": "Jawa Timur",
      "city": "Kabupaten Lumajang",
      "district": "Tempursari",
      "postalCode": "60111"
    },
    {
      "id": "dest-230",
      "province": "Jawa Timur",
      "city": "Kabupaten Ponorogo",
      "district": "Slahung",
      "postalCode": "60111"
    },
    {
      "id": "dest-231",
      "province": "Jawa Timur",
      "city": "Kabupaten Tulungagung",
      "district": "Tulungagung",
      "postalCode": "60111"
    },
    {
      "id": "dest-232",
      "province": "Jawa Timur",
      "city": "Kabupaten Kediri",
      "district": "Semen",
      "postalCode": "60111"
    },
    {
      "id": "dest-233",
      "province": "Jawa Timur",
      "city": "Kabupaten Trenggalek",
      "district": "Panggul",
      "postalCode": "60111"
    },
    {
      "id": "dest-234",
      "province": "Jawa Timur",
      "city": "Kabupaten Blitar",
      "district": "Wonodadi",
      "postalCode": "60111"
    },
    {
      "id": "dest-235",
      "province": "Jawa Timur",
      "city": "Kabupaten Jember",
      "district": "Jombang",
      "postalCode": "60111"
    },
    {
      "id": "dest-236",
      "province": "Jawa Timur",
      "city": "Kabupaten Malang",
      "district": "Donomulyo",
      "postalCode": "60111"
    },
    {
      "id": "dest-237",
      "province": "Jawa Timur",
      "city": "Kabupaten Banyuwangi",
      "district": "Pesanggaran",
      "postalCode": "60111"
    },
    {
      "id": "dest-238",
      "province": "Jawa Timur",
      "city": "Kabupaten Jombang",
      "district": "Perak",
      "postalCode": "60111"
    },
    {
      "id": "dest-239",
      "province": "Jawa Timur",
      "city": "Kabupaten Probolinggo",
      "district": "Sukapura",
      "postalCode": "60111"
    },
    {
      "id": "dest-240",
      "province": "Jawa Timur",
      "city": "Kabupaten Magetan",
      "district": "Poncol",
      "postalCode": "60111"
    },
    {
      "id": "dest-241",
      "province": "Jawa Timur",
      "city": "Kabupaten Bondowoso",
      "district": "Maesan",
      "postalCode": "60111"
    },
    {
      "id": "dest-242",
      "province": "Jawa Timur",
      "city": "Kabupaten Madiun",
      "district": "Kebonsari",
      "postalCode": "60111"
    },
    {
      "id": "dest-243",
      "province": "Jawa Timur",
      "city": "Kabupaten Sidoarjo",
      "district": "Tarik",
      "postalCode": "60111"
    },
    {
      "id": "dest-244",
      "province": "Jawa Timur",
      "city": "Kabupaten Nganjuk",
      "district": "Sawahan",
      "postalCode": "60111"
    },
    {
      "id": "dest-245",
      "province": "Jawa Timur",
      "city": "Kabupaten Situbondo",
      "district": "Jatibanteng",
      "postalCode": "60111"
    },
    {
      "id": "dest-246",
      "province": "Jawa Timur",
      "city": "Kabupaten Mojokerto",
      "district": "Jatirejo",
      "postalCode": "60111"
    },
    {
      "id": "dest-247",
      "province": "Jawa Timur",
      "city": "Kabupaten Pasuruan",
      "district": "Purwodadi",
      "postalCode": "60111"
    },
    {
      "id": "dest-248",
      "province": "Jawa Timur",
      "city": "Kota Kediri",
      "district": "Mojoroto",
      "postalCode": "60111"
    },
    {
      "id": "dest-249",
      "province": "Jawa Timur",
      "city": "Kabupaten Ngawi",
      "district": "Sine",
      "postalCode": "60111"
    },
    {
      "id": "dest-250",
      "province": "Jawa Timur",
      "city": "Kabupaten Tuban",
      "district": "Kenduruan",
      "postalCode": "60111"
    },
    {
      "id": "dest-251",
      "province": "Jawa Timur",
      "city": "Kabupaten Sumenep",
      "district": "Kota Sumenep",
      "postalCode": "60111"
    },
    {
      "id": "dest-252",
      "province": "Jawa Timur",
      "city": "Kabupaten Pamekasan",
      "district": "Tlanakan",
      "postalCode": "60111"
    },
    {
      "id": "dest-253",
      "province": "Jawa Timur",
      "city": "Kabupaten Bojonegoro",
      "district": "Ngraho",
      "postalCode": "60111"
    },
    {
      "id": "dest-254",
      "province": "Jawa Timur",
      "city": "Kabupaten Gresik",
      "district": "Dukun",
      "postalCode": "60111"
    },
    {
      "id": "dest-255",
      "province": "Jawa Timur",
      "city": "Kabupaten Sampang",
      "district": "Sreseh",
      "postalCode": "60111"
    },
    {
      "id": "dest-256",
      "province": "Jawa Timur",
      "city": "Kabupaten Lamongan",
      "district": "Sukorame",
      "postalCode": "60111"
    },
    {
      "id": "dest-257",
      "province": "Jawa Timur",
      "city": "Kabupaten Bangkalan",
      "district": "Bangkalan",
      "postalCode": "60111"
    },
    {
      "id": "dest-258",
      "province": "Jawa Timur",
      "city": "Kota Mojokerto",
      "district": "Prajuritkulon",
      "postalCode": "60111"
    },
    {
      "id": "dest-259",
      "province": "Jawa Timur",
      "city": "Kota Blitar",
      "district": "Kepanjenkidul",
      "postalCode": "60111"
    },
    {
      "id": "dest-260",
      "province": "Jawa Timur",
      "city": "Kota Batu",
      "district": "Batu",
      "postalCode": "60111"
    },
    {
      "id": "dest-261",
      "province": "Jawa Timur",
      "city": "Kota Pasuruan",
      "district": "Gadingrejo",
      "postalCode": "60111"
    },
    {
      "id": "dest-262",
      "province": "Jawa Timur",
      "city": "Kota Probolinggo",
      "district": "Kademangan",
      "postalCode": "60111"
    },
    {
      "id": "dest-263",
      "province": "Jawa Timur",
      "city": "Kota Malang",
      "district": "Blimbing",
      "postalCode": "60111"
    },
    {
      "id": "dest-264",
      "province": "Jawa Timur",
      "city": "Kota Madiun",
      "district": "Kartoharjo",
      "postalCode": "60111"
    },
    {
      "id": "dest-265",
      "province": "Jawa Timur",
      "city": "Kota Surabaya",
      "district": "Karang Pilang",
      "postalCode": "60111"
    },
    {
      "id": "dest-266",
      "province": "Banten",
      "city": "Kota Tangerang",
      "district": "Tangerang",
      "postalCode": "15310"
    },
    {
      "id": "dest-267",
      "province": "Banten",
      "city": "Kabupaten Pandeglang",
      "district": "Sumur",
      "postalCode": "42111"
    },
    {
      "id": "dest-268",
      "province": "Banten",
      "city": "Kabupaten Tangerang",
      "district": "Balaraja",
      "postalCode": "15310"
    },
    {
      "id": "dest-269",
      "province": "Banten",
      "city": "Kota Tangerang Selatan",
      "district": "Serpong",
      "postalCode": "15310"
    },
    {
      "id": "dest-270",
      "province": "Banten",
      "city": "Kota Serang",
      "district": "Serang",
      "postalCode": "42111"
    },
    {
      "id": "dest-271",
      "province": "Banten",
      "city": "Kabupaten Lebak",
      "district": "Malingping",
      "postalCode": "42111"
    },
    {
      "id": "dest-272",
      "province": "Banten",
      "city": "Kota Cilegon",
      "district": "Cibeber",
      "postalCode": "42111"
    },
    {
      "id": "dest-273",
      "province": "Banten",
      "city": "Kabupaten Serang",
      "district": "Kramatwatu",
      "postalCode": "42111"
    },
    {
      "id": "dest-274",
      "province": "Bali",
      "city": "Kabupaten Jembrana",
      "district": "Negara",
      "postalCode": "80361"
    },
    {
      "id": "dest-275",
      "province": "Bali",
      "city": "Kabupaten Klungkung",
      "district": "Nusa Penida",
      "postalCode": "80361"
    },
    {
      "id": "dest-276",
      "province": "Bali",
      "city": "Kabupaten Karangasem",
      "district": "Rendang",
      "postalCode": "80361"
    },
    {
      "id": "dest-277",
      "province": "Bali",
      "city": "Kabupaten Badung",
      "district": "Kuta",
      "postalCode": "80361"
    },
    {
      "id": "dest-278",
      "province": "Bali",
      "city": "Kabupaten Tabanan",
      "district": "Selemadeg",
      "postalCode": "80361"
    },
    {
      "id": "dest-279",
      "province": "Bali",
      "city": "Kabupaten Buleleng",
      "district": "Gerokgak",
      "postalCode": "80361"
    },
    {
      "id": "dest-280",
      "province": "Bali",
      "city": "Kabupaten Gianyar",
      "district": "Sukawati",
      "postalCode": "80361"
    },
    {
      "id": "dest-281",
      "province": "Bali",
      "city": "Kabupaten Bangli",
      "district": "Susut",
      "postalCode": "80361"
    },
    {
      "id": "dest-282",
      "province": "Bali",
      "city": "Kota Denpasar",
      "district": "Denpasar Selatan",
      "postalCode": "80361"
    },
    {
      "id": "dest-283",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Sumbawa Barat",
      "district": "Jereweh",
      "postalCode": "83111"
    },
    {
      "id": "dest-284",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Lombok Tengah",
      "district": "Praya",
      "postalCode": "83111"
    },
    {
      "id": "dest-285",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Lombok Timur",
      "district": "Keruak",
      "postalCode": "83111"
    },
    {
      "id": "dest-286",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Lombok Barat",
      "district": "Gerung",
      "postalCode": "83111"
    },
    {
      "id": "dest-287",
      "province": "Nusa Tenggara Barat",
      "city": "Kota Mataram",
      "district": "Ampenan",
      "postalCode": "83111"
    },
    {
      "id": "dest-288",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Sumbawa",
      "district": "Lunyuk",
      "postalCode": "83111"
    },
    {
      "id": "dest-289",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Lombok Utara",
      "district": "Tanjung",
      "postalCode": "83111"
    },
    {
      "id": "dest-290",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Dompu",
      "district": "Dompu",
      "postalCode": "83111"
    },
    {
      "id": "dest-291",
      "province": "Nusa Tenggara Barat",
      "city": "Kota Bima",
      "district": "Rasanae Barat",
      "postalCode": "83111"
    },
    {
      "id": "dest-292",
      "province": "Nusa Tenggara Barat",
      "city": "Kabupaten Bima",
      "district": "Monta",
      "postalCode": "83111"
    },
    {
      "id": "dest-293",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Ende",
      "district": "Nangapanda",
      "postalCode": "85111"
    },
    {
      "id": "dest-294",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Alor",
      "district": "Teluk Mutiara",
      "postalCode": "85111"
    },
    {
      "id": "dest-295",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Ngada",
      "district": "Aimere",
      "postalCode": "85111"
    },
    {
      "id": "dest-296",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Timor Tengah Selatan",
      "district": "Kota Soe",
      "postalCode": "85111"
    },
    {
      "id": "dest-297",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Belu",
      "district": "Lamaknen",
      "postalCode": "85111"
    },
    {
      "id": "dest-298",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sikka",
      "district": "Paga",
      "postalCode": "85111"
    },
    {
      "id": "dest-299",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Manggarai",
      "district": "Wae Rii",
      "postalCode": "85111"
    },
    {
      "id": "dest-300",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Timor Tengah Utara",
      "district": "Miomaffo Timur",
      "postalCode": "85111"
    },
    {
      "id": "dest-301",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Kupang",
      "district": "Semau",
      "postalCode": "85111"
    },
    {
      "id": "dest-302",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Flores Timur",
      "district": "Wulanggitang",
      "postalCode": "85111"
    },
    {
      "id": "dest-303",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Manggarai Timur",
      "district": "Borong",
      "postalCode": "85111"
    },
    {
      "id": "dest-304",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sumba Barat Daya",
      "district": "Loura",
      "postalCode": "85111"
    },
    {
      "id": "dest-305",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Manggarai Barat",
      "district": "Macang Pacar",
      "postalCode": "85111"
    },
    {
      "id": "dest-306",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sumba Tengah",
      "district": "Katiku Tana",
      "postalCode": "85111"
    },
    {
      "id": "dest-307",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sumba Timur",
      "district": "Kota Waingapu",
      "postalCode": "85111"
    },
    {
      "id": "dest-308",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Nagekeo",
      "district": "Aesesa",
      "postalCode": "85111"
    },
    {
      "id": "dest-309",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sumba Barat",
      "district": "Tana Righu",
      "postalCode": "85111"
    },
    {
      "id": "dest-310",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Lembata",
      "district": "Naga Wutung",
      "postalCode": "85111"
    },
    {
      "id": "dest-311",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Sabu Raijua",
      "district": "Sabu Barat",
      "postalCode": "85111"
    },
    {
      "id": "dest-312",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Rote Ndao",
      "district": "Rote Barat Daya",
      "postalCode": "85111"
    },
    {
      "id": "dest-313",
      "province": "Nusa Tenggara Timur",
      "city": "Kota Kupang",
      "district": "Alak",
      "postalCode": "85111"
    },
    {
      "id": "dest-314",
      "province": "Nusa Tenggara Timur",
      "city": "Kabupaten Malaka",
      "district": "Malaka Tengah",
      "postalCode": "85111"
    },
    {
      "id": "dest-315",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Sambas",
      "district": "Sambas",
      "postalCode": "78111"
    },
    {
      "id": "dest-316",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Sanggau",
      "district": "Kapuas",
      "postalCode": "78111"
    },
    {
      "id": "dest-317",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Melawi",
      "district": "Belimbing",
      "postalCode": "78111"
    },
    {
      "id": "dest-318",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Sintang",
      "district": "Sintang",
      "postalCode": "78111"
    },
    {
      "id": "dest-319",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Bengkayang",
      "district": "Sungai Raya",
      "postalCode": "78111"
    },
    {
      "id": "dest-320",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Ketapang",
      "district": "Matan Hilir Utara",
      "postalCode": "78111"
    },
    {
      "id": "dest-321",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Sekadau",
      "district": "Sekadau Hilir",
      "postalCode": "78111"
    },
    {
      "id": "dest-322",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Kapuas Hulu",
      "district": "Putussibau Utara",
      "postalCode": "78111"
    },
    {
      "id": "dest-323",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Mempawah",
      "district": "Mempawah Hilir",
      "postalCode": "78111"
    },
    {
      "id": "dest-324",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Landak",
      "district": "Ngabang",
      "postalCode": "78111"
    },
    {
      "id": "dest-325",
      "province": "Kalimantan Barat",
      "city": "Kota Pontianak",
      "district": "Pontianak Selatan",
      "postalCode": "78111"
    },
    {
      "id": "dest-326",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Kayong Utara",
      "district": "Sukadana",
      "postalCode": "78111"
    },
    {
      "id": "dest-327",
      "province": "Kalimantan Barat",
      "city": "Kabupaten Kubu Raya",
      "district": "Sungai Raya",
      "postalCode": "78111"
    },
    {
      "id": "dest-328",
      "province": "Kalimantan Barat",
      "city": "Kota Singkawang",
      "district": "Singkawang Tengah",
      "postalCode": "78111"
    },
    {
      "id": "dest-329",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Katingan",
      "district": "Kamipang",
      "postalCode": "73111"
    },
    {
      "id": "dest-330",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Kotawaringin Timur",
      "district": "Kota Besi",
      "postalCode": "73111"
    },
    {
      "id": "dest-331",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Barito Utara",
      "district": "Montallat",
      "postalCode": "73111"
    },
    {
      "id": "dest-332",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Sukamara",
      "district": "Sukamara",
      "postalCode": "73111"
    },
    {
      "id": "dest-333",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Seruyan",
      "district": "Seruyan Hilir",
      "postalCode": "73111"
    },
    {
      "id": "dest-334",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Gunung Mas",
      "district": "Sepang",
      "postalCode": "73111"
    },
    {
      "id": "dest-335",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Kotawaringin Barat",
      "district": "Kumai",
      "postalCode": "73111"
    },
    {
      "id": "dest-336",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Barito Selatan",
      "district": "Jenamas",
      "postalCode": "73111"
    },
    {
      "id": "dest-337",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Lamandau",
      "district": "Lamandau",
      "postalCode": "73111"
    },
    {
      "id": "dest-338",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Kapuas",
      "district": "Selat",
      "postalCode": "73111"
    },
    {
      "id": "dest-339",
      "province": "Kalimantan Tengah",
      "city": "Kota Palangkaraya",
      "district": "Pahandut",
      "postalCode": "73111"
    },
    {
      "id": "dest-340",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Pulang Pisau",
      "district": "Pandih Batu",
      "postalCode": "73111"
    },
    {
      "id": "dest-341",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Barito Timur",
      "district": "Dusun Timur",
      "postalCode": "73111"
    },
    {
      "id": "dest-342",
      "province": "Kalimantan Tengah",
      "city": "Kabupaten Murung Raya",
      "district": "Murung",
      "postalCode": "73111"
    },
    {
      "id": "dest-343",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Tabalong",
      "district": "Banua Lawas",
      "postalCode": "70111"
    },
    {
      "id": "dest-344",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Tapin",
      "district": "Binuang",
      "postalCode": "70111"
    },
    {
      "id": "dest-345",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Kotabaru",
      "district": "Pulau Sembilan",
      "postalCode": "70111"
    },
    {
      "id": "dest-346",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Hulu Sungai Tengah",
      "district": "Haruyan",
      "postalCode": "70111"
    },
    {
      "id": "dest-347",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Tanah Laut",
      "district": "Takisung",
      "postalCode": "70111"
    },
    {
      "id": "dest-348",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Banjar",
      "district": "Aluh Aluh",
      "postalCode": "70111"
    },
    {
      "id": "dest-349",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Hulu Sungai Selatan",
      "district": "Sungai Raya",
      "postalCode": "70111"
    },
    {
      "id": "dest-350",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Tanah Bumbu",
      "district": "Batu Licin",
      "postalCode": "70111"
    },
    {
      "id": "dest-351",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Barito Kuala",
      "district": "Tabunganen",
      "postalCode": "70111"
    },
    {
      "id": "dest-352",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Hulu Sungai Utara",
      "district": "Danau Panggang",
      "postalCode": "70111"
    },
    {
      "id": "dest-353",
      "province": "Kalimantan Selatan",
      "city": "Kabupaten Balangan",
      "district": "Juai",
      "postalCode": "70111"
    },
    {
      "id": "dest-354",
      "province": "Kalimantan Selatan",
      "city": "Kota Banjarbaru",
      "district": "Landasan Ulin",
      "postalCode": "70111"
    },
    {
      "id": "dest-355",
      "province": "Kalimantan Selatan",
      "city": "Kota Banjarmasin",
      "district": "Banjarmasin Selatan",
      "postalCode": "70111"
    },
    {
      "id": "dest-356",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Kutai Timur",
      "district": "Muara Ancalong",
      "postalCode": "75111"
    },
    {
      "id": "dest-357",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Kutai Barat",
      "district": "Long Iram",
      "postalCode": "75111"
    },
    {
      "id": "dest-358",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Penajam Paser Utara",
      "district": "Penajam",
      "postalCode": "75111"
    },
    {
      "id": "dest-359",
      "province": "Kalimantan Timur",
      "city": "Kota Samarinda",
      "district": "Palaran",
      "postalCode": "75111"
    },
    {
      "id": "dest-360",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Berau",
      "district": "Kelay",
      "postalCode": "75111"
    },
    {
      "id": "dest-361",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Paser",
      "district": "Batu Sopang",
      "postalCode": "75111"
    },
    {
      "id": "dest-362",
      "province": "Kalimantan Timur",
      "city": "Kota Bontang",
      "district": "Bontang Utara",
      "postalCode": "75111"
    },
    {
      "id": "dest-363",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Mahakam Ulu",
      "district": "Long Bagun",
      "postalCode": "75111"
    },
    {
      "id": "dest-364",
      "province": "Kalimantan Timur",
      "city": "Kabupaten Kutai Kartanegara",
      "district": "Muara Muntai",
      "postalCode": "75111"
    },
    {
      "id": "dest-365",
      "province": "Kalimantan Timur",
      "city": "Kota Balikpapan",
      "district": "Balikpapan Timur",
      "postalCode": "75111"
    },
    {
      "id": "dest-366",
      "province": "Kalimantan Utara",
      "city": "Kota Tarakan",
      "district": "Tarakan Barat",
      "postalCode": "77111"
    },
    {
      "id": "dest-367",
      "province": "Kalimantan Utara",
      "city": "Kabupaten Nunukan",
      "district": "Sebatik",
      "postalCode": "77111"
    },
    {
      "id": "dest-368",
      "province": "Kalimantan Utara",
      "city": "Kabupaten Bulungan",
      "district": "Tanjung Palas",
      "postalCode": "77111"
    },
    {
      "id": "dest-369",
      "province": "Kalimantan Utara",
      "city": "Kabupaten Tana Tidung",
      "district": "Sesayap",
      "postalCode": "77111"
    },
    {
      "id": "dest-370",
      "province": "Kalimantan Utara",
      "city": "Kabupaten Malinau",
      "district": "Mentarang",
      "postalCode": "77111"
    },
    {
      "id": "dest-371",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Minahasa Tenggara",
      "district": "Ratahan",
      "postalCode": "95111"
    },
    {
      "id": "dest-372",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Minahasa Utara",
      "district": "Kema",
      "postalCode": "95111"
    },
    {
      "id": "dest-373",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Bolaang Mongondow",
      "district": "Sang Tombolang",
      "postalCode": "95111"
    },
    {
      "id": "dest-374",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Bolaang Mongondow Timu",
      "district": "Tutuyan",
      "postalCode": "95111"
    },
    {
      "id": "dest-375",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Minahasa",
      "district": "Tondano Barat",
      "postalCode": "95111"
    },
    {
      "id": "dest-376",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Kep. Siau Tagulandang ",
      "district": "Siau Timur",
      "postalCode": "95111"
    },
    {
      "id": "dest-377",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Kepulauan Talaud",
      "district": "Lirung",
      "postalCode": "95111"
    },
    {
      "id": "dest-378",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Bolaang Mongondow Utar",
      "district": "Sangkub",
      "postalCode": "95111"
    },
    {
      "id": "dest-379",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Minahasa Selatan",
      "district": "Modoinding",
      "postalCode": "95111"
    },
    {
      "id": "dest-380",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Kepulauan Sangihe",
      "district": "Tabukan Utara",
      "postalCode": "95111"
    },
    {
      "id": "dest-381",
      "province": "Sulawesi Utara",
      "city": "Kota Manado",
      "district": "Bunaken",
      "postalCode": "95111"
    },
    {
      "id": "dest-382",
      "province": "Sulawesi Utara",
      "city": "Kabupaten Bolaang Mongondow Sela",
      "district": "Bolaang Uki",
      "postalCode": "95111"
    },
    {
      "id": "dest-383",
      "province": "Sulawesi Utara",
      "city": "Kota Kotamobagu",
      "district": "Kotamobagu Utara",
      "postalCode": "95111"
    },
    {
      "id": "dest-384",
      "province": "Sulawesi Utara",
      "city": "Kota Tomohon",
      "district": "Tomohon Selatan",
      "postalCode": "95111"
    },
    {
      "id": "dest-385",
      "province": "Sulawesi Utara",
      "city": "Kota Bitung",
      "district": "Lembeh Selatan",
      "postalCode": "95111"
    },
    {
      "id": "dest-386",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Banggai Kepulauan",
      "district": "Totikum",
      "postalCode": "94111"
    },
    {
      "id": "dest-387",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Buol",
      "district": "Momunu",
      "postalCode": "94111"
    },
    {
      "id": "dest-388",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Sigi",
      "district": "Sigi Biromaru",
      "postalCode": "94111"
    },
    {
      "id": "dest-389",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Tojo Una Una",
      "district": "Una Una",
      "postalCode": "94111"
    },
    {
      "id": "dest-390",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Donggala",
      "district": "Rio Pakava",
      "postalCode": "94111"
    },
    {
      "id": "dest-391",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Toli-toli",
      "district": "Dampal Selatan",
      "postalCode": "94111"
    },
    {
      "id": "dest-392",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Morowali",
      "district": "Bungku Tengah",
      "postalCode": "94111"
    },
    {
      "id": "dest-393",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Banggai",
      "district": "Batui",
      "postalCode": "94111"
    },
    {
      "id": "dest-394",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Parigi Moutong",
      "district": "Parigi",
      "postalCode": "94111"
    },
    {
      "id": "dest-395",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Poso",
      "district": "Poso Kota",
      "postalCode": "94111"
    },
    {
      "id": "dest-396",
      "province": "Sulawesi Tengah",
      "city": "Kota Palu",
      "district": "Palu Timur",
      "postalCode": "94111"
    },
    {
      "id": "dest-397",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Banggai Laut",
      "district": "Banggai",
      "postalCode": "94111"
    },
    {
      "id": "dest-398",
      "province": "Sulawesi Tengah",
      "city": "Kabupaten Morowali Utara",
      "district": "Petasia",
      "postalCode": "94111"
    },
    {
      "id": "dest-399",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Gowa",
      "district": "Bontonompo",
      "postalCode": "90111"
    },
    {
      "id": "dest-400",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Bulukumba",
      "district": "Gantarang",
      "postalCode": "90111"
    },
    {
      "id": "dest-401",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Kepulauan Selayar",
      "district": "Benteng",
      "postalCode": "90111"
    },
    {
      "id": "dest-402",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Jeneponto",
      "district": "Bangkala",
      "postalCode": "90111"
    },
    {
      "id": "dest-403",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Pangkajene Dan Kepulau",
      "district": "Liukang Tangaya",
      "postalCode": "90111"
    },
    {
      "id": "dest-404",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Bantaeng",
      "district": "Bissappu",
      "postalCode": "90111"
    },
    {
      "id": "dest-405",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Bone",
      "district": "Bontocani",
      "postalCode": "90111"
    },
    {
      "id": "dest-406",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Maros",
      "district": "Mandai",
      "postalCode": "90111"
    },
    {
      "id": "dest-407",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Sinjai",
      "district": "Sinjai Barat",
      "postalCode": "90111"
    },
    {
      "id": "dest-408",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Takalar",
      "district": "Mappakasunggu",
      "postalCode": "90111"
    },
    {
      "id": "dest-409",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Soppeng",
      "district": "Marioriwawo",
      "postalCode": "90111"
    },
    {
      "id": "dest-410",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Wajo",
      "district": "Sabangparu",
      "postalCode": "90111"
    },
    {
      "id": "dest-411",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Luwu Utara",
      "district": "Malangke",
      "postalCode": "90111"
    },
    {
      "id": "dest-412",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Barru",
      "district": "Tanete Riaja",
      "postalCode": "90111"
    },
    {
      "id": "dest-413",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Pinrang",
      "district": "Mattiro Sompe",
      "postalCode": "90111"
    },
    {
      "id": "dest-414",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Luwu Timur",
      "district": "Mangkutana",
      "postalCode": "90111"
    },
    {
      "id": "dest-415",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Luwu",
      "district": "Basse Sangtempe",
      "postalCode": "90111"
    },
    {
      "id": "dest-416",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Tana Toraja",
      "district": "Salupputti",
      "postalCode": "90111"
    },
    {
      "id": "dest-417",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Sidenreng Rappang",
      "district": "Panca Lautang",
      "postalCode": "90111"
    },
    {
      "id": "dest-418",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Enrekang",
      "district": "Maiwa",
      "postalCode": "90111"
    },
    {
      "id": "dest-419",
      "province": "Sulawesi Selatan",
      "city": "Kota Palopo",
      "district": "Wara",
      "postalCode": "90111"
    },
    {
      "id": "dest-420",
      "province": "Sulawesi Selatan",
      "city": "Kota Makassar",
      "district": "Mariso",
      "postalCode": "90111"
    },
    {
      "id": "dest-421",
      "province": "Sulawesi Selatan",
      "city": "Kota Parepare",
      "district": "Bacukiki",
      "postalCode": "90111"
    },
    {
      "id": "dest-422",
      "province": "Sulawesi Selatan",
      "city": "Kabupaten Toraja Utara",
      "district": "Rantepao",
      "postalCode": "90111"
    },
    {
      "id": "dest-423",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Buton Utara",
      "district": "Kulisusu",
      "postalCode": "93111"
    },
    {
      "id": "dest-424",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Buton",
      "district": "Pasarwajo",
      "postalCode": "93111"
    },
    {
      "id": "dest-425",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Konawe Utara",
      "district": "Asera",
      "postalCode": "93111"
    },
    {
      "id": "dest-426",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Konawe Selatan",
      "district": "Tinanggea",
      "postalCode": "93111"
    },
    {
      "id": "dest-427",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Kolaka Utara",
      "district": "Lasusua",
      "postalCode": "93111"
    },
    {
      "id": "dest-428",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Kolaka",
      "district": "Wundulako",
      "postalCode": "93111"
    },
    {
      "id": "dest-429",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Muna",
      "district": "Napabalano",
      "postalCode": "93111"
    },
    {
      "id": "dest-430",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Bombana",
      "district": "Poleang",
      "postalCode": "93111"
    },
    {
      "id": "dest-431",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Konawe",
      "district": "Lambuya",
      "postalCode": "93111"
    },
    {
      "id": "dest-432",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Wakatobi",
      "district": "Wangi-wangi",
      "postalCode": "93111"
    },
    {
      "id": "dest-433",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Muna Barat",
      "district": "Sawerigadi",
      "postalCode": "93111"
    },
    {
      "id": "dest-434",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Buton Selatan",
      "district": "Batauga",
      "postalCode": "93111"
    },
    {
      "id": "dest-435",
      "province": "Sulawesi Tenggara",
      "city": "Kota Kendari",
      "district": "Mandonga",
      "postalCode": "93111"
    },
    {
      "id": "dest-436",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Buton Tengah",
      "district": "Lakudo",
      "postalCode": "93111"
    },
    {
      "id": "dest-437",
      "province": "Sulawesi Tenggara",
      "city": "Kota Bau Bau",
      "district": "Betoambari",
      "postalCode": "93111"
    },
    {
      "id": "dest-438",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Konawe Kepulauan",
      "district": "Wawonii Barat",
      "postalCode": "93111"
    },
    {
      "id": "dest-439",
      "province": "Sulawesi Tenggara",
      "city": "Kabupaten Kolaka Timur",
      "district": "Tirawuta",
      "postalCode": "93111"
    },
    {
      "id": "dest-440",
      "province": "Gorontalo",
      "city": "Kota Gorontalo",
      "district": "Kota Barat",
      "postalCode": "96111"
    },
    {
      "id": "dest-441",
      "province": "Gorontalo",
      "city": "Kabupaten Pohuwato",
      "district": "Popayato",
      "postalCode": "96111"
    },
    {
      "id": "dest-442",
      "province": "Gorontalo",
      "city": "Kabupaten Gorontalo Utara",
      "district": "Atinggola",
      "postalCode": "96111"
    },
    {
      "id": "dest-443",
      "province": "Gorontalo",
      "city": "Kabupaten Boalemo",
      "district": "Paguyaman",
      "postalCode": "96111"
    },
    {
      "id": "dest-444",
      "province": "Gorontalo",
      "city": "Kabupaten Bone Bolango",
      "district": "Tapa",
      "postalCode": "96111"
    },
    {
      "id": "dest-445",
      "province": "Gorontalo",
      "city": "Kabupaten Gorontalo",
      "district": "Limboto",
      "postalCode": "96111"
    },
    {
      "id": "dest-446",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Mamuju Tengah",
      "district": "Tobadak",
      "postalCode": "91111"
    },
    {
      "id": "dest-447",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Polewali Mandar",
      "district": "Tinambung",
      "postalCode": "91111"
    },
    {
      "id": "dest-448",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Pasangkayu",
      "district": "Bambalamotu",
      "postalCode": "91111"
    },
    {
      "id": "dest-449",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Mamuju",
      "district": "Mamuju",
      "postalCode": "91111"
    },
    {
      "id": "dest-450",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Mamasa",
      "district": "Mambi",
      "postalCode": "91111"
    },
    {
      "id": "dest-451",
      "province": "Sulawesi Barat",
      "city": "Kabupaten Majene",
      "district": "Banggae",
      "postalCode": "91111"
    },
    {
      "id": "dest-452",
      "province": "Maluku",
      "city": "Kabupaten Maluku Tenggara",
      "district": "Kei Kecil",
      "postalCode": "97111"
    },
    {
      "id": "dest-453",
      "province": "Maluku",
      "city": "Kabupaten Kepulauan Aru",
      "district": "Pulau-pulau Aru",
      "postalCode": "97111"
    },
    {
      "id": "dest-454",
      "province": "Maluku",
      "city": "Kabupaten Kepulauan Tanimbar",
      "district": "Tanimbar Selatan",
      "postalCode": "97111"
    },
    {
      "id": "dest-455",
      "province": "Maluku",
      "city": "Kabupaten Seram Bagian Timur",
      "district": "Bula",
      "postalCode": "97111"
    },
    {
      "id": "dest-456",
      "province": "Maluku",
      "city": "Kabupaten Maluku Tengah",
      "district": "Amahai",
      "postalCode": "97111"
    },
    {
      "id": "dest-457",
      "province": "Maluku",
      "city": "Kabupaten Maluku Barat Daya",
      "district": "Moa",
      "postalCode": "97111"
    },
    {
      "id": "dest-458",
      "province": "Maluku",
      "city": "Kabupaten Buru",
      "district": "Namlea",
      "postalCode": "97111"
    },
    {
      "id": "dest-459",
      "province": "Maluku",
      "city": "Kabupaten Seram Bagian Barat",
      "district": "Kairatu",
      "postalCode": "97111"
    },
    {
      "id": "dest-460",
      "province": "Maluku",
      "city": "Kabupaten Buru Selatan",
      "district": "Namrole",
      "postalCode": "97111"
    },
    {
      "id": "dest-461",
      "province": "Maluku",
      "city": "Kota Ambon",
      "district": "Nusaniwe",
      "postalCode": "97111"
    },
    {
      "id": "dest-462",
      "province": "Maluku",
      "city": "Kota Tual",
      "district": "Pulau Dullah Utara",
      "postalCode": "97111"
    },
    {
      "id": "dest-463",
      "province": "Maluku Utara",
      "city": "Kota Ternate",
      "district": "Pulau Ternate",
      "postalCode": "97111"
    },
    {
      "id": "dest-464",
      "province": "Maluku Utara",
      "city": "Kabupaten Halmahera Timur",
      "district": "Wasile",
      "postalCode": "97111"
    },
    {
      "id": "dest-465",
      "province": "Maluku Utara",
      "city": "Kabupaten Halmahera Barat",
      "district": "Jailolo",
      "postalCode": "97111"
    },
    {
      "id": "dest-466",
      "province": "Maluku Utara",
      "city": "Kabupaten Halmahera Selatan",
      "district": "Pulau Makian",
      "postalCode": "97111"
    },
    {
      "id": "dest-467",
      "province": "Maluku Utara",
      "city": "Kabupaten Halmahera Tengah",
      "district": "Weda",
      "postalCode": "97111"
    },
    {
      "id": "dest-468",
      "province": "Maluku Utara",
      "city": "Kabupaten Pulau Taliabu",
      "district": "Taliabu Barat",
      "postalCode": "97111"
    },
    {
      "id": "dest-469",
      "province": "Maluku Utara",
      "city": "Kota Tidore Kepulauan",
      "district": "Tidore",
      "postalCode": "97111"
    },
    {
      "id": "dest-470",
      "province": "Maluku Utara",
      "city": "Kabupaten Pulau Morotai",
      "district": "Morotai Selatan",
      "postalCode": "97111"
    },
    {
      "id": "dest-471",
      "province": "Maluku Utara",
      "city": "Kabupaten Halmahera Utara",
      "district": "Galela",
      "postalCode": "97111"
    },
    {
      "id": "dest-472",
      "province": "Maluku Utara",
      "city": "Kabupaten Kepulauan Sula",
      "district": "Mangoli Timur",
      "postalCode": "97111"
    },
    {
      "id": "dest-473",
      "province": "Papua Barat",
      "city": "Kabupaten Keerom",
      "district": "Waris",
      "postalCode": "98111"
    },
    {
      "id": "dest-474",
      "province": "Papua Barat",
      "city": "Kabupaten Biak Numfor",
      "district": "Biak Kota",
      "postalCode": "98111"
    },
    {
      "id": "dest-475",
      "province": "Papua Barat",
      "city": "Kabupaten Kepulauan Yapen",
      "district": "Yapen Selatan",
      "postalCode": "98111"
    },
    {
      "id": "dest-476",
      "province": "Papua Barat",
      "city": "Kabupaten Jayapura",
      "district": "Sentani",
      "postalCode": "98111"
    },
    {
      "id": "dest-477",
      "province": "Papua Barat",
      "city": "Kota Jayapura",
      "district": "Jayapura Utara",
      "postalCode": "98111"
    },
    {
      "id": "dest-478",
      "province": "Papua Barat",
      "city": "Kabupaten Waropen",
      "district": "Waropen Bawah",
      "postalCode": "98111"
    },
    {
      "id": "dest-479",
      "province": "Papua Barat",
      "city": "Kabupaten Sarmi",
      "district": "Sarmi",
      "postalCode": "98111"
    },
    {
      "id": "dest-480",
      "province": "Papua Barat",
      "city": "Kabupaten Supiori",
      "district": "Supiori Selatan",
      "postalCode": "98111"
    },
    {
      "id": "dest-481",
      "province": "Papua Barat",
      "city": "Kabupaten Mamberamo Raya",
      "district": "Mamberamo Tengah",
      "postalCode": "98111"
    },
    {
      "id": "dest-482",
      "province": "Papua",
      "city": "Kabupaten Deiyai",
      "district": "Tigi",
      "postalCode": "99111"
    },
    {
      "id": "dest-483",
      "province": "Papua",
      "city": "Kabupaten Puncak",
      "district": "Ilaga",
      "postalCode": "99111"
    },
    {
      "id": "dest-484",
      "province": "Papua",
      "city": "Kabupaten Paniai",
      "district": "Paniai Timur",
      "postalCode": "99111"
    },
    {
      "id": "dest-485",
      "province": "Papua",
      "city": "Kabupaten Mimika",
      "district": "Mimika Baru",
      "postalCode": "99111"
    },
    {
      "id": "dest-486",
      "province": "Papua",
      "city": "Kabupaten Dogiyai",
      "district": "Kamu",
      "postalCode": "99111"
    },
    {
      "id": "dest-487",
      "province": "Papua",
      "city": "Kabupaten Puncak Jaya",
      "district": "Mulia",
      "postalCode": "99111"
    },
    {
      "id": "dest-488",
      "province": "Papua",
      "city": "Kabupaten Nabire",
      "district": "Nabire",
      "postalCode": "99111"
    },
    {
      "id": "dest-489",
      "province": "Papua",
      "city": "Kabupaten Intan Jaya",
      "district": "Sugapa",
      "postalCode": "99111"
    },
    {
      "id": "dest-490",
      "province": "Papua Barat Daya",
      "city": "Kota Sorong",
      "district": "Sorong Barat",
      "postalCode": "98411"
    },
    {
      "id": "dest-491",
      "province": "Papua Barat Daya",
      "city": "Kabupaten Sorong",
      "district": "Aimas",
      "postalCode": "98415"
    },
    {
      "id": "dest-492",
      "province": "Papua Barat Daya",
      "city": "Kabupaten Sorong Selatan",
      "district": "Teminabuan",
      "postalCode": "98454"
    },
    {
      "id": "dest-493",
      "province": "Papua Barat Daya",
      "city": "Kabupaten Raja Ampat",
      "district": "Kota Waisai",
      "postalCode": "98481"
    },
    {
      "id": "dest-494",
      "province": "Papua Barat Daya",
      "city": "Kabupaten Tambrauw",
      "district": "Fef",
      "postalCode": "98471"
    },
    {
      "id": "dest-495",
      "province": "Papua Barat Daya",
      "city": "Kabupaten Maybrat",
      "district": "Kumurkek",
      "postalCode": "98461"
    },
    {
      "id": "dest-496",
      "province": "Papua Selatan",
      "city": "Kabupaten Merauke",
      "district": "Merauke",
      "postalCode": "99611"
    },
    {
      "id": "dest-497",
      "province": "Papua Selatan",
      "city": "Kabupaten Boven Digoel",
      "district": "Mandobo",
      "postalCode": "99651"
    },
    {
      "id": "dest-498",
      "province": "Papua Selatan",
      "city": "Kabupaten Mappi",
      "district": "Obaa",
      "postalCode": "99671"
    },
    {
      "id": "dest-499",
      "province": "Papua Selatan",
      "city": "Kabupaten Asmat",
      "district": "Agats",
      "postalCode": "99771"
    },
    {
      "id": "dest-500",
      "province": "Papua Tengah",
      "city": "Kabupaten Mimika",
      "district": "Mimika Baru",
      "postalCode": "99910"
    },
    {
      "id": "dest-501",
      "province": "Papua Tengah",
      "city": "Kabupaten Nabire",
      "district": "Nabire",
      "postalCode": "98811"
    },
    {
      "id": "dest-502",
      "province": "Papua Tengah",
      "city": "Kabupaten Paniai",
      "district": "Paniai Timur",
      "postalCode": "98711"
    },
    {
      "id": "dest-503",
      "province": "Papua Tengah",
      "city": "Kabupaten Dogiyai",
      "district": "Kamu",
      "postalCode": "98714"
    },
    {
      "id": "dest-504",
      "province": "Papua Tengah",
      "city": "Kabupaten Deiyai",
      "district": "Tigi",
      "postalCode": "98712"
    },
    {
      "id": "dest-505",
      "province": "Papua Tengah",
      "city": "Kabupaten Intan Jaya",
      "district": "Sugapa",
      "postalCode": "98715"
    },
    {
      "id": "dest-506",
      "province": "Papua Tengah",
      "city": "Kabupaten Puncak",
      "district": "Ilaga",
      "postalCode": "98911"
    },
    {
      "id": "dest-507",
      "province": "Papua Tengah",
      "city": "Kabupaten Puncak Jaya",
      "district": "Mulia",
      "postalCode": "98915"
    },
    {
      "id": "dest-508",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Jayawijaya",
      "district": "Wamena",
      "postalCode": "99511"
    },
    {
      "id": "dest-509",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Lanny Jaya",
      "district": "Tiom",
      "postalCode": "99561"
    },
    {
      "id": "dest-510",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Mamberamo Tengah",
      "district": "Kobakma",
      "postalCode": "99551"
    },
    {
      "id": "dest-511",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Nduga",
      "district": "Kenyam",
      "postalCode": "99581"
    },
    {
      "id": "dest-512",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Tolikara",
      "district": "Karubaga",
      "postalCode": "99565"
    },
    {
      "id": "dest-513",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Yahukimo",
      "district": "Dekai",
      "postalCode": "99571"
    },
    {
      "id": "dest-514",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Yalimo",
      "district": "Elelim",
      "postalCode": "99585"
    },
    {
      "id": "dest-515",
      "province": "Papua Pegunungan",
      "city": "Kabupaten Pegunungan Bintang",
      "district": "Oksibil",
      "postalCode": "99591"
    }
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
