const payload = {
  province: "DKI Jakarta",
  city: "Jakarta Selatan",
  district: "Kebayoran Baru",
  postalCode: "12110",
  items: [{ quantity: 1, name: "SOE Bag" }]
};

fetch('http://localhost:4323/api/shipping/rates', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  console.log("API Response:");
  console.log(JSON.stringify(data, null, 2));
  process.exit(0);
})
.catch(err => {
  console.error("API Error:", err);
  process.exit(1);
});
