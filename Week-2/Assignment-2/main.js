// TC:O(n)
function avg(data) {
  let sum = 0;
  data.products.forEach(product => (sum += product.price));
  let avg = sum / data.size;
  return avg.toFixed(2);
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: 'Product 1',
        price: 100,
      },
      {
        name: 'Product 2',
        price: 700,
      },
      {
        name: 'Product 3',
        price: 250,
      },
    ],
  })
);
