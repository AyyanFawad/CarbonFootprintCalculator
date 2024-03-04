import React ,{ useState } from 'react';
import "./shopping.css"
import coinsIcon from './assets/coin.svg';
function Sidebar({ onNavigate,cartItems }) {
    const handleClick = (page) => {
      onNavigate(page);
    };
  
    return (
      <div className="sidebar">
        <button onClick={() => handleClick('gallery')} className="nav-button">Shop</button>
        <button onClick={() => handleClick('cart')} className="nav-button">Cart ({cartItems.length})</button>
        <button onClick={() => handleClick('codes')} className="nav-button">Purchases</button>
      </div>
    );
  }
  
  function ImageGallery({ images, onAddToCart, cartItems }) {
    const handleClick = (image) => {
      const itemInCart = cartItems.find(item => item.name === image.name);
      if (itemInCart) {
        const updatedCartItems = cartItems.map(item => {
          if (item.name === image.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        onAddToCart(updatedCartItems);
      } else {
        onAddToCart([...cartItems, { ...image, quantity: 1 }]);
      }
    };
  
    return (
      <div>
        <h2>Shop</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className={`image-card ${cartItems.find(item => item.name === image.name) ? 'in-cart' : ''}`} onClick={() => handleClick(image)}>
              <img src={image.url} alt={image.alt} className="medium-icon" />
              <p>{image.name}</p>
              <p>Price: {image.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

  function Cart({ cartItems, onUpdateQuantity, totalAmount, Coins, onCheckout}) {
    const [coins, setCoins] = useState(100); // Initial coins value
  
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    const handleIncreaseQuantity = (item) => {
      onUpdateQuantity(item, item.quantity + 1);
    };
  
    const handleDecreaseQuantity = (item) => {
      onUpdateQuantity(item, Math.max(0, item.quantity - 1));
    };
  
    // const handleCheckout = () => {
    //   const remainingCoins = Math.max(0, coins - totalAmount);
    //   setCoins(remainingCoins);
    // };
  
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
                <img src={item.url} alt={item.name} className="cart-item-image" />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{item.price}</div>
            <div className="cart-item-quantity">{item.quantity}</div>
            <div className="cart-item-total">{item.price * item.quantity}</div>
              <div className="cart-item-actions">
                <button className="cart-button" onClick={() => handleDecreaseQuantity(item)}>-</button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button className="cart-button" onClick={() => handleIncreaseQuantity(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">Total: {getTotalPrice().toFixed(2)}</div>
        <div className="cart-coins">Coins: {Coins}</div>
        {/* <button className="cart-button" onClick={onCheckout}>Checkout</button> */}
        <button className="checkout-button" onClick={onCheckout} disabled={totalAmount > coins}>Checkout</button>
      </div>
    );
  }

  function CheckedOutPage({ checkedOut, onRedeem, onReturn }) {
    return (
      <div>
        <h2>Checked Out Items</h2>
        <div className="checked-out-container">
          {checkedOut.map((subArray, index) => (
            <div key={index} className="checked-out-box">
              {subArray.map((item, itemIndex) => (
                <div key={itemIndex} className="checked-out-item">
                  <img src={item.url} alt={item.name} className="checked-out-item-image" />
                  <div className="checked-out-item-details">
                    <div className="checked-out-item-name">{item.name}</div>
                    <div className="checked-out-item-price">Price: {item.price}</div>
                    <div className="checked-out-item-quantity">Quantity: {item.quantity}</div>
                  </div>
                </div>
              ))}
              <div className="button-container">
                <button onClick={() => onRedeem(index)} className="redeem-button">Redeem</button>
                <button onClick={() => onReturn(index)} className="return-button">Return</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
// Example usage:

const images = [
  { url: require('./assets/tea.jpg'), alt: 'Image 1', price: 10, name: "tea" },
  { url: require('./assets/tea.jpg'), alt: 'Image 2', price: 15, name: "coffee" },
  { url: require('./assets/tea.jpg'), alt: 'Image 3', price: 20, name: "green tea" },
  { url: require('./assets/earphones.jpg'), alt: 'Image 4', price: 50, name: "earphones" },
];

function GalleryPage() {
    const [page, setPage] = useState('gallery');
    const [cartItems, setCartItems] = useState([]);
    const [coins, setCoins] = useState(100); // Initial coins value
    const [totalAmount,setTotalAmount] = useState(0);
    const [checkedOut, setCheckedOut] = useState([]);


    const handleNavigate = (page) => {
    setPage(page);
    };

    const handleAddToCart = (updatedItems) => {
    setCartItems(updatedItems);
    setTotalAmount(getTotalPrice(updatedItems));
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      const updatedItems = cartItems.filter((cartItem) => cartItem !== item);
      setCartItems(updatedItems);
      setTotalAmount(getTotalPrice(updatedItems));
    } else {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem === item) {
          return { ...cartItem, quantity: newQuantity };
        }
        setTotalAmount(getTotalPrice(cartItem));
        return cartItem;
      });
      setCartItems(updatedItems);
      setTotalAmount(getTotalPrice(updatedItems));
    }
  };

  const handleCheckout = () => {
    const remainingCoins = Math.max(0, coins - totalAmount);
    setCoins(remainingCoins);
    setTotalAmount(0);
    setCheckedOut([...checkedOut, cartItems]);
    setCartItems([]) // Reset total amount after checkout
  };

  const getTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRedeem = (index) => {
    const newCheckedOut = [...checkedOut];
    newCheckedOut.splice(index, 1);
    setCheckedOut(newCheckedOut);
  };

  const handleReturn = (index) => {
    const returnedCoins = checkedOut[index].reduce((total, item) => total + item.price * item.quantity, 0);
    setCoins(coins + returnedCoins);
    const newCheckedOut = [...checkedOut];
    newCheckedOut.splice(index, 1);
    setCheckedOut(newCheckedOut);
  };

  
    return (
      <div className="shopping">
        <Sidebar onNavigate={handleNavigate} cartItems={cartItems} on />
        <div className="main-content">
          {page === 'gallery' && <ImageGallery images={images} onAddToCart={handleAddToCart} cartItems={cartItems} />}
          {page === 'cart' && <Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} totalAmount={totalAmount} Coins={coins} onCheckout={handleCheckout} />}
          {page === 'codes' && <CheckedOutPage checkedOut={checkedOut} onRedeem={handleRedeem} onReturn={handleReturn}/>}
        </div>
        <div className="coins-container">
        <img src={coinsIcon} alt="Coins Icon" className="coins-icon" />
        <p>{coins} Coins</p>
      </div>
    </div>
  );

  }

export default GalleryPage;
