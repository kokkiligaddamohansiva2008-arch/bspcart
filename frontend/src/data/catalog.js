/*
|--------------------------------------------------------------------------
| BSP CART — Shared Mock Catalog
|--------------------------------------------------------------------------
|
| Single source of truth for product data used by Home, Products, and
| ProductDetails so IDs, prices, and images line up across pages.
|
| Swap this file for real productService.getAllProducts() calls once the
| Spring Boot backend is wired in — every consumer just needs an array of
| objects shaped like PRODUCTS below.
|
*/

export const CATEGORIES = [
  { id: "all", label: "All Stalls" },
  { id: "grocery", label: "Grocery" },
  { id: "electronics", label: "Electronics" },
  { id: "fashion", label: "Fashion" },
  { id: "home", label: "Home & Kitchen" },
];

// picsum.photos/seed/<name> returns a random unrelated stock photo for
// every seed — it has no idea what "bsp-rice" means, so the picture never
// actually matched the product name it labeled. Each product below points
// at a specific, real photo of that product category instead.
const PRODUCT_PHOTOS = {
  rice: "https://images.unsplash.com/photo-1723475158232-819e29803f4d",
  groundnutOil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
  earbuds: "https://images.unsplash.com/photo-1525825691042-e14d9042fc70",
  charger: "https://images.unsplash.com/photo-1544894485-42c6e60e37a0",
  saree: "https://images.unsplash.com/photo-1679849922748-f59ba2e10c10",
  kurta: "https://images.unsplash.com/photo-1758913340758-88d5719d37f3",
  tawa: "https://images.unsplash.com/photo-1581622558638-818128465982",
  bottle: "https://images.unsplash.com/photo-1544003484-3cd181d17917",
};

const img = (url) => `${url}?w=600&h=450&fit=crop&auto=format&q=80`;

export const PRODUCTS = [
  {
    id: 1,
    name: "Basmati Rice 5kg",
    category: "grocery",
    price: 420,
    mrp: 480,
    stock: 18,
    seller: "Sri Lakshmi Traders",
    rating: 4.3,
    ratingCount: 214,
    bestseller: true,
    image: img(PRODUCT_PHOTOS.rice),
    images: [img(PRODUCT_PHOTOS.rice)],
    description:
      "Premium long-grain basmati rice, aged for extra aroma. Sourced directly from Godavari-belt farms and packed for freshness.",
    highlights: ["Aged basmati, extra-long grain", "5kg resealable pack", "No polish, low starch"],
    priceHistory: [460, 455, 450, 440, 430, 425, 420],
  },
  {
    id: 2,
    name: "Cold-Pressed Groundnut Oil 1L",
    category: "grocery",
    price: 260,
    mrp: 300,
    stock: 32,
    seller: "Godavari Oils",
    rating: 4.5,
    ratingCount: 189,
    image: img(PRODUCT_PHOTOS.groundnutOil),
    images: [img(PRODUCT_PHOTOS.groundnutOil)],
    description:
      "Traditional wood-pressed groundnut oil with no chemical refining, retaining natural nutrients and aroma.",
    highlights: ["Wood cold-pressed", "No preservatives", "Glass-safe recyclable bottle"],
    priceHistory: [300, 295, 285, 280, 270, 265, 260],
    deal: { price: 219, endsInMinutes: 180 },
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "electronics",
    price: 1499,
    mrp: 2499,
    stock: 7,
    seller: "TechBazaar",
    rating: 4.1,
    ratingCount: 862,
    bestseller: true,
    image: img(PRODUCT_PHOTOS.earbuds),
    images: [img(PRODUCT_PHOTOS.earbuds)],
    description:
      "True wireless earbuds with active noise cancellation, 30-hour case battery life, and touch controls.",
    highlights: ["Active noise cancellation", "30hr total battery (case + buds)", "IPX5 sweat resistant"],
    priceHistory: [2499, 2299, 1999, 1799, 1699, 1599, 1499],
    deal: { price: 1249, endsInMinutes: 45 },
  },
  {
    id: 4,
    name: "USB-C Fast Charger 33W",
    category: "electronics",
    price: 899,
    mrp: 1199,
    stock: 21,
    seller: "TechBazaar",
    rating: 4.4,
    ratingCount: 340,
    image: img(PRODUCT_PHOTOS.charger),
    images: [img(PRODUCT_PHOTOS.charger)],
    description:
      "Compact 33W GaN fast charger, compatible with most phones, tablets, and laptops via USB-C PD.",
    highlights: ["GaN tech, compact form factor", "33W USB-C Power Delivery", "Overcharge protection"],
    priceHistory: [1199, 1150, 1050, 999, 950, 920, 899],
  },
  {
    id: 5,
    name: "Cotton Handloom Saree",
    category: "fashion",
    price: 1850,
    mrp: 2600,
    stock: 5,
    seller: "Pochampally Weaves",
    rating: 4.7,
    ratingCount: 96,
    image: img(PRODUCT_PHOTOS.saree),
    images: [img(PRODUCT_PHOTOS.saree)],
    description:
      "Handwoven Pochampally ikat cotton saree with traditional geometric motifs, made by local weaving cooperatives.",
    highlights: ["100% handloom cotton", "Traditional ikat weave", "Includes matching blouse piece"],
    priceHistory: [2600, 2500, 2350, 2200, 2050, 1950, 1850],
  },
  {
    id: 6,
    name: "Men's Kurta Set",
    category: "fashion",
    price: 999,
    mrp: 1399,
    stock: 14,
    seller: "Style Junction",
    rating: 4.0,
    ratingCount: 158,
    image: img(PRODUCT_PHOTOS.kurta),
    images: [img(PRODUCT_PHOTOS.kurta)],
    description:
      "Festive-ready cotton-blend kurta and pyjama set, breathable fabric with subtle woven texture.",
    highlights: ["Cotton-blend fabric", "Machine washable", "Available S–XXL"],
    priceHistory: [1399, 1350, 1300, 1250, 1150, 1050, 999],
  },
  {
    id: 7,
    name: "Non-Stick Tawa 28cm",
    category: "home",
    price: 550,
    mrp: 750,
    stock: 26,
    seller: "Ghar Kitchenware",
    rating: 4.2,
    ratingCount: 271,
    image: img(PRODUCT_PHOTOS.tawa),
    images: [img(PRODUCT_PHOTOS.tawa)],
    description:
      "Heavy-gauge non-stick tawa with induction-compatible base, ideal for dosa, roti, and parathas.",
    highlights: ["Induction compatible", "PFOA-free coating", "Ergonomic bakelite handle"],
    priceHistory: [750, 720, 690, 650, 610, 580, 550],
  },
  {
    id: 8,
    name: "Steel Water Bottle 1L",
    category: "home",
    price: 349,
    mrp: 499,
    stock: 40,
    seller: "Ghar Kitchenware",
    rating: 4.6,
    ratingCount: 503,
    bestseller: true,
    image: img(PRODUCT_PHOTOS.bottle),
    images: [img(PRODUCT_PHOTOS.bottle)],
    description:
      "Double-wall vacuum insulated stainless steel bottle, keeps water cold for 24 hours and hot for 12.",
    highlights: ["24hr cold / 12hr hot insulation", "Leak-proof lid", "Food-grade 304 steel"],
    priceHistory: [499, 480, 460, 430, 400, 370, 349],
  },
];

