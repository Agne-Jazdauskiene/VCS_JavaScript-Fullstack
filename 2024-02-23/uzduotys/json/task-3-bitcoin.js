// const remapData = (data) => {
//   const bpi = data.bpi;
// };

// fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//   .then((response) => response.json()) //Turinio konvertavimo eilutė

//   .then((data) => remapData(data));

// .then((response) => {
//   document.querySelector(".usd").innerHTML = `${atsakymas.time}`;
//   console.log(time);
// }); //Grąžinamas atsakymas

const bitToEur = () => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then(
      (data) =>
        (document.querySelector(
          ".bitToEur"
        )
        
        .innerHTML = `1bitcoin = ${data.bpi.EUR.rate} Eur`).innerHTML = `1bitcoin = ${data.bpi.USD.rate} Eur`)
    );
   
};


