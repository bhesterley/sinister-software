// Conversion functions for Length
const gramsToPackets = (grams) => grams / 8;
const gramsToGallons = (grams) => grams / 3784;
const gramsToBathtubs = (grams) => grams / 302720;

const packetsToGrams = (packets) => packets * 8;
const packetsToGallons = (packets) => packets / 473;
const packetsToBathtubs = (packets) => packets / 37840;

const gallonsToGrams = (gallons) => gallons * 3784;
const gallonsToPackets = (gallons) => gallons * 43;
const gallonsToBathtubs = (gallons) => gallons / 80;

const bathtubsToGrams = (bathtubs) => bathtubs * 302720;
const bathtubsToPackets = (bathtubs) => bathtubs * 37840;
const bathtubsToGallons = (bathtubs) => bathtubs * 80;

const conversions = {
  sauce: {
    Grams: {
      Packets: gramsToPackets,
      Gallons: gramsToGallons,
      Bathtubs: gramsToBathtubs
    },
    Packets: {
      Grams: packetsToGrams,
      Gallons: packetsToGallons,
      Bathtubs: packetsToBathtubs
    },
    Gallons: {
      Grams: gallonsToGrams,
      Packets: gallonsToPackets,
      Bathtubs: gallonsToBathtubs
    },
    Bathtubs: {
      Grams: bathtubsToGrams,
      Packets: bathtubsToPackets,
      Gallons: bathtubsToGallons
    }
  },
};

function convert() {
  const category = "sauce";
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;
  const value = Number(document.getElementById("from-value").value);

  let result;

  if (category in conversions && fromUnit === toUnit) {
    result = value;
  } else {
    const conversionFunction = conversions[category][fromUnit][toUnit];
    result = conversionFunction(value);
  }

  document.getElementById("to-value").value = result;
}

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convert();
  }
});

document.getElementById("from-unit").addEventListener("change", (e) => {
  convert();
});

document.getElementById("to-unit").addEventListener("change", (e) => {
  convert();
});

updateConversionUnits("sauce");

function updateConversionUnits(category) {
  const fromUnitSelect = document.getElementById("from-unit");
  const toUnitSelect = document.getElementById("to-unit");

  if (category === "start") {
    fromUnitSelect.innerHTML = "";
    toUnitSelect.innerHTML = "";
    document.getElementById("from-value").value = "";
    document.getElementById("to-value").value = "";
    return;
  }

  const units = Object.keys(conversions['sauce']);

  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";

  units.forEach((unit) => {
    fromUnitSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnitSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
  });

  //document.getElementById("from-value").value = "";
  //document.getElementById("to-value").value = "";

  // Set default unit selections
  fromUnitSelect.value = units[0];
  toUnitSelect.value = units[1];
}

