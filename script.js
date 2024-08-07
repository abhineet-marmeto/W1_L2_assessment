// const products = Array.from({ length: 15 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   image: 'https://via.placeholder.com/200',
//   price: (Math.random() * 200).toFixed(2)
// }));

const products = [
  {
    "id": 1,
    "name": "Apple iPhone 12",
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-og-202010?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1602272657000",
    "price": 199.99
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S21",
    "image": "https://images.samsung.com/is/image/samsung/assets/pk/2201/preorder/1_image_carousel/2_group_kv2/S21FE_Carousel_GroupKV2_MO.jpg?imbypass=true",
    "price": 180.00
  },
  {
    "id": 3,
    "name": "Sony WH-1000XM4",
    "image": "https://cdn.mos.cms.futurecdn.net/DNqMs9h6vGZq6Bxvztu5kJ.jpg",
    "price": 150.00
  },
  {
    "id": 4,
    "name": "Dell XPS 13",
    "image": "https://cdn.arstechnica.net/wp-content/uploads/2020/09/XPS13_7390_Touch_Top-640x427.jpg",
    "price": 200.00
  },
  {
    "id": 5,
    "name": "Apple MacBook Pro",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-silver-select-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604278672000",
    "price": 200.00
  },
  {
    "id": 6,
    "name": "Google Pixel 6",
    "image": "https://store.google.com/gb/product/images/2021_pixel_6_carousel/p6_blurple_carousel_desktop_1440px.jpg",
    "price": 190.00
  },
  {
    "id": 7,
    "name": "Apple AirPods Pro",
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634795000",
    "price": 180.00
  },
  {
    "id": 8,
    "name": "Samsung Galaxy Buds Pro",
    "image": "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-buds-pro-sm-r190nzkabtu-366110-sm-r190nzkabtu-frontphantomblack-398582903?$720_576_PNG$",
    "price": 160.00
  },
  {
    "id": 9,
    "name": "Sony PlayStation 5",
    "image": "https://media.direct.playstation.com/is/image/sierialto/PS5-dualsense-edge-gallery-image-04?$1600px$",
    "price": 200.00
  },
  {
    "id": 10,
    "name": "Microsoft Xbox Series X",
    "image": "https://compass-ssl.xbox.com/assets/0b/bb/0bbb3651-8cc1-49fa-94a6-b582a4c84f0f.jpg?n=GPR-00001_Center-Feature_1204x677.jpg",
    "price": 200.00
  },
  {
    "id": 11,
    "name": "Nintendo Switch",
    "image": "https://assets.nintendo.com/image/upload/ar_16:9,f_auto,q_auto,w_960/ncom/en_US/switch/site-design-update/homepage/hero/960_hero_v2",
    "price": 180.00
  },
  {
    "id": 12,
    "name": "Amazon Echo Dot",
    "image": "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX522_.jpg",
    "price": 50.00
  },
  {
    "id": 13,
    "name": "Fitbit Charge 4",
    "image": "https://static.techspot.com/images2/news/bigimage/2020/03/2020-03-31-image-2.jpg",
    "price": 150.00
  },
  {
    "id": 14,
    "name": "GoPro HERO9 Black",
    "image": "https://gopro.com/content/dam/gopro/shared/brand/hero9-black/marquee/hero9_black_rear_main.jpg",
    "price": 200.00
  },
  {
    "id": 15,
    "name": "DJI Mavic Air 2",
    "image": "https://dji-official-fe.djicdn.com/cms/uploads/40b6cbb395f44dd0b53232baf35dd3da@origin.png",
    "price": 200.00
  }
]

let cart = [];

// Add products to the product list
const productList = document.getElementById('product-list');
products.forEach(product => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
          <span>${product.name}</span>
          <span>$${product.price}</span>
      </div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productItem);
});

// Add to Cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  let existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Increase Quantity
function increaseQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity += 1;
  }
  updateCart();
}

// Decrease Quantity
function decreaseQuantity(productId) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity = Math.max(1, product.quantity - 1);
  }
  updateCart();
}

// Get Total Price
function getTotalPrice() {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
}

// Get Average Price
function getAveragePrice() {
  let totalPrice = getTotalPrice();
  let numberOfProducts = cart.length;
  return numberOfProducts ? (totalPrice / numberOfProducts).toFixed(2) : 0;
}

// Update Cart
function updateCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <div style="display: flex; width: 100%;">
          <img src="${item.image}" alt="${item.name}">
          <div style="display: flex; flex-direction: column; justify-content: space-between; width: 70%;">
            <div style="display: flex; justify-content: space-between;">
              <span>${item.name}</span>
              <span>$${item.price}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Quantity: ${item.quantity}</span>
              <span>Total: $${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div class="product-quantity">
          <button onclick="decreaseQuantity(${item.id})">-</button>
          <span> ${item.quantity} </span>
          <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
        <button onclick="removeFromCart(${item.id})" style="width: 100%;">Remove</button>
      `;
    cartList.appendChild(cartItem);
  });
  document.getElementById('total-price').textContent = getTotalPrice();
  document.getElementById('average-price').textContent = getAveragePrice();
}

// Clear Cart
document.getElementById('clear-cart').addEventListener('click', () => {
  cart = [];
  updateCart();
  alert('Your cart is empty');
});

// Sort Cart
document.getElementById('sort-select').addEventListener('change', (e) => {
  const sortOrder = e.target.value;
  cart.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  updateCart();
});

// Filter Cart
document.getElementById('filter-select').addEventListener('change', (e) => {
  const filterValue = e.target.value;
  let [minPrice, maxPrice] = filterValue.split('-').map(Number);
  if (filterValue === 'all') {
    updateCart();
  } else {
    const filteredCart = cart.filter(item => item.price >= minPrice && item.price <= maxPrice);
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    filteredCart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <div style="display: flex; width: 100%;">
            <img src="${item.image}" alt="${item.name}">
            <div style="display: flex; flex-direction: column; justify-content: space-between; width: 70%;">
              <div style="display: flex; justify-content: space-between;">
                <span>${item.name}</span>
                <span>$${item.price}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Quantity: ${item.quantity}</span>
                <span>Total: $${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div class="product-quantity">
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <span> ${item.quantity} </span>
            <button onclick="increaseQuantity(${item.id})">+</button>
          </div>
          <button onclick="removeFromCart(${item.id})" style="width: 100%;">Remove</button>
        `;
      cartList.appendChild(cartItem);
    });
  }
});

// Toggle Cart Sidebar
const cartSidebar = document.getElementById('cart-sidebar');
const openCartButton = document.getElementById('open-cart');
const closeCartButton = document.getElementById('close-cart');

openCartButton.addEventListener('click', () => {
  cartSidebar.style.right = '0';
  openCartButton.style.display = 'none';
  closeCartButton.style.display = 'block';
});

let screenWidth = window.screenWidth;
closeCartButton.addEventListener('click', () => {
  if (screenWidth < 1020) {
    cartSidebar.style.right = '-50%';

  } else {
    cartSidebar.style.right = '-100%';

  }
  openCartButton.style.display = 'block';
  closeCartButton.style.display = 'none';
});

// Checkout button functionality
document.getElementById('checkout').addEventListener('click', () => {
  alert('Proceeding to checkout...');
});