// Additional curated products: IDs 9–100. Category-specific photos are
// hosted by Unsplash; each entry uses the same shape as the original catalog.
const EXTRA_PRODUCTS = [
  {
    "id": 9,
    "name": "Whole Wheat Atta 5kg",
    "category": "grocery",
    "price": 260,
    "mrp": 310,
    "stock": 19,
    "seller": "FreshMart",
    "rating": 4.9,
    "ratingCount": 98,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality whole wheat atta 5kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      310,
      304,
      295,
      281,
      270,
      265,
      260
    ]
  },
  {
    "id": 10,
    "name": "Toor Dal 1kg",
    "category": "grocery",
    "price": 165,
    "mrp": 190,
    "stock": 20,
    "seller": "FreshMart",
    "rating": 4,
    "ratingCount": 105,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality toor dal 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      190,
      186,
      181,
      178,
      172,
      168,
      165
    ]
  },
  {
    "id": 11,
    "name": "Moong Dal 1kg",
    "category": "grocery",
    "price": 140,
    "mrp": 170,
    "stock": 21,
    "seller": "FreshMart",
    "rating": 4.1,
    "ratingCount": 112,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality moong dal 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      170,
      167,
      162,
      151,
      146,
      143,
      140
    ]
  },
  {
    "id": 12,
    "name": "Chana Dal 1kg",
    "category": "grocery",
    "price": 95,
    "mrp": 110,
    "stock": 22,
    "seller": "FreshMart",
    "rating": 4.2,
    "ratingCount": 119,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality chana dal 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      110,
      108,
      105,
      103,
      99,
      97,
      95
    ]
  },
  {
    "id": 13,
    "name": "Organic Jaggery 1kg",
    "category": "grocery",
    "price": 110,
    "mrp": 130,
    "stock": 23,
    "seller": "FreshMart",
    "rating": 4.3,
    "ratingCount": 126,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality organic jaggery 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      130,
      127,
      124,
      119,
      114,
      112,
      110
    ]
  },
  {
    "id": 14,
    "name": "White Sugar 1kg",
    "category": "grocery",
    "price": 48,
    "mrp": 60,
    "stock": 24,
    "seller": "FreshMart",
    "rating": 4.4,
    "ratingCount": 133,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality white sugar 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      60,
      59,
      57,
      52,
      50,
      49,
      48
    ]
  },
  {
    "id": 15,
    "name": "Rock Salt 1kg",
    "category": "grocery",
    "price": 35,
    "mrp": 40,
    "stock": 25,
    "seller": "FreshMart",
    "rating": 4.5,
    "ratingCount": 140,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality rock salt 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      40,
      39,
      38,
      38,
      36,
      36,
      35
    ]
  },
  {
    "id": 16,
    "name": "Sunflower Oil 1L",
    "category": "grocery",
    "price": 145,
    "mrp": 170,
    "stock": 26,
    "seller": "FreshMart",
    "rating": 4.6,
    "ratingCount": 147,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality sunflower oil 1l selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      170,
      167,
      162,
      157,
      151,
      148,
      145
    ]
  },
  {
    "id": 17,
    "name": "Olive Oil 500ml",
    "category": "grocery",
    "price": 399,
    "mrp": 470,
    "stock": 27,
    "seller": "FreshMart",
    "rating": 4.7,
    "ratingCount": 154,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality olive oil 500ml selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      470,
      461,
      447,
      431,
      415,
      407,
      399
    ]
  },
  {
    "id": 18,
    "name": "Green Tea 100 Bags",
    "category": "grocery",
    "price": 299,
    "mrp": 350,
    "stock": 28,
    "seller": "FreshMart",
    "rating": 4.8,
    "ratingCount": 161,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality green tea 100 bags selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 19,
    "name": "Filter Coffee Powder 500g",
    "category": "grocery",
    "price": 220,
    "mrp": 260,
    "stock": 29,
    "seller": "FreshMart",
    "rating": 4.9,
    "ratingCount": 168,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality filter coffee powder 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      260,
      255,
      247,
      238,
      229,
      224,
      220
    ]
  },
  {
    "id": 20,
    "name": "Instant Coffee 200g",
    "category": "grocery",
    "price": 180,
    "mrp": 210,
    "stock": 30,
    "seller": "FreshMart",
    "rating": 4,
    "ratingCount": 175,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality instant coffee 200g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      210,
      206,
      200,
      194,
      187,
      184,
      180
    ]
  },
  {
    "id": 21,
    "name": "Corn Flakes 500g",
    "category": "grocery",
    "price": 160,
    "mrp": 190,
    "stock": 31,
    "seller": "FreshMart",
    "rating": 4.1,
    "ratingCount": 182,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality corn flakes 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      190,
      186,
      181,
      173,
      166,
      163,
      160
    ]
  },
  {
    "id": 22,
    "name": "Rolled Oats 1kg",
    "category": "grocery",
    "price": 190,
    "mrp": 220,
    "stock": 32,
    "seller": "FreshMart",
    "rating": 4.2,
    "ratingCount": 189,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality rolled oats 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      220,
      216,
      209,
      205,
      198,
      194,
      190
    ]
  },
  {
    "id": 23,
    "name": "Honey 500g",
    "category": "grocery",
    "price": 210,
    "mrp": 250,
    "stock": 33,
    "seller": "FreshMart",
    "rating": 4.3,
    "ratingCount": 196,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality honey 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      250,
      245,
      238,
      227,
      218,
      214,
      210
    ]
  },
  {
    "id": 24,
    "name": "Peanut Butter 1kg",
    "category": "grocery",
    "price": 299,
    "mrp": 350,
    "stock": 34,
    "seller": "FreshMart",
    "rating": 4.4,
    "ratingCount": 203,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality peanut butter 1kg selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 25,
    "name": "Mixed Dry Fruits 500g",
    "category": "grocery",
    "price": 449,
    "mrp": 530,
    "stock": 35,
    "seller": "FreshMart",
    "rating": 4.5,
    "ratingCount": 210,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality mixed dry fruits 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      530,
      519,
      504,
      485,
      467,
      458,
      449
    ]
  },
  {
    "id": 26,
    "name": "Cashew Nuts 250g",
    "category": "grocery",
    "price": 240,
    "mrp": 280,
    "stock": 36,
    "seller": "FreshMart",
    "rating": 4.6,
    "ratingCount": 217,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality cashew nuts 250g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      280,
      274,
      266,
      259,
      250,
      245,
      240
    ]
  },
  {
    "id": 27,
    "name": "Almonds 250g",
    "category": "grocery",
    "price": 230,
    "mrp": 270,
    "stock": 37,
    "seller": "FreshMart",
    "rating": 4.7,
    "ratingCount": 224,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality almonds 250g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      270,
      265,
      257,
      248,
      239,
      235,
      230
    ]
  },
  {
    "id": 28,
    "name": "Raisins 500g",
    "category": "grocery",
    "price": 180,
    "mrp": 210,
    "stock": 38,
    "seller": "FreshMart",
    "rating": 4.8,
    "ratingCount": 231,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality raisins 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      210,
      206,
      200,
      194,
      187,
      184,
      180
    ]
  },
  {
    "id": 29,
    "name": "Masala Spice Combo",
    "category": "grocery",
    "price": 199,
    "mrp": 230,
    "stock": 39,
    "seller": "FreshMart",
    "rating": 4.9,
    "ratingCount": 238,
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality masala spice combo selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      230,
      225,
      219,
      215,
      207,
      203,
      199
    ]
  },
  {
    "id": 30,
    "name": "Pickle Jar 500g",
    "category": "grocery",
    "price": 120,
    "mrp": 140,
    "stock": 40,
    "seller": "FreshMart",
    "rating": 4,
    "ratingCount": 245,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality pickle jar 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      140,
      137,
      133,
      130,
      125,
      122,
      120
    ]
  },
  {
    "id": 31,
    "name": "Premium Tea 500g",
    "category": "grocery",
    "price": 190,
    "mrp": 220,
    "stock": 41,
    "seller": "FreshMart",
    "rating": 4.1,
    "ratingCount": 252,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality premium tea 500g selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      220,
      216,
      209,
      205,
      198,
      194,
      190
    ]
  },
  {
    "id": 32,
    "name": "Bluetooth Speaker",
    "category": "electronics",
    "price": 1299,
    "mrp": 1530,
    "stock": 42,
    "seller": "TechBazaar",
    "rating": 4.2,
    "ratingCount": 259,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality bluetooth speaker selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1530,
      1499,
      1454,
      1403,
      1351,
      1325,
      1299
    ]
  },
  {
    "id": 33,
    "name": "Over-Ear Headphones",
    "category": "electronics",
    "price": 1799,
    "mrp": 2120,
    "stock": 43,
    "seller": "TechBazaar",
    "rating": 4.3,
    "ratingCount": 266,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality over-ear headphones selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2120,
      2078,
      2014,
      1943,
      1871,
      1835,
      1799
    ]
  },
  {
    "id": 34,
    "name": "Wireless Mouse",
    "category": "electronics",
    "price": 599,
    "mrp": 710,
    "stock": 44,
    "seller": "TechBazaar",
    "rating": 4.4,
    "ratingCount": 273,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality wireless mouse selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      710,
      696,
      675,
      647,
      623,
      611,
      599
    ]
  },
  {
    "id": 35,
    "name": "Mechanical Keyboard",
    "category": "electronics",
    "price": 2499,
    "mrp": 2950,
    "stock": 10,
    "seller": "TechBazaar",
    "rating": 4.5,
    "ratingCount": 280,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality mechanical keyboard selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2950,
      2891,
      2803,
      2699,
      2599,
      2549,
      2499
    ]
  },
  {
    "id": 36,
    "name": "USB-C Cable 2m",
    "category": "electronics",
    "price": 299,
    "mrp": 350,
    "stock": 11,
    "seller": "TechBazaar",
    "rating": 4.6,
    "ratingCount": 287,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality usb-c cable 2m selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 37,
    "name": "Power Bank 20000mAh",
    "category": "electronics",
    "price": 1499,
    "mrp": 1770,
    "stock": 12,
    "seller": "TechBazaar",
    "rating": 4.7,
    "ratingCount": 294,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality power bank 20000mah selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1770,
      1735,
      1682,
      1619,
      1559,
      1529,
      1499
    ]
  },
  {
    "id": 38,
    "name": "Smart Watch",
    "category": "electronics",
    "price": 2299,
    "mrp": 2710,
    "stock": 13,
    "seller": "TechBazaar",
    "rating": 4.8,
    "ratingCount": 301,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality smart watch selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2710,
      2656,
      2575,
      2483,
      2391,
      2345,
      2299
    ]
  },
  {
    "id": 39,
    "name": "Fitness Band",
    "category": "electronics",
    "price": 1199,
    "mrp": 1410,
    "stock": 14,
    "seller": "TechBazaar",
    "rating": 4.9,
    "ratingCount": 308,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality fitness band selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1410,
      1382,
      1340,
      1295,
      1247,
      1223,
      1199
    ]
  },
  {
    "id": 40,
    "name": "Phone Tripod Stand",
    "category": "electronics",
    "price": 499,
    "mrp": 590,
    "stock": 15,
    "seller": "TechBazaar",
    "rating": 4,
    "ratingCount": 315,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality phone tripod stand selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 41,
    "name": "Ring Light with Stand",
    "category": "electronics",
    "price": 899,
    "mrp": 1060,
    "stock": 16,
    "seller": "TechBazaar",
    "rating": 4.1,
    "ratingCount": 322,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality ring light with stand selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1060,
      1039,
      1007,
      971,
      935,
      917,
      899
    ]
  },
  {
    "id": 42,
    "name": "Webcam 1080p",
    "category": "electronics",
    "price": 1599,
    "mrp": 1890,
    "stock": 17,
    "seller": "TechBazaar",
    "rating": 4.2,
    "ratingCount": 329,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality webcam 1080p selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1890,
      1852,
      1796,
      1727,
      1663,
      1631,
      1599
    ]
  },
  {
    "id": 43,
    "name": "Laptop Stand",
    "category": "electronics",
    "price": 799,
    "mrp": 940,
    "stock": 18,
    "seller": "TechBazaar",
    "rating": 4.3,
    "ratingCount": 336,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality laptop stand selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      940,
      921,
      893,
      863,
      831,
      815,
      799
    ]
  },
  {
    "id": 44,
    "name": "Laptop Backpack",
    "category": "electronics",
    "price": 1299,
    "mrp": 1530,
    "stock": 19,
    "seller": "TechBazaar",
    "rating": 4.4,
    "ratingCount": 343,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality laptop backpack selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1530,
      1499,
      1454,
      1403,
      1351,
      1325,
      1299
    ]
  },
  {
    "id": 45,
    "name": "Portable SSD 1TB",
    "category": "electronics",
    "price": 6999,
    "mrp": 8260,
    "stock": 20,
    "seller": "TechBazaar",
    "rating": 4.5,
    "ratingCount": 350,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality portable ssd 1tb selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      8260,
      8095,
      7847,
      7559,
      7279,
      7139,
      6999
    ]
  },
  {
    "id": 46,
    "name": "USB Hub 4-Port",
    "category": "electronics",
    "price": 499,
    "mrp": 590,
    "stock": 21,
    "seller": "TechBazaar",
    "rating": 4.6,
    "ratingCount": 357,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality usb hub 4-port selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 47,
    "name": "HDMI Cable 2m",
    "category": "electronics",
    "price": 249,
    "mrp": 290,
    "stock": 22,
    "seller": "TechBazaar",
    "rating": 4.7,
    "ratingCount": 364,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality hdmi cable 2m selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      290,
      284,
      276,
      269,
      259,
      254,
      249
    ]
  },
  {
    "id": 48,
    "name": "Gaming Controller",
    "category": "electronics",
    "price": 1899,
    "mrp": 2240,
    "stock": 23,
    "seller": "TechBazaar",
    "rating": 4.8,
    "ratingCount": 371,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality gaming controller selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2240,
      2195,
      2128,
      2051,
      1975,
      1937,
      1899
    ]
  },
  {
    "id": 49,
    "name": "Desk LED Lamp",
    "category": "electronics",
    "price": 699,
    "mrp": 820,
    "stock": 24,
    "seller": "TechBazaar",
    "rating": 4.9,
    "ratingCount": 378,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality desk led lamp selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 50,
    "name": "Wi-Fi Router",
    "category": "electronics",
    "price": 1699,
    "mrp": 2000,
    "stock": 25,
    "seller": "TechBazaar",
    "rating": 4,
    "ratingCount": 385,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality wi-fi router selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2000,
      1960,
      1900,
      1835,
      1767,
      1733,
      1699
    ]
  },
  {
    "id": 51,
    "name": "Smart Plug",
    "category": "electronics",
    "price": 799,
    "mrp": 940,
    "stock": 26,
    "seller": "TechBazaar",
    "rating": 4.1,
    "ratingCount": 392,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality smart plug selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      940,
      921,
      893,
      863,
      831,
      815,
      799
    ]
  },
  {
    "id": 52,
    "name": "Electric Trimmer",
    "category": "electronics",
    "price": 999,
    "mrp": 1180,
    "stock": 27,
    "seller": "TechBazaar",
    "rating": 4.2,
    "ratingCount": 399,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality electric trimmer selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1180,
      1156,
      1121,
      1079,
      1039,
      1019,
      999
    ]
  },
  {
    "id": 53,
    "name": "Hair Dryer",
    "category": "electronics",
    "price": 1199,
    "mrp": 1410,
    "stock": 28,
    "seller": "TechBazaar",
    "rating": 4.3,
    "ratingCount": 406,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality hair dryer selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1410,
      1382,
      1340,
      1295,
      1247,
      1223,
      1199
    ]
  },
  {
    "id": 54,
    "name": "Digital Alarm Clock",
    "category": "electronics",
    "price": 499,
    "mrp": 590,
    "stock": 29,
    "seller": "TechBazaar",
    "rating": 4.4,
    "ratingCount": 413,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality digital alarm clock selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 55,
    "name": "Women's Cotton Kurti",
    "category": "fashion",
    "price": 699,
    "mrp": 820,
    "stock": 30,
    "seller": "Style Junction",
    "rating": 4.5,
    "ratingCount": 420,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality women's cotton kurti selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 56,
    "name": "Men's Casual Shirt",
    "category": "fashion",
    "price": 799,
    "mrp": 940,
    "stock": 31,
    "seller": "Style Junction",
    "rating": 4.6,
    "ratingCount": 427,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality men's casual shirt selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      940,
      921,
      893,
      863,
      831,
      815,
      799
    ]
  },
  {
    "id": 57,
    "name": "Women's Denim Jeans",
    "category": "fashion",
    "price": 1199,
    "mrp": 1410,
    "stock": 32,
    "seller": "Style Junction",
    "rating": 4.7,
    "ratingCount": 434,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality women's denim jeans selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1410,
      1382,
      1340,
      1295,
      1247,
      1223,
      1199
    ]
  },
  {
    "id": 58,
    "name": "Men's Slim Fit Jeans",
    "category": "fashion",
    "price": 1299,
    "mrp": 1530,
    "stock": 33,
    "seller": "Style Junction",
    "rating": 4.8,
    "ratingCount": 441,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality men's slim fit jeans selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1530,
      1499,
      1454,
      1403,
      1351,
      1325,
      1299
    ]
  },
  {
    "id": 59,
    "name": "Cotton T-Shirt",
    "category": "fashion",
    "price": 399,
    "mrp": 470,
    "stock": 34,
    "seller": "Style Junction",
    "rating": 4.9,
    "ratingCount": 448,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality cotton t-shirt selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      470,
      461,
      447,
      431,
      415,
      407,
      399
    ]
  },
  {
    "id": 60,
    "name": "Polo T-Shirt",
    "category": "fashion",
    "price": 499,
    "mrp": 590,
    "stock": 35,
    "seller": "Style Junction",
    "rating": 4,
    "ratingCount": 455,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality polo t-shirt selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 61,
    "name": "Women's Leggings",
    "category": "fashion",
    "price": 299,
    "mrp": 350,
    "stock": 36,
    "seller": "Style Junction",
    "rating": 4.1,
    "ratingCount": 462,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality women's leggings selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 62,
    "name": "Printed Dupatta",
    "category": "fashion",
    "price": 349,
    "mrp": 410,
    "stock": 37,
    "seller": "Style Junction",
    "rating": 4.2,
    "ratingCount": 469,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality printed dupatta selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      410,
      402,
      390,
      377,
      363,
      356,
      349
    ]
  },
  {
    "id": 63,
    "name": "Ethnic Dress",
    "category": "fashion",
    "price": 1499,
    "mrp": 1770,
    "stock": 38,
    "seller": "Style Junction",
    "rating": 4.3,
    "ratingCount": 476,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality ethnic dress selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1770,
      1735,
      1682,
      1619,
      1559,
      1529,
      1499
    ]
  },
  {
    "id": 64,
    "name": "Men's Formal Trousers",
    "category": "fashion",
    "price": 999,
    "mrp": 1180,
    "stock": 39,
    "seller": "Style Junction",
    "rating": 4.4,
    "ratingCount": 483,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality men's formal trousers selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1180,
      1156,
      1121,
      1079,
      1039,
      1019,
      999
    ]
  },
  {
    "id": 65,
    "name": "Running Shoes",
    "category": "fashion",
    "price": 1799,
    "mrp": 2120,
    "stock": 40,
    "seller": "Style Junction",
    "rating": 4.5,
    "ratingCount": 490,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality running shoes selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2120,
      2078,
      2014,
      1943,
      1871,
      1835,
      1799
    ]
  },
  {
    "id": 66,
    "name": "Casual Sneakers",
    "category": "fashion",
    "price": 1599,
    "mrp": 1890,
    "stock": 41,
    "seller": "Style Junction",
    "rating": 4.6,
    "ratingCount": 497,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality casual sneakers selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1890,
      1852,
      1796,
      1727,
      1663,
      1631,
      1599
    ]
  },
  {
    "id": 67,
    "name": "Women's Sandals",
    "category": "fashion",
    "price": 799,
    "mrp": 940,
    "stock": 42,
    "seller": "Style Junction",
    "rating": 4.7,
    "ratingCount": 504,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality women's sandals selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      940,
      921,
      893,
      863,
      831,
      815,
      799
    ]
  },
  {
    "id": 68,
    "name": "Men's Flip-Flops",
    "category": "fashion",
    "price": 299,
    "mrp": 350,
    "stock": 43,
    "seller": "Style Junction",
    "rating": 4.8,
    "ratingCount": 511,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality men's flip-flops selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 69,
    "name": "Leather Wallet",
    "category": "fashion",
    "price": 599,
    "mrp": 710,
    "stock": 44,
    "seller": "Style Junction",
    "rating": 4.9,
    "ratingCount": 518,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality leather wallet selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      710,
      696,
      675,
      647,
      623,
      611,
      599
    ]
  },
  {
    "id": 70,
    "name": "Everyday Handbag",
    "category": "fashion",
    "price": 1199,
    "mrp": 1410,
    "stock": 10,
    "seller": "Style Junction",
    "rating": 4,
    "ratingCount": 525,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality everyday handbag selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1410,
      1382,
      1340,
      1295,
      1247,
      1223,
      1199
    ]
  },
  {
    "id": 71,
    "name": "Canvas Backpack",
    "category": "fashion",
    "price": 899,
    "mrp": 1060,
    "stock": 11,
    "seller": "Style Junction",
    "rating": 4.1,
    "ratingCount": 532,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality canvas backpack selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1060,
      1039,
      1007,
      971,
      935,
      917,
      899
    ]
  },
  {
    "id": 72,
    "name": "Classic Belt",
    "category": "fashion",
    "price": 399,
    "mrp": 470,
    "stock": 12,
    "seller": "Style Junction",
    "rating": 4.2,
    "ratingCount": 539,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality classic belt selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      470,
      461,
      447,
      431,
      415,
      407,
      399
    ]
  },
  {
    "id": 73,
    "name": "Sunglasses",
    "category": "fashion",
    "price": 699,
    "mrp": 820,
    "stock": 13,
    "seller": "Style Junction",
    "rating": 4.3,
    "ratingCount": 546,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality sunglasses selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 74,
    "name": "Analog Wrist Watch",
    "category": "fashion",
    "price": 1499,
    "mrp": 1770,
    "stock": 14,
    "seller": "Style Junction",
    "rating": 4.4,
    "ratingCount": 553,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality analog wrist watch selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1770,
      1735,
      1682,
      1619,
      1559,
      1529,
      1499
    ]
  },
  {
    "id": 75,
    "name": "Cotton Socks 3-Pack",
    "category": "fashion",
    "price": 199,
    "mrp": 230,
    "stock": 15,
    "seller": "Style Junction",
    "rating": 4.5,
    "ratingCount": 560,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality cotton socks 3-pack selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      230,
      225,
      219,
      215,
      207,
      203,
      199
    ]
  },
  {
    "id": 76,
    "name": "Winter Hoodie",
    "category": "fashion",
    "price": 1099,
    "mrp": 1300,
    "stock": 16,
    "seller": "Style Junction",
    "rating": 4.6,
    "ratingCount": 567,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality winter hoodie selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1300,
      1274,
      1235,
      1187,
      1143,
      1121,
      1099
    ]
  },
  {
    "id": 77,
    "name": "Rain Jacket",
    "category": "fashion",
    "price": 999,
    "mrp": 1180,
    "stock": 17,
    "seller": "Style Junction",
    "rating": 4.7,
    "ratingCount": 574,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality rain jacket selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1180,
      1156,
      1121,
      1079,
      1039,
      1019,
      999
    ]
  },
  {
    "id": 78,
    "name": "Ceramic Dinner Set",
    "category": "home",
    "price": 1499,
    "mrp": 1770,
    "stock": 18,
    "seller": "Ghar Home",
    "rating": 4.8,
    "ratingCount": 581,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality ceramic dinner set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1770,
      1735,
      1682,
      1619,
      1559,
      1529,
      1499
    ]
  },
  {
    "id": 79,
    "name": "Stainless Steel Cookware Set",
    "category": "home",
    "price": 2499,
    "mrp": 2950,
    "stock": 19,
    "seller": "Ghar Home",
    "rating": 4.9,
    "ratingCount": 588,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality stainless steel cookware set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2950,
      2891,
      2803,
      2699,
      2599,
      2549,
      2499
    ]
  },
  {
    "id": 80,
    "name": "Pressure Cooker 5L",
    "category": "home",
    "price": 1899,
    "mrp": 2240,
    "stock": 20,
    "seller": "Ghar Home",
    "rating": 4,
    "ratingCount": 595,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality pressure cooker 5l selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2240,
      2195,
      2128,
      2051,
      1975,
      1937,
      1899
    ]
  },
  {
    "id": 81,
    "name": "Electric Kettle 1.5L",
    "category": "home",
    "price": 999,
    "mrp": 1180,
    "stock": 21,
    "seller": "Ghar Home",
    "rating": 4.1,
    "ratingCount": 602,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality electric kettle 1.5l selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1180,
      1156,
      1121,
      1079,
      1039,
      1019,
      999
    ]
  },
  {
    "id": 82,
    "name": "Mixer Grinder",
    "category": "home",
    "price": 2499,
    "mrp": 2950,
    "stock": 22,
    "seller": "Ghar Home",
    "rating": 4.2,
    "ratingCount": 609,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality mixer grinder selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2950,
      2891,
      2803,
      2699,
      2599,
      2549,
      2499
    ]
  },
  {
    "id": 83,
    "name": "Storage Container Set",
    "category": "home",
    "price": 599,
    "mrp": 710,
    "stock": 23,
    "seller": "Ghar Home",
    "rating": 4.3,
    "ratingCount": 616,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality storage container set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      710,
      696,
      675,
      647,
      623,
      611,
      599
    ]
  },
  {
    "id": 84,
    "name": "Non-Stick Frying Pan",
    "category": "home",
    "price": 699,
    "mrp": 820,
    "stock": 24,
    "seller": "Ghar Home",
    "rating": 4.4,
    "ratingCount": 623,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality non-stick frying pan selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 85,
    "name": "Kitchen Knife Set",
    "category": "home",
    "price": 799,
    "mrp": 940,
    "stock": 25,
    "seller": "Ghar Home",
    "rating": 4.5,
    "ratingCount": 630,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality kitchen knife set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      940,
      921,
      893,
      863,
      831,
      815,
      799
    ]
  },
  {
    "id": 86,
    "name": "Cotton Bedsheet Set",
    "category": "home",
    "price": 1199,
    "mrp": 1410,
    "stock": 26,
    "seller": "Ghar Home",
    "rating": 4.6,
    "ratingCount": 637,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality cotton bedsheet set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1410,
      1382,
      1340,
      1295,
      1247,
      1223,
      1199
    ]
  },
  {
    "id": 87,
    "name": "Microfiber Pillow Pair",
    "category": "home",
    "price": 699,
    "mrp": 820,
    "stock": 27,
    "seller": "Ghar Home",
    "rating": 4.7,
    "ratingCount": 644,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality microfiber pillow pair selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 88,
    "name": "Bath Towel Set",
    "category": "home",
    "price": 599,
    "mrp": 710,
    "stock": 28,
    "seller": "Ghar Home",
    "rating": 4.8,
    "ratingCount": 651,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality bath towel set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      710,
      696,
      675,
      647,
      623,
      611,
      599
    ]
  },
  {
    "id": 89,
    "name": "Curtain Pair",
    "category": "home",
    "price": 899,
    "mrp": 1060,
    "stock": 29,
    "seller": "Ghar Home",
    "rating": 4.9,
    "ratingCount": 658,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality curtain pair selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1060,
      1039,
      1007,
      971,
      935,
      917,
      899
    ]
  },
  {
    "id": 90,
    "name": "Decorative Table Lamp",
    "category": "home",
    "price": 1299,
    "mrp": 1530,
    "stock": 30,
    "seller": "Ghar Home",
    "rating": 4,
    "ratingCount": 665,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality decorative table lamp selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      1530,
      1499,
      1454,
      1403,
      1351,
      1325,
      1299
    ]
  },
  {
    "id": 91,
    "name": "Wall Clock",
    "category": "home",
    "price": 499,
    "mrp": 590,
    "stock": 31,
    "seller": "Ghar Home",
    "rating": 4.1,
    "ratingCount": 672,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality wall clock selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 92,
    "name": "Laundry Basket",
    "category": "home",
    "price": 399,
    "mrp": 470,
    "stock": 32,
    "seller": "Ghar Home",
    "rating": 4.2,
    "ratingCount": 679,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality laundry basket selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      470,
      461,
      447,
      431,
      415,
      407,
      399
    ]
  },
  {
    "id": 93,
    "name": "Floor Mat Set",
    "category": "home",
    "price": 299,
    "mrp": 350,
    "stock": 33,
    "seller": "Ghar Home",
    "rating": 4.3,
    "ratingCount": 686,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality floor mat set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 94,
    "name": "Insulated Lunch Box",
    "category": "home",
    "price": 499,
    "mrp": 590,
    "stock": 34,
    "seller": "Ghar Home",
    "rating": 4.4,
    "ratingCount": 693,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality insulated lunch box selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  },
  {
    "id": 95,
    "name": "Reusable Food Containers",
    "category": "home",
    "price": 449,
    "mrp": 530,
    "stock": 35,
    "seller": "Ghar Home",
    "rating": 4.5,
    "ratingCount": 700,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality reusable food containers selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      530,
      519,
      504,
      485,
      467,
      458,
      449
    ]
  },
  {
    "id": 96,
    "name": "Vacuum Flask 1L",
    "category": "home",
    "price": 699,
    "mrp": 820,
    "stock": 36,
    "seller": "Ghar Home",
    "rating": 4.6,
    "ratingCount": 707,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality vacuum flask 1l selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      820,
      804,
      779,
      755,
      727,
      713,
      699
    ]
  },
  {
    "id": 97,
    "name": "Watering Can",
    "category": "home",
    "price": 299,
    "mrp": 350,
    "stock": 37,
    "seller": "Ghar Home",
    "rating": 4.7,
    "ratingCount": 714,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality watering can selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      350,
      343,
      333,
      323,
      311,
      305,
      299
    ]
  },
  {
    "id": 98,
    "name": "Indoor Planter Set",
    "category": "home",
    "price": 599,
    "mrp": 710,
    "stock": 38,
    "seller": "Ghar Home",
    "rating": 4.8,
    "ratingCount": 721,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality indoor planter set selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      710,
      696,
      675,
      647,
      623,
      611,
      599
    ]
  },
  {
    "id": 99,
    "name": "Foldable Study Table",
    "category": "home",
    "price": 1999,
    "mrp": 2360,
    "stock": 39,
    "seller": "Ghar Home",
    "rating": 4.9,
    "ratingCount": 728,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality foldable study table selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      2360,
      2313,
      2242,
      2159,
      2079,
      2039,
      1999
    ]
  },
  {
    "id": 100,
    "name": "Office Chair Cushion",
    "category": "home",
    "price": 499,
    "mrp": 590,
    "stock": 40,
    "seller": "Ghar Home",
    "rating": 4,
    "ratingCount": 735,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=450&fit=crop&auto=format&q=80"
    ],
    "description": "Quality office chair cushion selected for everyday value and reliable use.",
    "highlights": [
      "Quality checked",
      "Value pricing",
      "Ready to ship"
    ],
    "priceHistory": [
      590,
      578,
      561,
      539,
      519,
      509,
      499
    ]
  }
];

