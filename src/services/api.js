/** @format */

import axios from "axios";

// 1. Configure the Axios Client
const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 8000, // 8 seconds is a fair wait before deciding the server is down
});

// 2. The Expanded High-Quality Mock Data Fallback
const fallbackProducts = [
  {
    id: 901,
    title: "Neon Genesis Hoodie",
    price: 120.0,
    category: "apparel",
    description:
      "Premium heavyweight cotton with reflective cyberpunk detailing.",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 902,
    title: "Zero-G Wireless Headphones",
    price: 299.99,
    category: "electronics",
    description: "Noise-cancelling audio gear for deep work sessions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 903,
    title: "Nomad Tactical Backpack",
    price: 150.5,
    category: "accessories",
    description: "Water-resistant, anti-theft design for the digital nomad.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 904,
    title: "Mechanical Keychron K2",
    price: 89.0,
    category: "electronics",
    description: "Tactile feedback for superior coding speed.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b91a603?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 905,
    title: "Minimalist Desk Lamp",
    price: 45.0,
    category: "furniture",
    description: "Adjustable warm light for late-night hacking.",
    image:
      "https://images.unsplash.com/photo-1507473888900-52e1ad14592a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 906,
    title: "Crypto Hardware Wallet",
    price: 110.0,
    category: "security",
    description: "Cold storage for your digital assets. Bank-grade security.",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// 3. The Service Object
export const ProductService = {
  getAllProducts: async () => {
    try {
      // Primary Route: Attempt the real API
      const response = await apiClient.get("/products");
      return response.data;
    } catch (error) {
      // Fallback Route: Log the error silently and return the sleek mock data
      console.warn(
        "Primary API unavailable. Seamlessly switching to local fallback data.",
      );
      return fallbackProducts;
    }
  },
  getProductById: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return fallbackProducts.find((p) => p.id === parseInt(id));
    }
  },
};
