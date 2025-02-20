const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]
const { useState } = React;

function TShirtItem({ tshirt }) {
  const [availableStock, setAvailableStock] = useState(tshirt.stock);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const purchaseItem = () => {
    if (availableStock >= selectedQuantity) {
      setAvailableStock(availableStock - selectedQuantity);
    }
  };

  return (
    <div className="tshirt-card">
      <h3>{tshirt.title}</h3>
      <img src={tshirt.image} alt={tshirt.title} className="tshirt-image" />
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      <p className={availableStock > 0 ? "stock-available" : "stock-out"}>
  {availableStock > 0 ? `Stock: ${availableStock}` : "Out of Stock"}
</p>

      {availableStock > 0 && (
        <>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
          >
            {Array.from({ length: availableStock }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button onClick={purchaseItem}>Buy</button>
        </>
      )}
    </div>
  );
}

function TShirtGallery({ tshirts }) {
  return (
    <div className="product-grid">
      {tshirts.map((tshirt) => (
        <TShirtItem key={tshirt.title} tshirt={tshirt} />
      ))}
    </div>
  );
}

ReactDOM.render(<TShirtGallery tshirts={tshirts} />, document.getElementById('root'));