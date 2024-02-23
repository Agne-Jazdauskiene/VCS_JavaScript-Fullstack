console.log(data.products);

// let html = '';
// for(let i =; i<data.products.length; i++){
//  html += data.products[i].title;
// }

// document.querySelector('body').innerHTML = html;

// bet paprasciau galime padaryti su map metodu
const calculateWidth = (rating, width, max) => {
  return (rating * width) / max;
};
const result = data.products.map((value) => {
  const discountPrice = (
    value.price -
    (value.price / 100) * value.discountPercentage
  ).toFixed(2);

  // returno ir riestiniu skl nereikia, nes turime viena eilute ir grazinimo nereikia

  return `<div class="row">
              <div class="col-auto image">
              <img src="${value.thumbnail}">
              </div>

            <div class="col info">
              <h3>${value.title}</h3>

              <div class="rating">
                <div class="gray-stars">
                  ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                </div>

                <div class="yellow-stars" style="width: ${calculateWidth(
                  value.rating,
                  80,
                  5
                )}px">
                  <div class="stars-container">
                    ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                  </div>
                </div>
              </div>

            <div class="description pt-5">${value.description}</div>
          </div>
          <div class="col-auto checkout">
              <div class="price mb-3">
              ${
                value.discountPercentage === 0
                  ? `   
                  <span class="original-price">&dollar;${value.price}</span>`
                  : `<span class="discount-price">&dollar;${discountPrice}</span>
                  <span class="regular-price">&dollar;${value.price}</span>
      `
              }
              </div> 
          <button class="btn btn-warning" onclick="goToCart(${
            value.id
          })" >Add to Cart</button>
          </div>
</div>`;
}); // value yra objektas
// console.log(result);
document.querySelector(".products").innerHTML = result.join("");

const cart = [];

const goToCart = (id) => {
  // console.log(id);
  const product = data.products.find((value) => value.id === id);
  const existingIndex = cart.findIndex((value) => value.id === id);

  const price = (
    product.price -
    (product.price / 100) * product.discountPercentage
  ).toFixed(2);

  if (existingIndex >= 0) {
    // Jeigu cart masyve jau yra tokia preke, tuomet prie qty pliusuojam +1
    //cart masyve susirasti reikiama elementa
    //modifikuoti to elemento qty reiksme
    // console.log(existingIndex);
    (cart[existingIndex].qty++
  } else {
    // ppriesingu atveju, sukuriame nauja elementa
    cart.push({
      id: products.id,
      title: products.title,
      thumbnail: product.thumbnail,
      description: product.description,
      price: +price,
      qty: 1,
    });
  }
  // console.log(product);
  // cart.push(product);
  // console.log(cart);


  cart.map(value => `
<div> class="row">
    <div class="col-auto">
        <img src="${value.thumbnail}">
   </div>
   <div class="qty">
     <input type="number" value="${value.qty}">
   </div>
   <div class="col price">
      &dollar;${value.price}
      </div>
      </div>

  `);

  
  // Krepselio atvaizdavimas
  document.querySelector('.products').computedStyleMap.display='none';
  document.querySelector('.cart').computedStyleMap.display='block';
};

console.log(cart);


// const cartProducts = [];

// const addToCart = (id) => {
//   // e.prevent.Default
//   const product = data.products.find((el) => el.id === id);
//   const cartIndex = cartProducts.findIndex((el) => el.id === id);

//   if (cartIndex > -1) {
//     //atnaujinimas
//     cartProducts[cartIndex].qty++;
//   } else {
//     //pridejimas
//     cartProducts.push({
//       id: product.id,
//       title: product.title,
//       thumbnail: product.thumbnail,
//       price: product.price,
//       discountPercentage: product.discountPercentage,
//       qty: 1,
//     });
//   }
//   console.log(cartProducts);

//   document.querySelector(".result").style.display = `none`;
//   document.querySelector(".cart").style.display = `block`;
// };

// const object = data.products.find((el) => el.id === id);
// atnaujina , po to prideda