PRODUCTS.push(...EXTRA_PRODUCTS);

/*
|--------------------------------------------------------------------------
| Seller-added products (persisted to localStorage)
|--------------------------------------------------------------------------
|
| Sellers can add/edit/delete their own products from the Seller Dashboard.
| There's still no backend, so these are layered on top of the static
| PRODUCTS array above and saved to localStorage under SELLER_PRODUCTS_KEY.
| Every consumer of PRODUCTS (Home, Products, ProductDetails, ProductCard)
| keeps working unchanged because we mutate PRODUCTS in place.
|
*/

const SELLER_PRODUCTS_KEY = "bsp_seller_products";

// Inline placeholder so a product with no photo never shows a broken image
// (the old via.placeholder.com link fails offline / when blocked).
const DEFAULT_PRODUCT_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#FAF6EF"/><text x="50%" y="50%" fill="#202A44" font-family="sans-serif" font-size="20" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'
  );

function loadSellerProducts() {
  try {
    const raw = localStorage.getItem(SELLER_PRODUCTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistSellerProducts() {
  const sellerProducts = PRODUCTS.filter((p) => p.isSellerAdded);
  try {
    localStorage.setItem(SELLER_PRODUCTS_KEY, JSON.stringify(sellerProducts));
  } catch (err) {
    // Most commonly a QuotaExceededError — localStorage only has a few MB,
    // and full-size photos add up fast. Let the caller roll back and show
    // a clear message instead of the product silently failing to save.
    throw new Error(
      "Not enough browser storage left to save this product. Try removing an image or using a smaller photo."
    );
  }
}

// Hydrate PRODUCTS with anything previously added by sellers, once, at load.
loadSellerProducts().forEach((p) => PRODUCTS.push(p));

/**
 * Products belonging to a given seller (matched by ownerUsername, the
 * localStorage "username" set at login). Falls back to all seller-added
 * products if no owner is given.
 */
export function getSellerProducts(ownerUsername) {
  return PRODUCTS.filter(
    (p) => p.isSellerAdded && (!ownerUsername || p.ownerUsername === ownerUsername)
  );
}

let lastId = 0;

// Date.now() alone repeats when several products are created in the same
// millisecond (bulk upload), which made products overwrite/duplicate each
// other. This always returns a strictly increasing id.
function nextProductId() {
  lastId = Math.max(Date.now(), lastId + 1);
  return lastId;
}

function buildSellerProduct(ownerUsername, ownerName, data) {
  const images = (data.images && data.images.length ? data.images : [data.image]).filter(Boolean);

  return {
    id: nextProductId(),
    name: data.name,
    category: data.category || "grocery",
    price: Number(data.price) || 0,
    mrp: Number(data.mrp) || Number(data.price) || 0,
    stock: Number(data.stock) || 0,
    seller: ownerName || "You",
    rating: 0,
    ratingCount: 0,
    image: images[0] || DEFAULT_PRODUCT_IMAGE,
    images: images.length ? images : undefined,
    description: data.description || "",
    highlights: [],
    priceHistory: [Number(data.price) || 0],
    isSellerAdded: true,
    ownerUsername,
  };
}

/**
 * Add a new product on behalf of a seller. `data` may include name,
 * category, price, mrp, stock, description, image (data URL or link),
 * images (array of data URLs/links). Returns the created product.
 */
export function addSellerProduct(ownerUsername, ownerName, data) {
  return addSellerProducts(ownerUsername, ownerName, [data])[0];
}

/**
 * Add several products in one go (bulk upload). All-or-nothing: if the
 * browser storage quota is exceeded, none of them are kept.
 * Returns the array of created products.
 */
export function addSellerProducts(ownerUsername, ownerName, list) {
  const created = list.map((data) => {
    const product = buildSellerProduct(ownerUsername, ownerName, data);
    PRODUCTS.push(product);
    return product;
  });

  try {
    persistSellerProducts();
  } catch (err) {
    created.forEach((product) => {
      const i = PRODUCTS.indexOf(product);
      if (i !== -1) PRODUCTS.splice(i, 1);
    });
    throw err;
  }

  return created;
}

/**
 * Update an existing seller-added product by id. Ignored (returns null)
 * for products that weren't added by a seller (i.e. the static catalog).
 */
export function updateSellerProduct(id, data) {
  const numId = Number(id);
  const product = PRODUCTS.find((p) => p.id === numId && p.isSellerAdded);
  if (!product) return null;

  const snapshot = { ...product };
  const images = (data.images && data.images.length ? data.images : [data.image]).filter(Boolean);

  product.name = data.name ?? product.name;
  product.category = data.category ?? product.category;
  product.price = data.price !== undefined ? Number(data.price) : product.price;
  product.mrp = data.mrp !== undefined ? Number(data.mrp) : product.mrp;
  product.stock = data.stock !== undefined ? Number(data.stock) : product.stock;
  product.description = data.description ?? product.description;

  if (images.length) {
    product.image = images[0];
    product.images = images;
  }

  try {
    persistSellerProducts();
  } catch (err) {
    Object.assign(product, snapshot); // roll back to the last saved version
    throw err;
  }

  return product;
}

/**
 * Remove a seller-added product by id. No-ops for static catalog products.
 */
export function deleteSellerProduct(id) {
  const numId = Number(id);
  const index = PRODUCTS.findIndex((p) => p.id === numId && p.isSellerAdded);
  if (index === -1) return false;

  PRODUCTS.splice(index, 1);
  persistSellerProducts();

  return true;
}

export function getProductById(id) {
  const numId = Number(id);
  return PRODUCTS.find((p) => p.id === numId) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export function getDealProducts() {
  return PRODUCTS.filter((p) => p.deal);
}

export function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

export function discountPercent(price, mrp) {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}
