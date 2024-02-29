// const discountprice = (price - (price / 100 * discountPercentage)).toFixed(2);

const Price = (value) => {
  // console.log(value);
  return (
    <>
      <div className="price">${value.price}</div>
    </>
  );
};

export default Price;
