// Variables

const
  currencyEl_one = document.getElementById('currency-one'),
  currencyEl_two = document.getElementById('currency-two'),
  ammountEl_one = document.getElementById('ammount-one'),
  ammountEl_two = document.getElementById('ammount-two'),
  rateEl = document.getElementById('rate'),
  swap = document.getElementById('swap');

// Functions

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json()).then(data => {
    const rate = data.rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(2)} ${currency_two}`;
    ammountEl_two.value = (ammountEl_one.value * rate).toFixed(2);
  });

}

calculate();

// Event Elements
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
ammountEl_one.addEventListener('input', calculate);
ammountEl_one.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});
